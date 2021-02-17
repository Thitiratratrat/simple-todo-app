import { Input, Container, Button, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { todoService } from '../../lib/dependencies';
import { useRecoilState } from 'recoil';
import shouldUpdateTodoListAtom from '../../atoms/shouldUpdateTodoList';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shouldUpdateTodoList, setShouldUpdateTodoList] = useRecoilState(
    shouldUpdateTodoListAtom
  );

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
          onClick={async () => {
            setIsLoading(true);

            await todoService.addTodo(title, body);

            setShouldUpdateTodoList(true);
            setIsLoading(false);
            setTitle('');
            setBody('');
          }}
        >
          Add
        </Button>
      </Box>
    </Container>
  );
}
