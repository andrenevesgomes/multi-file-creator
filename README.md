# Multi-File Creator Extension

[![Visual Studio Marketplace Version](https://img.shields.io/vscode-marketplace/v/TheAndreGomes.multi-file-creator.svg?style=flat)](https://marketplace.visualstudio.com/items?itemName=TheAndreGomes.multi-file-creator)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

The **Multi-File Creator Extension** is a handy tool for Visual Studio Code that enables you to quickly create multiple files at once by entering a comma-separated list of filenames. This extension is perfect for developers who frequently need to set up multiple files (e.g., configuration files, boilerplate code, etc.) in a new project, streamlining your workflow and reducing repetitive tasks.

## Features

- **Quick File Creation:**
  Create multiple files simultaneously by simply entering their names separated by commas (e.g., `main.bicep, secret.bicep`).

- **Context-Aware Targeting:**
  By default, files are created in your workspace root. However, if you right-click on a folder in the Explorer, the extension will remember that folder as the target. You can then use the hotkey or Command Palette to create files in the previously selected folder—even if you don't explicitly pass a folder again.

- **Customizable Hotkey:**
  Launch the file creation command using the default hotkey `Ctrl+Alt+N` (or customize it as needed).

- **Seamless Integration:**
  Use the command palette, hotkey, or right-click context menu to generate files exactly where you need them.

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

1. **Selecting a Target Folder (Optional):**
   - **Right-Click in Explorer:**
     To create files in a specific folder, right-click on that folder in the Explorer and select **Create Multiple Files**. This sets that folder as the target.
   - **Using Hotkey or Command Palette:**
     If you have previously selected a folder using the context menu, pressing the hotkey (`Ctrl+Alt+N`) or invoking the command via the Command Palette will create files in that stored folder. If no folder was selected, the extension will use the active file's directory or default to the workspace root.

2. **Execute the Command:**
   - Press `Ctrl+Alt+N` or open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and type **Create Multiple Files**.

3. **Enter Filenames:**
   When prompted, input the filenames separated by commas. For example:
   ```
   main.bicep, secret.bicep, utils.ts
   ```

4. **File Creation:**
   The extension creates each file in the determined target folder. If a file already exists, it is skipped.

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
  Verify that you have the necessary permissions to write files in the selected target folder.

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
