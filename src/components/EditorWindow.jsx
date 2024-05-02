import React, { useRef, useState } from "react";
import { Box,HStack } from "@chakra-ui/react";
import Editor, {loader} from "@monaco-editor/react";
import LangSwitch from "./LangSwitch";
import Output from "./Output";
import { CODE_TEMPLATES } from "../constants/template";

loader.config({
  paths: {
    vs: 'https://www.unpkg.com/monaco-editor/min/vs',
  },
});


const INITIAL_VALUE = "// some comment";
const DEFAULT_LANGUAGE = "javascript";

function EditorWindow() {
  const editorRef = useRef(null);
const [code, setCode] = useState(CODE_TEMPLATES.javascript);

    const [language, setLanguage] = useState("javascript");

  const handleMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (newValue) => {
    setCode(newValue);
  };


  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setCode(CODE_TEMPLATES[newLanguage]);
  };
  return (
    <Box>
        <HStack spacing={4}>
            <Box w="50%">
                <LangSwitch language={language} onSelect={handleLanguageChange} />
                <Editor
                height="90vh"
                defaultLanguage={DEFAULT_LANGUAGE}
                defaultValue={INITIAL_VALUE}
                onMount={handleMount}
                language={language}
                value={code}
                onChange={handleChange}
                />      
            </Box>
      <Output editorRef={editorRef} language={language} />
    </HStack>
    </Box>
  );
}
export default EditorWindow;