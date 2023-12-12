// App.js
import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // État local pour gérer la liste des tâches
  const [tasks, setTasks] = useState([]);

  // Fonction pour ajouter une nouvelle tâche à la liste
  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false }]);
  };

  // Fonction pour marquer une tâche comme terminée
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Ma Liste de Tâches</h1>
      {/* Passer les fonctions et la liste des tâches au composant TodoList */}
      <TodoList tasks={tasks} addTask={addTask} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
