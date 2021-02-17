class TodoService {
  constructor(client) {
    this.client = client;
  }

  async getIncompleteTodoList() {
    const response = await this.client.get('notdone');

    return response.data;
  }

  async getCompletedTodoList() {
    const response = await this.client.get('done');

    return response.data;
  }

  async completeTodo(id) {
    const response = await this.client.put(`${id}`, { isComplete: true });

    return response.data;
  }

  async deleteTodo(id) {
    const response = await this.client.delete(`${id}`);

    return response.data;
  }

  async addTodo(title, body) {
    await this.client.post('', { title, body });
  }
}

export default TodoService;
