class TodoService {
  constructor() {
    this.data = [
      { id: '1', title: 'hello', body: 'hello not done fucker', isComplete: false },
      { id: '2', title: 'hello', body: 'hello fucker', isComplete: false },
    ];
  }

  getIncompleteTodoList() {
    return this.data;
  }

  getCompletedTodoList() {
    return [
      {
        id: '1',
        title: 'hello',
        body: 'hello not done fucker',
        isComplete: true,
      },
      { id: '2', title: 'hello', body: 'hello fucker', isComplete: true },
    ];
  }

  completeTodo(id) {
    this.data[id].isComplete = true;

    return this.data[id];
  }

  deleteTodo(id) {
    this.data = this.data.filter((todo) => todo !== id);
  }

  addTodo(text, body) {}
}

export default TodoService;
