import { useState } from 'react'

import Form from './Form'
import Filters from './Filters'

import './App.css'
import Tasks from './Tasks'

function App() {

  return (
    <div className='min-h-screen bg-violet-400 justify-items-center'>
        <Form />
        <Filters />
        <Tasks />
    </div>
  )
}

export default App
