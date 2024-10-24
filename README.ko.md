# AutoDocstring Path Manager

운영체제별 [autoDocstring](https://github.com/NilsJPWerner/autoDocstring) 템플릿 경로 자동 설정 VSCode 확장 프로그램

[English](README.md) | [한국어](README.ko.md)

## 소개

이 확장 프로그램은 [AutoDocstring](https://github.com/NilsJPWerner/autoDocstring) 확장의 사용자 정의 템플릿 경로를 운영체제에 따라 자동으로 설정해주는 도구입니다. Windows와 Linux 환경에서 서로 다른 경로를 사용해야 할 때 유용합니다.

## 선행 요구사항

- VSCode 1.6.0 이상
- [AutoDocstring](https://github.com/NilsJPWerner/autoDocstring) 확장 프로그램 설치 필요
- Node.js 및 npm 설치

## 설치 및 사용 방법

1. 경로 설정하기:
   - `src/extension.ts` 파일에서 다음 부분을 사용자 환경에 맞게 수정
   ```typescript
   const baseDir = isWindows 
       ? 'D:\\git\\commons\\.autoDocstring'  // Windows 경로
       : '~/.autoDocstring'                  // Linux 경로
   ```

2. 빌드하기:
   ```bash
   # 필요한 도구 설치
   npm install -g yo generator-code
   npm install -g @vscode/vsce
   
   # 의존성 설치
   npm install
   
   # 빌드
   npm run compile
   
   # 패키징
   vsce package
   ```

3. VSCode에 설치하기:
   방법 1) 확장 메뉴 사용
   - VSCode 실행
   - 확장 프로그램 메뉴 열기 (Ctrl+Shift+X)
   - 상단 더보기(...) 메뉴에서 "Install from VSIX..." 선택
   - 생성된 .vsix 파일 선택
   - VSCode 재시작

   방법 2) 명령 팔레트 사용
   - VSCode 실행
   - 명령 팔레트 열기 (Ctrl+Shift+P)
   - "Extensions: Install from VSIX" 입력
   - 생성된 .vsix 파일 선택
   - VSCode 재시작

## 기능

- 운영체제 자동 감지
- Windows와 Linux 환경에 따른 자동 경로 설정
- 상태바에서 현재 설정된 템플릿 경로 확인 가능
- 명령어를 통한 수동 경로 재설정 기능

## 동작 확인

1. VSCode 재시작 후 상태바에서 설정된 경로 확인
2. 명령 팔레트(Ctrl+Shift+P)에서 "Reset Docstring Template Path" 명령으로 수동 재설정 가능

## 주의 사항

이 확장은 [AutoDocstring](https://github.com/NilsJPWerner/autoDocstring) 확장의 보조 도구입니다. 사용하기 전에 반드시 AutoDocstring 확장이 설치되어 있어야 합니다.

## 버전 정보

### 0.0.1
- 최초 릴리즈
- 운영체제 기반 자동 경로 설정
- 상태바 표시기
- 수동 재설정 명령어
