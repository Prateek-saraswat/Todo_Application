import TodoItem from "./TodoItem"

export default function TodoList({ allTodos, onDelete, onToggleComplete, onEdit }) {

    if (allTodos.length === 0) {
        return (
            <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <p className="text-gray-400 text-sm font-medium">No tasks yet</p>
                <p className="text-gray-600 text-xs">Add a task above to get started</p>
            </div>
        )
    }

    const pending = allTodos.filter(t => !t.isCompleted).length
    const completed = allTodos.filter(t => t.isCompleted).length

    return (
        <div className="w-full max-w-3xl mx-auto px-6 pb-8">

            {/* Stats Row */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-gray-500 font-medium">
                    {pending} remaining · {completed} completed
                </p>
                <span className="text-xs text-gray-600">{allTodos.length} total</span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-700/50 mb-4" />

            {/* Todo Items */}
            <div className="flex flex-col gap-2">
                {allTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onToggleComplete={onToggleComplete}
                        onEdit={onEdit}
                    />
                ))}
            </div>

        </div>
    )
}