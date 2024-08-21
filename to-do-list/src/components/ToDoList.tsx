import React, { useState } from 'react';

interface ToDoListProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // Tipo atualizado para dispatch
}

export interface Task {
    id: string; // Atualizado para string se necessário
    text: string;
    bgColor: string;
}

export function ToDoList({ tasks, setTasks }: ToDoListProps) {
    const [newTask, setNewTask] = useState<string>('');

    const addTask = () => {
        const trimmedTask = newTask.trim();
        if (trimmedTask) {
            const task: Task = {
                id: Date.now().toString(), // Convertendo o ID para string
                text: trimmedTask,
                bgColor: `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`
            };
            setTasks(prevTasks => [...prevTasks, task]);
            setNewTask('');
        } else {
            alert('Digite uma tarefa!');
        }
    };

    const removeTask = (id: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    return (
        <div className='to-do-list'>
            <h1>Lista de Tarefas</h1>
            <div className='add-task-input'>
                <input
                    type='text'
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder='Digite uma tarefa'
                />
                <button onClick={addTask} aria-label='Adicionar tarefa'>+</button>
            </div>
            <ul className='task-list'>
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className='task'
                        style={{ backgroundColor: task.bgColor }}
                    >
                        {task.text}
                        <button onClick={() => removeTask(task.id)} aria-label={`Excluir tarefa ${task.text}`}>excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
