import * as vscode from 'vscode';
import * as path from 'path';

// Global variable to store the last selected folder
let lastSelectedFolder: vscode.Uri | undefined;

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.createMultipleFiles', async (uri?: vscode.Uri) => {
    // If a URI is passed (from the Explorer context), check if it's a folder and store it.
    if (uri) {
      try {
        const stat = await vscode.workspace.fs.stat(uri);
        if (stat.type === vscode.FileType.Directory) {
          lastSelectedFolder = uri;
        }
      } catch (error) {
        console.error('Error reading resource stats:', error);
      }
    }

    // Determine the target folder.
    // Priority 1: the folder passed in via the context menu (or stored from a previous context menu call)
    let targetFolder: vscode.Uri | undefined = lastSelectedFolder;

    // Priority 2: if there's an active text editor, use its file's directory.
    if (!targetFolder && vscode.window.activeTextEditor) {
      targetFolder = vscode.Uri.file(path.dirname(vscode.window.activeTextEditor.document.uri.fsPath));
    }

    // Priority 3: fallback to the first workspace folder.
    if (!targetFolder) {
      targetFolder = vscode.workspace.workspaceFolders?.[0]?.uri;
    }

    if (!targetFolder) {
      vscode.window.showErrorMessage('No folder selected or workspace open. Please open a folder and try again.');
      return;
    }

    // Prompt user for file names.
    const input = await vscode.window.showInputBox({
      prompt: 'Enter file names separated by commas (e.g., index.html, script.js, styles.css)',
      placeHolder: 'index.html, app.js, styles.css, notes.txt',
      ignoreFocusOut: true
    });

    if (!input || input.trim() === '') {
      vscode.window.showWarningMessage('No file names provided. Operation cancelled.');
      return;
    }

    // Process file names.
    const fileNames = input.split(',')
      .map(name => name.trim())
      .filter(name => name.length > 0);

    if (fileNames.length === 0) {
      vscode.window.showWarningMessage('Invalid input. Please enter valid file names separated by commas.');
      return;
    }

    let createdFiles: string[] = [];
    let failedFiles: string[] = [];

    for (const fileName of fileNames) {
      const fileUri = vscode.Uri.joinPath(targetFolder, fileName);
      try {
        // Check if file already exists.
        const exists = await vscode.workspace.fs.stat(fileUri).then(() => true, () => false);
        if (exists) {
          vscode.window.showWarningMessage(`File "${fileName}" already exists. Skipping.`);
          failedFiles.push(fileName);
          continue;
        }

        // Create an empty file.
        await vscode.workspace.fs.writeFile(fileUri, new Uint8Array());
        createdFiles.push(fileName);
      } catch (err) {
        vscode.window.showErrorMessage(`Error creating file "${fileName}": ${err}`);
        failedFiles.push(fileName);
      }
    }

    // Provide user feedback.
    if (createdFiles.length > 0) {
      vscode.window.showInformationMessage(`✅ Created files: ${createdFiles.join(', ')}`);
    }
    if (failedFiles.length > 0) {
      vscode.window.showErrorMessage(`⚠️ Failed to create: ${failedFiles.join(', ')}`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
