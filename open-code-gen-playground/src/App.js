import './App.css';
import React, { useRef, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const editorRef = useRef(null);
  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    console.log('Editor State', editorValue);
  }, [editorValue])

  function handleEditorChange() {
    const text = editorRef.current.getValue()
    console.log("Text ", text)
    setEditorValue(text)
  }

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor; 
    editor.onDidChangeModelContent = handleEditorChange
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
