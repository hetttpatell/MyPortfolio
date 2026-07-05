import React from 'react';
import Editor from '@monaco-editor/react';
import {
  cssCode, htmlCode, jsCode, jsonCode, jsxCode,
} from './constants';

const renderCode = (language) => {
  switch (language) {
    case 'html':
      return htmlCode;
    case 'css':
      return cssCode;
    case 'javascript':
      return jsCode;
    case 'json':
      return jsonCode;
    case 'jsx':
      return jsxCode;
    default:
      return htmlCode;
  }
};

const CodeEditor = ({ language }) => {
  const value = renderCode(language);
  const monacoLanguage = language === 'jsx' ? 'javascript' : language;

  const handleEditorDidMount = (editor, monaco) => {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      jsx: 2, // React JSX
    });
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: 2,
    });
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <Editor
        height="100%"
        language={monacoLanguage}
        value={value}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
          autoIndent: 'advanced',
        }}
      />
    </div>
  );
};

export default CodeEditor;
