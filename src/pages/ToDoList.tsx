import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addTodo, fetchTodos } from '../api';
import { ToDo } from '../components/ToDo';

export const ToDoList: React.FC = () => {
  const queryClient = useQueryClient();
  const [todo, setTodo] = useState('');
  const [search, setSearch] = useState('');

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ['todos', { search }],
    staleTime: Infinity,
    cacheTime: 0,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const onClickBtn = async () => {
    try {
      await addTodoMutation({ todo });
      setTodo('');
    } catch (error) {
      alert(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <div>
        <button onClick={onClickBtn}>Create</button>
      </div>
      <ol>
        {todos?.map((todo) => (
          <ToDo key={todo.id} todo={todo.todo} completed={todo.completed} />
        ))}
      </ol>
    </div>
  );
};
