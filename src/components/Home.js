import {
  Container,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Heading,
} from '@chakra-ui/react';

import TodoList from './todo/TodoList';
import AddTodo from './todo/AddTodo';

export default function Home() {
  return (
    <Container maxW="6xl" pt="20">
      <Heading color="blue.600" mb="5">To Do App</Heading>
      <Tabs align="center">
        <TabList>
          <Tab>To do</Tab>
          <Tab>Done</Tab>
          <Tab>Add</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TodoList filter="to do" />
          </TabPanel>
          <TabPanel>
            <TodoList filter="done" />
          </TabPanel>
          <TabPanel>
            <AddTodo />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
