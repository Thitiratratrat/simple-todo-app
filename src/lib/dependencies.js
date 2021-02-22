import TodoService from '../services/TodoService';
import axios from 'axios';

const todoService = new TodoService(
  axios.create({
    baseURL: 'https://db8199f53115.ngrok.io/',
  })
);

export { todoService };
