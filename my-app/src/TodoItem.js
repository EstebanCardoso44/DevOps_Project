// TodoItem.js

import React from 'react';

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </li>
  );
};

export default TodoItem;
