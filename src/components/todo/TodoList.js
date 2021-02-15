import { Accordion } from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { todoService } from '../../lib/dependencies';
import { useState, useEffect } from 'react';

export default function TodoList({ filter }) {
  const [todoList, setTodoList] = useState([
    {
      id: '1',
      title: 'hello',
      body: 'hello not done fucker',
      isComplete: false,
    },
    { id: '2', title: 'hello', body: 'hello fucker', isComplete: true },
  ]);

  function getTodoList() {
    if (filter === 'to do') {
      setTodoList(todoService.getIncompleteTodoList());
    } else {
      setTodoList(todoService.getCompletedTodoList());
    }
  }

  function onComplete(id) {
    // todoService.completeTodo(id);

    // const updateTodo = todoList.find((todo) => todo.id === id);
    // updateTodo.status = true;
    // const newTodoList = todoList.filter((todo) => todo.id !== id);

    // newTodoList.push(updateTodo);
    getTodoList();
  }

  function onDelete(id) {
    // todoService.deleteTodo(id);

    // const newTodoList = todoList.filter((todo) => todo.id !== id);

    getTodoList();
  }

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <Accordion allowMultiple>
      {todoList.map((todo) => (
        <TodoItem
          {...todo}
          onComplete={onComplete}
          onDelete={onDelete}
          key={todo.id}
        />
      ))}
    </Accordion>
  );
}
