import { useState } from "react"

function TodoItem({ todo, onDelete, onToggleComplete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    function handleDelete() { onDelete(todo.id) }
    function handleToggleComplete() { onToggleComplete(todo.id) }
    function handleSaveEdit() {
        if (editText.trim() === "") return
        onEdit(todo.id, editText)
        setIsEditing(false)
    }
    function handleCancelEdit() {
        setEditText(todo.text)
        setIsEditing(false)
    }

    return (
        <div className={`flex items-center gap-4 px-5 py-4 rounded-lg border transition-all duration-200
            ${todo.isCompleted
                ? "bg-gray-800/40 border-gray-700/40"
                : "bg-gray-800 border-gray-700 hover:border-violet-500/50 hover:shadow-md hover:shadow-violet-900/20"
            }`}
        >
            {isEditing ? (
                <div className="flex items-center gap-2 flex-1">
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        autoFocus
                        className="flex-1 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg border border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all duration-200"
                    />
                    <button
                        onClick={handleSaveEdit}
                        className="text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 px-3 py-2 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleCancelEdit}
                        className="text-xs font-medium text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <span className={`flex-1 text-sm transition-all duration-200
                    ${todo.isCompleted ? "line-through text-gray-500" : "text-gray-100"}`}
                >
                    {todo.text}
                </span>
            )}

            {/* Action Buttons */}
            {!isEditing && (
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleToggleComplete}
                        className={`text-xs font-medium px-3 py-2 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer
                            ${todo.isCompleted
                                ? "text-violet-400 bg-violet-400/10 hover:bg-violet-400/20"
                                : "text-gray-400 bg-gray-700 hover:text-violet-400 hover:bg-violet-400/10"
                            }`}
                    >
                        {todo.isCompleted ? "Undo" : "Done"}
                    </button>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-xs font-medium text-gray-400 bg-gray-700 hover:text-violet-400 hover:bg-violet-400/10 px-3 py-2 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="text-xs font-medium text-gray-400 bg-gray-700 hover:text-red-400 hover:bg-red-400/10 px-3 py-2 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default TodoItem