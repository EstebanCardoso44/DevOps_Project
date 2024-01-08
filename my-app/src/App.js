// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import TodoList from './TodoList';
import Contact from './Contact';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task, importance, day) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: task, completed: false, importance, day }
    ]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const sortTasksByDay = (day) => {
    // Tri des tâches par jour
    const sortedTasks = tasks.filter((task) => task.day === day);
    return sortedTasks;
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<TodoList tasks={tasks} addTask={addTask} toggleTask={toggleTask} deleteTask={deleteTask} sortTasksByDay={sortTasksByDay} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;