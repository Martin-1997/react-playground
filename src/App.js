import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([])
 //var i = 0

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      //if(i > 0){
      //console.log(tasksFromServer)
      //}
      //i++
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:2045/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:2045/tasks/${id}`)
    const data = await res.json()
    return data
  }
  
  const addTask = async(task) => {
    //const id = Math.floor(Math.random() * 1000000)
    //var newTask = {id, ...task}
    //setTasks([...tasks, newTask])
    //console.log(task)
    const res = await fetch('http://localhost:2045/tasks', {
      method : "POST",
      headers : {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  const deleteTask = async(id) => {
    await fetch(`http://localhost:2045/tasks/${id}`, {
      method : "DELETE"
    })
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const switchTaskReminder = async(id) => {
    // console.log(`Switch for item ${id}`)
    // var item = (tasks.find((task) => task.id = id))
    // var index = tasks.indexOf(item)
    // console.log(item)
    // item.reminder = !item.reminder
    // tasks.splice(index, 1, item)
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder : !taskToToggle.reminder}
    console.log(updatedTask)
    
    const res = await fetch(`http://localhost:2045/tasks/${id}`, {
      method : "PUT",
      header : {
        'Content-type' : "application/json"
      },
      body : JSON.stringify(updatedTask)
    })
    const data = await res.json()
    console.log("data:")
    console.log(data)

    setTasks(tasks.map((task) => task.id === id ? data : task))
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
