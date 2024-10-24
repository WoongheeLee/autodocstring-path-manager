import * as vscode from 'vscode';
import * as os from 'os';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const isWindows = os.platform() === 'win32';

    // 기본 설정 경로 지정
    const baseDir = isWindows
        ? 'D:\\git\\commons\\.autoDocstring'
        : '~/.autoDocstring';

    const templatePath = path.join(baseDir, 'my.mustache');

    // 설정 업데이트
    vscode.workspace.getConfiguration().update(
        'autoDocstring.customTemplatePath',
        templatePath,
        vscode.ConfigurationTarget.Global
    );

    // 상태바에 현재 설정된 경로 표시 (선택사항)
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left
    );
    statusBarItem.text = `Docstring Template: ${templatePath}`;
    statusBarItem.show();

    // 명령어 등록 - 수동으로 경로 재설정하고 싶을 때 사용
    let disposable = vscode.commands.registerCommand(
        'extension.resetDocstringPath',
        () => {
            vscode.workspace.getConfiguration().update(
                'autoDocstring.customTemplatePath',
                templatePath,
                vscode.ConfigurationTarget.Global
            );
            vscode.window.showInformationMessage(
                `Updated docstring template path to: ${templatePath}`
            );
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
