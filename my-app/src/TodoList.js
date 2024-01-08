// TodoList.js

import React, { useState } from 'react';

const TodoList = ({ tasks, addTask, toggleTask, deleteTask, sortTasksByDay }) => {
  const [newTask, setNewTask] = useState('');
  const [taskImportance, setTaskImportance] = useState('');
  const [taskDay, setTaskDay] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '' && taskDay !== '') {
      addTask(newTask, taskImportance, taskDay);
      setNewTask('');
      setTaskImportance('');
      setTaskDay('');
    }
  };

  return (
    <div>
      <h1>Ma Liste de Tâches</h1>
      <form>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <select value={taskDay} onChange={(e) => setTaskDay(e.target.value)}>
          <option value="" disabled>Sélectionner un jour</option>
          {['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'].map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <button type="button" onClick={handleAddTask}>Ajouter une tâche</button>
      </form>

      {/* Liste des tâches triées par jour */}
      {['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'].map((day) => (
        <div key={day}>
          <h3>{day}</h3>
          <ul>
            {sortTasksByDay(day).map((task) => (
              <li key={task.id}>
                {/* ... */}
                <span>{task.text}</span>
                <span>Importance: {task.importance}</span>
                <span>Jour: {task.day}</span>
                {/* ... */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
