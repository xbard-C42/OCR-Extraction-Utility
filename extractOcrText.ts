#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';

/**
 * TypeScript equivalent of extract_ocr_text.py:
 * Loads an OCR JSON file and writes plain-text files for each document,
 * with page delimiters, into the specified output directory.
 * 
 * Expected input JSON structure:
 * {
 *   "filename.pdf": [
 *     {"page": 1, "text": "..."},
 *     {"page": 2, "text": "..."},
 *     ...
 *   ],
 *   ...
 * }
 */

interface OcrPage {
  page: number;
  text: string;
}

interface OcrData {
  [filename: string]: OcrPage[];
}

function extractText(ocrJsonPath: string, outputDir: string): void {
  try {
    // Load OCR data from JSON
    const rawData = fs.readFileSync(ocrJsonPath, 'utf-8');
    const ocrData: OcrData = JSON.parse(rawData);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const [filename, pages] of Object.entries(ocrData)) {
      const baseName = path.basename(filename, path.extname(filename));
      const outputPath = path.join(outputDir, `${baseName}.txt`);

      // Sort pages by page number
      const pagesSorted = pages.sort((a, b) => (a.page || 0) - (b.page || 0));

      let content = '';
      for (const page of pagesSorted) {
        const pageNum = page.page;
        const text = page.text || '';
        content += `--- Page ${pageNum} ---\n`;
        content += text + '\n\n';
      }

      fs.writeFileSync(outputPath, content, 'utf-8');
      console.log(`Extracted text for ${filename} ➜ ${outputPath}`);
    }
  } catch (error) {
    console.error('Error processing OCR data:', error);
    process.exit(1);
  }
}

function main(): void {
  const args = process.argv.slice(2);
  
  let inputPath = 'ocrData.json';
  let outputDir = 'output';

  // Simple argument parsing
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '-i' || args[i] === '--input') {
      inputPath = args[i + 1];
      i++;
    } else if (args[i] === '-o' || args[i] === '--output') {
      outputDir = args[i + 1];
      i++;
    } else if (args[i] === '-h' || args[i] === '--help') {
      console.log(`
Usage: node extractOcrText.js [options]

Options:
  -i, --input   Path to OCR JSON file (default: ocrData.json)
  -o, --output  Directory to write extracted text files (default: output)
  -h, --help    Show this help message
`);
      process.exit(0);
    }
  }

  extractText(inputPath, outputDir);
}

if (require.main === module) {
  main();
}
