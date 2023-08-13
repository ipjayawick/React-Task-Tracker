import { useState } from 'react'
import Header from './components/Header'
import { Container, Box } from '@mui/material';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask,setShowAddTask] = useState(false)

  const addTask=(task)=>{
    setTasks([...tasks,{id:crypto.randomUUID(),...task}])
  }
  const deleteTask=(id)=>{
    setTasks(
      tasks.filter((task)=>task.id!==id)
    )
  }
  
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>
      task.id===id ? {...task,reminder:!task.reminder} : task
    ))
  }
  
  return (
    <Container maxWidth="sm">
      <Box border="1px solid #000"
        borderRadius="5px"
        width="50vw"
        padding="20px">
        <Header setOnAdd={()=>{setShowAddTask(!showAddTask)}} showAdd={showAddTask}/>
        {showAddTask && <AddTask onSubmit={addTask}/>}
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      </Box>
    </Container>
  )
}

export default App
