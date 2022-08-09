import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';
import { useEffect } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async() => {
      const res = await fetch('http://192.168.122.169:5000/tasks')
      const data = await res.json()

      console.log(data)
    }
    fetchTasks()
  }, [])
  
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000)
    var newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const switchTaskReminder = (id) => {
    // console.log(`Switch for item ${id}`)
    // var item = (tasks.find((task) => task.id = id))
    // var index = tasks.indexOf(item)
    // console.log(item)
    // item.reminder = !item.reminder
    // tasks.splice(index, 1, item)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
  }

  return (
    // Java Script Syntax Extension Language
    <div>
      <h1>Hello World</h1>

      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAddTask = {showAddTask}> </Header>
      {showAddTask &&<AddTask className='container' onAdd={addTask}></AddTask>} 
       {/* ternary operator without an else */}

      <div className='container'>
        {tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} switchTaskReminder={switchTaskReminder}></Tasks> : 'No tasks available'
        }
      </div>
    </div>
    // <div className="App"> 
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
