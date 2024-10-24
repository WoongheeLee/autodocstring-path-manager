# AutoDocstring Path Manager

VSCode extension for automatic autoDocstring template path configuration

[English](README.md) | [한국어](README.ko.md)

## Introduction

This VSCode extension automatically configures template paths for [AutoDocstring](https://github.com/NilsJPWerner/autoDocstring) based on the operating system. It's particularly useful when you need different paths for Windows and Linux environments.

## Prerequisites

- VSCode 1.6.0 or higher
- [AutoDocstring](https://github.com/NilsJPWerner/autoDocstring) extension installed
- Node.js and npm installed

## Installation and Usage

1. Configure Path:
   - Modify the following section in `src/extension.ts` according to your environment
   ```typescript
   const baseDir = isWindows 
       ? 'D:\\git\\commons\\.autoDocstring'  // Windows path
       : '~/.autoDocstring'                  // Linux path
   ```

2. Build:
   ```bash
   # Install required tools
   npm install -g yo generator-code
   npm install -g @vscode/vsce
   
   # Install dependencies
   npm install
   
   # Build
   npm run compile
   
   # Package
   vsce package
   ```

3. Install in VSCode:
   Method 1) Using Extensions Menu
   - Launch VSCode
   - Open Extensions menu (Ctrl+Shift+X)
   - Click "..." (More Actions) and select "Install from VSIX..."
   - Select the generated .vsix file
   - Restart VSCode

   Method 2) Using Command Palette
   - Launch VSCode
   - Open Command Palette (Ctrl+Shift+P)
   - Type "Extensions: Install from VSIX"
   - Select the generated .vsix file
   - Restart VSCode

## Features

- Automatic operating system detection
- Automatic path configuration based on Windows/Linux environment
- Current template path display in status bar
- Manual path reset command available

## Verification

1. Check the configured path in status bar after VSCode restart
2. Use "Reset Docstring Template Path" command in Command Palette (Ctrl+Shift+P) for manual reset

## Important Note

This extension is a companion tool for [AutoDocstring](https://github.com/NilsJPWerner/autoDocstring). Make sure to install the AutoDocstring extension before using this tool.

## Version History

### 0.0.1
- Initial release
- OS-based automatic path configuration
- Status bar indicator
- Manual reset command
