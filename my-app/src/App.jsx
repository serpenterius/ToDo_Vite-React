import { useState } from 'react'

import Form from './Form'
import Filters from './Filters'

import './App.css'
import Tasks from './Tasks'

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  let handleAddTask = (value) => {
    let task = {
      text: value,
      id: Date.now(),
      completed: false
    }
    setTasks([...tasks, task]);
  }

  let handleChangeFilter = (filter) => {
    setFilter(filter)
  }

  return (
    <div className='min-h-screen bg-violet-400 justify-items-center'>
        <Form addTask={handleAddTask} />
        <Filters filter={filter} changeFilter={handleChangeFilter}/>
        <Tasks tasks={tasks} filter={filter}/>
    </div>
  )
}

export default App
