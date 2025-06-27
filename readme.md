# OCR Extraction Utility

A simple utility for extracting text from structured OCR JSON data into readable plain-text files. Available in both Python and TypeScript implementations.

## Features

- Converts structured OCR JSON data to plain-text files
- Maintains page order and adds clear page delimiters
- Supports multiple documents in a single JSON file
- Command-line interface with customisable input/output paths
- Cross-platform compatibility

## Input Format

The utility expects OCR data in this JSON structure:

```json
{
  "document1.pdf": [
    {"page": 1, "text": "First page content..."},
    {"page": 2, "text": "Second page content..."}
  ],
  "document2.pdf": [
    {"page": 1, "text": "Another document..."}
  ]
}
```

## Output Format

Each document becomes a separate `.txt` file with page delimiters:

```
--- Page 1 ---
First page content...

--- Page 2 ---
Second page content...

```

## Usage

### Python Implementation

```bash
# Basic usage
python extract_ocr_text.py

# Custom input/output paths
python extract_ocr_text.py -i mydata.json -o extracted/

# Show help
python extract_ocr_text.py --help
```

### TypeScript Implementation

```bash
# Install dependencies (if using as module)
npm install

# Basic usage
node extractOcrText.js

# Custom input/output paths
node extractOcrText.js -i mydata.json -o extracted/

# Show help
node extractOcrText.js --help
```

## Requirements

### Python
- Python 3.6+
- No external dependencies (uses only standard library)

### TypeScript
- Node.js 12+
- TypeScript (for compilation)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ocr-extraction-utility.git
   cd ocr-extraction-utility
   ```

2. For TypeScript, compile if needed:
   ```bash
   tsc extractOcrText.ts
   ```

## Examples

### Extract from default file
```bash
# Creates text files in ./output/ from ./ocrData.json
python extract_ocr_text.py
```

### Extract multiple documents
```bash
# Process large OCR dataset
python extract_ocr_text.py -i batch_ocr_results.json -o processed_docs/
```

### Integration example
```python
from extract_ocr_text import extract_text

# Use in your Python code
extract_text('path/to/ocr.json', 'output/directory/')
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this project.

## Licence

This project is licenced under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and changes.
