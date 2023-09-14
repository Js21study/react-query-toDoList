import { ITodo } from '../@types/ITodo';
import { todos } from './data';

export const fetchTodos = async (query = ''): Promise<ITodo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(query.toLowerCase()),
  );
  return [...filteredTodos];
};

export const addTodo = async (todo: Pick<ITodo, 'todo'>): Promise<ITodo> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const newTodo = {
    id: todos.length + 1,
    todo: todo.todo,
    completed: false,
  };

  todos.push(newTodo);
  return newTodo;
};
