import Header from "./components/Header.jsx"
import TodoList from './components/TodoList.jsx'
import AddTodo from "./components/AddTodo.jsx"
import { useState } from "react"

function App() {

  const [allTodos , setAllTodos] = useState([])
 
  // Add new todo function
  const handleAddTodo = (newTodo) => {
    setAllTodos((prev)=> [...prev, { 
      id: crypto.randomUUID(), 
      text: newTodo, 
      isCompleted: false 
    }])
  }

  // Delete todo function
  const handleDeleteTodo = (id) => {
    setAllTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // Toggle complete status 
  const handleToggleComplete = (id) => {
    setAllTodos((prev) => prev.map((todo) => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ))
  }

  // Edit todo
  const handleEditTodo = (id, newText) => {
    setAllTodos((prev) => prev.map((todo) => 
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  return (
    <>
    <Header />
    <AddTodo onAddTodo={handleAddTodo}/>
    <TodoList 
      allTodos={allTodos} 
      onDelete={handleDeleteTodo}
      onToggleComplete={handleToggleComplete}
      onEdit={handleEditTodo}
    />
    </>
  )
}

export default App
