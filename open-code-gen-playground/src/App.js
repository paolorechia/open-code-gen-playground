import './App.css';
import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const editorRef = useRef(null);


  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor; 
  }

  return (
    <div className="App">
      <header className="App-header">
        Open Code Gen Playground
      </header>

      <div className="control-center-wrapper">
        <div className="control-center-inner-wrapper">
          <div className="control-center">
            <button>
              Send Prompt
            </button>
          </div>
        </div>
      </div>
      <div className="editor-wrapper">
        <div className="editor-inner-wrapper">
          <Editor
            height="400px"
            defaultLanguage="python"
            defaultValue="# some comment"
            onMount={handleEditorDidMount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
