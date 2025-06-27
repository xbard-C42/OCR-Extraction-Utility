# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- TypeScript implementation with full feature parity to Python version
- Proper project documentation and README
- Contributing guidelines
- Command-line argument parsing for both implementations

### Fixed
- Corrected file structure (moved contributing content to proper CONTRIBUTING.md)
- Fixed extractOcrText.ts to contain actual TypeScript code instead of documentation
- Added proper error handling and type definitions

## [1.0.0] - 2025-06-27

### Added
- Initial Python implementation (`extract_ocr_text.py`)
- Basic project structure with Apache 2.0 licence
- Code of Conduct
- Support for structured OCR JSON input
- Page-delimited plain-text output
- Command-line interface with customisable paths
- Cross-platform compatibility

### Features
- Processes multiple documents from single JSON file
- Maintains page order with clear delimiters
- UTF-8 encoding support
- Recursive directory creation for output paths