import React, { useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToDoList } from './pages/ToDoList';

const queryClient = new QueryClient();

function App() {
  const [showList, setShowList] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowList(!showList)}>Toggle List</button>
      {showList && <ToDoList />}
    </QueryClientProvider>
  );
}

export default App;
