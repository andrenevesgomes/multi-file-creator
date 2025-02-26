# Multi-File Creator Extension

[![Visual Studio Marketplace Version](https://img.shields.io/vscode-marketplace/v/yourpublisher.multi-file-creator.svg?style=flat)](https://marketplace.visualstudio.com/items?itemName=yourpublisher.multi-file-creator)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

The **Multi-File Creator Extension** is a handy tool for Visual Studio Code that enables you to quickly create multiple files at once by entering a comma-separated list of filenames. This extension is perfect for developers who frequently need to set up multiple files (e.g., configuration files, boilerplate code, etc.) in a new project, streamlining your workflow and reducing repetitive tasks.

## Features

- **Quick File Creation:**
  Create multiple files simultaneously by simply entering their names separated by commas (e.g., `main.bicep, secret.bicep`).

- **Customizable Hotkey:**
  Launch the file creation command using the default hotkey `Ctrl+Alt+N` (or customize it as needed).

- **Seamless Integration:**
  Use the command palette or your hotkey to instantly generate files in your active workspace.

- **Minimal Setup:**
  No complex configuration required—just install and use.

## Installation

### From the Visual Studio Code Marketplace

1. Open the **Extensions** view in VS Code (`Ctrl+Shift+X`).
2. Search for **Multi-File Creator Extension**.
3. Click **Install**.

### Manual Installation (Using a .vsix Package)

1. Package the extension using:
   ```bash
   vsce package
   ```
2. In VS Code, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) and select **Extensions: Install from VSIX...**.
3. Browse to your generated `.vsix` file and install it.

## Usage

1. **Open the Command Palette:**
   Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS).

2. **Execute the Command:**
   Type **Create Multiple Files** and select it.

3. **Enter Filenames:**
   When prompted, input the filenames separated by commas. For example:
   ```
   main.bicep, secret.bicep, utils.ts
   ```

4. **File Creation:**
   The extension creates each file in your current workspace folder. Existing files will remain unchanged.

## Customization

### Changing the Keybinding

The default hotkey is `Ctrl+Alt+N`. To change it:

1. Go to **File > Preferences > Keyboard Shortcuts**.
2. Search for `extension.createMultipleFiles`.
3. Modify the keybinding according to your preference.

## Troubleshooting

- **No Workspace Open:**
  Ensure that a folder is open in VS Code before running the command.

- **File Creation Errors:**
  Verify that you have the necessary permissions to write files in the current workspace.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a branch for your feature or bug fix.
3. Commit your changes with clear, descriptive messages.
4. Open a pull request outlining your changes.

For bug reports or feature requests, please open an issue in the repository.

## License

This extension is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Visual Studio Code:** Thanks to the VS Code team for creating a robust, extensible platform.
- **Community:** Your feedback and contributions help make this extension better for everyone.

---

Enjoy a more efficient workflow with the Multi-File Creator Extension!