import { Input, Container, Button, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Text align="left" mb="3">
        Title
      </Text>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Text align="left" mt="5" mb="3">
        Body
      </Text>
      <Input value={body} onChange={(e) => setBody(e.target.value)} />
      <Box align="left" mt="5">
        <Button
          align="left"
          colorScheme="green"
          isLoading={isLoading}
          loadingText="Submitting"
          onClick={() => {
            setIsLoading(true);
          }}
        >
          Add
        </Button>
      </Box>
    </Container>
  );
}
