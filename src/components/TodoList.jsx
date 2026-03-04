import TodoItem from "./TodoItem"

export default function TodoList({ allTodos, onDelete, onToggleComplete, onEdit }) {

    if (allTodos.length === 0) {
        return (
            <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center gap-3">
               
                <p className="text-gray-400 text-sm font-medium">No Todo yet</p>
                <p className="text-gray-600 text-xs">Add a todo above to get started</p>
            </div>
        )
    }

   

    return (
        <div className="w-full max-w-3xl mx-auto px-6 pb-8">

          

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