import { useState, useEffect, use } from 'react'

import Form from './Form'
import Filters from './Filters'

import './App.css'
import Tasks from './Tasks'

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(savedTasks);
  }, [])

  useEffect(() => {
    // if(tasks.length > 0) {
    //   localStorage.setItem('tasks', JSON.stringify(tasks));
    // }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  let handleAddTask = (value) => {
    if(value === '') {
      return
    } else {
      let task = {
        text: value,
        id: Date.now(),
        completed: false
      }
      setTasks([...tasks, task]);
    }

  }

  let handleChangeFilter = (filter) => {
    setFilter(filter)
  }

  let handleCompleteTask = (task) => {
    const updatedTasks = tasks.map(item => item.id === task.id ? {...item, completed: !item.completed} : item);
    setTasks(updatedTasks);
  }

  let handleDeleteTask = (task) => {
    let updatedTasks = tasks.filter(item => item.id !== task.id);
    setTasks(updatedTasks);
  }

  return (
    <div className='min-h-screen bg-violet-200 justify-items-center'>
        <Form addTask={handleAddTask} />
        <Filters filter={filter} changeFilter={handleChangeFilter}/>
        <Tasks tasks={tasks}
                filter={filter}
                completeTask={handleCompleteTask}
                deleteTask={handleDeleteTask}/>
    </div>
  )
}

export default App
