import './App.css';
import EditorWindow from "./components/EditorWindow";
import { Box } from "@chakra-ui/react";


function App() {
  return (
    <Box minH="100vh" bg="#daf5ed" color="gray.500" px={6} py={8}>
      <EditorWindow />
    </Box>
  );
}

export default App;
