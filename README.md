# OCR Extraction Utility

A utility to convert OCR JSON data into plain-text files, one per PDF, with page markers.

## Prerequisites

* **Node.js** (v14+) and **npm**
* **Python** (v3.6+)
* (Optional) **TypeScript** & **ts-node** if you use the TS scripts directly

## Setup

1. **Clone** the repo and **install dependencies**:

   ```bash
   git clone https://github.com/your-username/ocr-extraction-utility.git
   cd ocr-extraction-utility
   npm install
   ```

2. **Generate `ocrData.json`**
   This exports the `ocr` object from your TypeScript module (src/ocrData.ts) into a JSON file:

   ```bash
   # Compile TS to JS
   npx tsc

   # Run the generator script (make sure it's at project root)
   node generateOcrDataJson.js
   ```

   * **What it does:** reads `dist/src/ocrData.js` (the compiled module) and writes `ocrData.json` using `JSON.stringify(ocr, null, 2)`.
   * **Result:** a fully populated `ocrData.json` in your project root.

3. **Extract Text**

4. **Clone** the repo and **install dependencies**:

   ```bash
   git clone https://github.com/your-username/ocr-extraction-utility.git
   cd ocr-extraction-utility
   npm install
   ```

5. **Generate OCR JSON**
   If your OCR data is in `src/ocrData.ts`:

   ```bash
   # Compile TS to JS
   npx tsc

   # Export JSON
   node generateOcrDataJson.js
   ```

   This creates `ocrData.json` in the project root.

6. **Extract Text**

   ```bash
   # Using Python script
   python extract_ocr_text.py -i ocrData.json -o output
   ```

   * `-i`: Input JSON (default `ocrData.json`)
   * `-o`: Output folder (default `output`)

## Output

* Plain-text files in `output/`, named after each PDF (e.g., `ComReg-0945R6.txt`).
* Each file contains sections:

  ```text
  --- Page 1 ---
  [OCR text]

  --- Page 2 ---
  [OCR text]
  ```

## Customization

* **Output directory**: change `-o` flag or modify `output_dir` in scripts.
* **Merge all docs**: adapt the Python or TS script to concatenate rather than separate.
* **Formatting**: insert text cleanup (e.g., remove extra newlines) in the extraction logic.

---

Feel free to open issues or submit PRs for enhancements!
