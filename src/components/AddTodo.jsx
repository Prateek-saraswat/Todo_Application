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
    <div className="w-full max-w-3xl mx-auto px-6 py-6">
      <form onSubmit={handleAddTodo} className="flex items-center gap-3">

        {/* Input */}
        <input
          onChange={handleTodoInput}
          value={newTodo}
          placeholder="Enter a new task..."
          className="flex-1 bg-gray-800 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
        />

        {/* Button */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 active:scale-95 text-white text-sm font-medium px-5 py-3 rounded-lg transition-all duration-200 shadow-md shadow-violet-900/40 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Task
        </button>

      </form>
    </div>
  )
}

export default AddTodo