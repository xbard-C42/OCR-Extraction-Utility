# OCR Extraction Utility

This project provides:

* **ocrData.ts**: A TypeScript module containing OCR results for PDF files, structured as `PageContent[]` entries per document.
* **extractOcrText.ts**: A script that reads `ocrData.ts` and writes plain-text files for each document in an `output/` directory, with page markers.

## Prerequisites

* [Node.js](https://nodejs.org/) (v14+) with npm
* TypeScript and ts-node globally installed (optional)

## Installation

1. Clone the repository or copy files into your project.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Ensure `ocrData.ts` and `extractOcrText.ts` are in the same directory (e.g., `src/`).

## Usage

1. **Compile & Run via ts-node** (no manual build required):

   ```bash
   npx ts-node src/extractOcrText.ts
   ```

   This will create an `output/` folder (if it doesn’t exist) and generate `.txt` files named after each PDF (e.g., `ComReg-0945R6.txt`).

2. **Build & Execute**:

   ```bash
   # Compile TypeScript
   npx tsc

   # Run built script
   node dist/extractOcrText.js
   ```

## Output Structure

* **output/ComReg-0945R6.txt**

  ```text
  --- Page 1 ---
  An Coimisiún um
  Rialáil Cumarsáide ...

  --- Page 2 ---
  Content
  Section
  1 Introduction..
  ...
  ```

Each file contains page separators and the raw OCR text.

## Customization

* **Change Output Directory**: Modify the `outDir` variable in `extractOcrText.ts`.
* **Merge All Documents**: Instead of separate files, concatenate all page texts into a single file by adjusting the write logic.
* **Formatting**: Add additional text processing (e.g., removing line breaks) before writing to the file.

## Next Steps

* Integrate downstream processing: indexing, search, or data analysis pipelines.
* Convert to Markdown or JSON for structured data needs.
* Automate as part of a CI/CD workflow for updating OCR content.

Feel free to adjust the script to match your specific requirements!
