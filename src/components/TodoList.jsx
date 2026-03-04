import TodoItem from "./TodoItem"

export default function TodoList({ allTodos, onDelete, onToggleComplete, onEdit }){

    if (allTodos.length === 0) {
        return (
            <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ textAlign: 'center', color: '#666' }}>No tasks yet. Add one above!</p>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            {allTodos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onToggleComplete={onToggleComplete}
                        onEdit={onEdit}
                    />
                )
            })}
        </div>
    )
}
