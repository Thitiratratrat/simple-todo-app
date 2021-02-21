import TodoService from '../services/TodoService';
import axios from 'axios';

const todoService = new TodoService(
  axios.create({
    baseURL: 'https://reaches-attachment-careful-repeated.trycloudflare.com/',
  })
);

export { todoService };
