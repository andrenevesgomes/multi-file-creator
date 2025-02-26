import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.createMultipleFiles', async () => {
    // Prompt user for file names
    const input = await vscode.window.showInputBox({
      prompt: 'Enter file names separated by commas (e.g., index.html, script.js, styles.css)',
      placeHolder: 'index.html, app.js, styles.css, notes.txt',
      ignoreFocusOut: true
    });

    if (!input || input.trim() === '') {
      vscode.window.showWarningMessage('No file names provided. Operation cancelled.');
      return;
    }

    // Process file names
    const fileNames = input.split(',')
      .map(name => name.trim())
      .filter(name => name.length > 0);

    if (fileNames.length === 0) {
      vscode.window.showWarningMessage('Invalid input. Please enter valid file names separated by commas.');
      return;
    }

    // Get the current workspace folder
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri;
    if (!workspaceFolder) {
      vscode.window.showErrorMessage('No workspace folder is open. Please open a folder and try again.');
      return;
    }

    let createdFiles: string[] = [];
    let failedFiles: string[] = [];

    for (const fileName of fileNames) {
      const fileUri = vscode.Uri.joinPath(workspaceFolder, fileName);
      try {
        // Check if file already exists
        const exists = await vscode.workspace.fs.stat(fileUri).then(() => true, () => false);
        if (exists) {
          vscode.window.showWarningMessage(`File "${fileName}" already exists. Skipping.`);
          failedFiles.push(fileName);
          continue;
        }

        // Create an empty file
        await vscode.workspace.fs.writeFile(fileUri, new Uint8Array());
        createdFiles.push(fileName);
      } catch (err) {
        vscode.window.showErrorMessage(`Error creating file "${fileName}": ${err}`);
        failedFiles.push(fileName);
      }
    }

    // Provide user feedback
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