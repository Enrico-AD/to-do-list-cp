import { useState } from 'react';
import './App.css';
import { Task, ToDoList } from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <ToDoList tasks={tasks} setTasks={setTasks}></ToDoList>
    </>
  )
}

export default App
