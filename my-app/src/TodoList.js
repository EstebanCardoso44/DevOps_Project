// TodoList.js

import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, addTask, toggleTask, deleteTask }) => {
  // État local pour gérer la nouvelle tâche à ajouter
  const [newTask, setNewTask] = useState('');

  // Fonction pour gérer la soumission du formulaire d'ajout de tâche
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="todo-list">
      {/* Formulaire pour ajouter une nouvelle tâche */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {/* Liste des tâches */}
      <ul>
        {tasks.map((task) => (
          // Passer les fonctions de gestion et les détails de la tâche au composant TodoItem
          <TodoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
