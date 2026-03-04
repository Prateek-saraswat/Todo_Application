import Header from "./components/Header.jsx"
import TodoList from './components/TodoList.jsx'
import AddTodo from "./components/AddTodo.jsx"
import { useState } from "react"

function App() {

  const [allTodos, setAllTodos] = useState([])


  //function for adding todo-item

  const handleAddTodo = (newTodo) => {
    setAllTodos((prev) => [...prev, {
      id: crypto.randomUUID(),
      text: newTodo,
      isCompleted: false
    }])
  }

  //function for deleting the todo item
  const handleDeleteTodo = (id) => {
    setAllTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  //function for marking complete and incomplete
  const handleToggleComplete = (id) => {
    setAllTodos((prev) => prev.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ))
  }

  //function for editing the todo
  const handleEditTodo = (id, newText) => {
    setAllTodos((prev) => prev.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  return (
    <div className="min-h-screen bg-gray-900">

      <div className="sticky top-0 z-10">
        <Header />
      </div>

      <main className="w-full max-w-3xl mx-auto">
        <AddTodo onAddTodo={handleAddTodo} />
        <TodoList
          allTodos={allTodos}
          onDelete={handleDeleteTodo}
          onToggleComplete={handleToggleComplete}
          onEdit={handleEditTodo}
        />
      </main>


    </div>
  )
}

export default App