import React, { useState } from "react";
import { AddTask } from "./component/AddTask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
// import './App.css';
// import MainComponent from './component/home' 


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn Data Types", time: "Today", reminder:true },
    { id: 2, text: "Learn Variables", time: "Tomorrow", reminder:true},
    { id: 3, text: "Learn Functions and Loops", time: "Next Tomorrow", reminder:false },
  ]);

  //addtask
  const addTask = (task) => {
    const id = Math.floor( Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => tasks.id === id ? {...task, reminder: !tasks.reminder} : task))
  }

  return (
    <div className="container">
    <Header />

    <AddTask onAdd={addTask}/>
    {/* <TaskTracker /> */}
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : (
      'No Tasks Available'
    )}
    </div>
  );
}

export default App;
