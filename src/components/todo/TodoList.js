import { Accordion } from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { todoService } from '../../lib/dependencies';
import { useState, useEffect } from 'react';
import Spinner from '../loader/Spinner';
import { useRecoilState } from 'recoil';
import shouldUpdateTodoListAtom from '../../atoms/shouldUpdateTodoList';

export default function TodoList({ filter }) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldUpdateTodoList, setShouldUpdateTodoList] = useRecoilState(
    shouldUpdateTodoListAtom
  );

  async function getTodoList() {
    let todoList = [];

    if (filter === 'to do') {
      todoList = await todoService.getIncompleteTodoList();
      todoList = todoList.map((todo) => {
        return { ...todo, isComplete: false };
      });
    } else {
      todoList = await todoService.getCompletedTodoList();
      todoList = todoList.map((todo) => {
        return { ...todo, isComplete: true };
      });
    }
    setIsLoading(false);

    setTodoList(todoList);
    setShouldUpdateTodoList(false);
  }

  async function onComplete(id) {
    setIsLoading(true);
    await todoService.completeTodo(id);

    setShouldUpdateTodoList(true);
  }

  async function onDelete(id) {
    setIsLoading(true);
    await todoService.deleteTodo(id);

    setShouldUpdateTodoList(true);
  }

  useEffect(() => {
    if (shouldUpdateTodoList) {
      setIsLoading(true);
      getTodoList();
    }
  }, [shouldUpdateTodoList]);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && (
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
      )}
    </div>
  );
}
