import TodoService from '../services/TodoService';
import axios from 'axios';

const todoService = new TodoService(
  axios.create({ baseURL: 'https://thinks-itself-belts-lucky.trycloudflare.com/' })
);

export { todoService };
