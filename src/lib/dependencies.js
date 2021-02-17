import TodoService from '../services/TodoService';
import axios from 'axios';

const todoService = new TodoService(
  axios.create({ baseURL: 'http://34.87.78.160:5000/' })
);

export { todoService };
