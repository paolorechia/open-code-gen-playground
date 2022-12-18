import './App.css';
import React, { useRef, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { sendPromptQuery } from "./CodeGen.js"

const RequestState = {
  "ready": 1,
  "loading": 2
}
const RequestClass = {
  1: "ready",
  2: "loading"
}

function App() {
  const editorRef = useRef(null);
  const [editorValue, setEditorValue] = useState("");
  const [requestState, setRequestState] = useState(RequestState.ready);

  useEffect(() => {
    console.log('Editor State', editorValue);
  }, [editorValue])

  async function sendPromptAction() {
    setRequestState(RequestState.loading)
    const result = await sendPromptQuery(editorValue)
    appendResponseToEditor(result)
  }

  function appendResponseToEditor(text) {
    editorRef.current.setValue(editorValue + "\n" + text)
    handleEditorChange()
    setRequestState(RequestState.ready)
  }

  function handleEditorChange() {
    const text = editorRef.current.getValue()
    setEditorValue(text)
  }

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor; 
    editor.onDidChangeModelContent = handleEditorChange
    handleEditorChange()
  }


  return (
    <div className="App">
      <header className="App-header">
        Open Code Gen Playground
      </header>

      <div className="control-center-wrapper">
        <div className="control-center-inner-wrapper">
          <div className="control-center">
            <button onClick={sendPromptAction}>
              Send Prompt
            </button>
          </div>
        </div>
      </div>
      <div className={`loading-wrapper-${RequestClass[requestState]}`}>
        Loading
      </div>
      <div className={`editor-wrapper editor-wrapper-${RequestClass[requestState]}`}>
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
