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
        <div className={`group flex items-center gap-4 px-5 py-4 rounded-lg border transition-all duration-200
            ${todo.isCompleted
                ? "bg-gray-800/40 border-gray-700/40"
                : "bg-gray-800 border-gray-700 hover:border-violet-500/50 hover:shadow-md hover:shadow-violet-900/20"
            }`}
        >
            {/* Checkbox */}
            <button
                onClick={handleToggleComplete}
                className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 cursor-pointer
                    ${todo.isCompleted
                        ? "bg-violet-600 border-violet-600"
                        : "border-gray-500 hover:border-violet-400"
                    }`}
            >
                {todo.isCompleted && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </button>

            {/* Text / Edit Input */}
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
                    ${todo.isCompleted
                        ? "line-through text-gray-500"
                        : "text-gray-100"
                    }`}
                >
                    {todo.text}
                </span>
            )}

            {/* Action Buttons - visible on hover */}
            {!isEditing && (
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="p-2 text-gray-400 hover:text-violet-400 hover:bg-violet-400/10 rounded-lg transition-all duration-200 cursor-pointer"
                        title="Edit"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.828A2 2 0 0110 14H8v-2a2 2 0 01.586-1.414z" />
                        </svg>
                    </button>
                    <button
                        onClick={handleDelete}
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200 cursor-pointer"
                        title="Delete"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a1 1 0 00-1-1h-4a1 1 0 00-1 1m-2 0h10" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}

export default TodoItem