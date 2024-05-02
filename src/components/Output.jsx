import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { executeCode } from "../services/executeCode";
const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const runCode = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const sourceCode = editorRef.current.getValue();
      if (!sourceCode) return;
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Box style={{ display:"flex", alignItems:"center", gap:"5px"  }}>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <img src="/monaco.jpeg" alt="monaco" width={100} height={100}/>
      คิดดีๆ ก่อนกดปุ่ม Run Code นะครับ ไม่งั้นจะเสียเวลาเปล่าๆ
      </Box>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
        color="#333"
      >
        {error && <Text color="red.500">{error.message}</Text>}
        <Text whiteSpace="pre-wrap">{output}</Text>
      </Box>
    </Box>
  );
};
export default Output;