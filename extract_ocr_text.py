#!/usr/bin/env python3
import json
import os
import argparse

"""
Python equivalent of extractOcrText.ts:
Loads an OCR JSON file and writes plain-text files for each document,
with page delimiters, into the specified output directory.

Expected input JSON structure:
{
  "filename.pdf": [
    {"page": 1, "text": "..."},
    {"page": 2, "text": "..."},
    ...
  ],
  ...
}
"""

def extract_text(ocr_json_path: str, output_dir: str) -> None:
    # Load OCR data from JSON
    with open(ocr_json_path, 'r', encoding='utf-8') as f:
        ocr_data = json.load(f)

    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)

    for filename, pages in ocr_data.items():
        base_name, _ = os.path.splitext(os.path.basename(filename))
        output_path = os.path.join(output_dir, f"{base_name}.txt")

        # Sort pages by page number
        pages_sorted = sorted(pages, key=lambda p: p.get('page', 0))

        with open(output_path, 'w', encoding='utf-8') as out_file:
            for page in pages_sorted:
                page_num = page.get('page')
                text = page.get('text', '')
                out_file.write(f"--- Page {page_num} ---\n")
                out_file.write(text + "\n\n")

        print(f"Extracted text for {filename} ➜ {output_path}")


def main():
    parser = argparse.ArgumentParser(
        description='Extract OCR JSON to plain-text files.'
    )
    parser.add_argument(
        '-i', '--input', default='ocrData.json',
        help='Path to OCR JSON file (default: ocrData.json)'
    )
    parser.add_argument(
        '-o', '--output', default='output',
        help='Directory to write extracted text files (default: output)'
    )
    args = parser.parse_args()

    extract_text(args.input, args.output)

if __name__ == '__main__':
    main()
