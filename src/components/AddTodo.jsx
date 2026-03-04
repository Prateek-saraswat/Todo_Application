import { useState } from "react"

function AddTodo({ onAddTodo }) {

  const [newTodo, setNewTodo] = useState("")

  function handleAddTodo(e) {
    e.preventDefault()
    if (newTodo.trim() === "") return
    onAddTodo(newTodo)
    setNewTodo("")
  }

  function handleTodoInput(e) {
    setNewTodo(e.target.value)
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <form onSubmit={handleAddTodo}>
          <input 
            onChange={handleTodoInput} 
            value={newTodo}  
            placeholder="Enter a new task..." 
            style={{ padding: '10px', width: '300px', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '10px 20px' }}>Add Task</button>
        </form>
    </div>
  )
}

export default AddTodo
