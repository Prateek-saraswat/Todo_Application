import { useState } from "react"

function TodoItem({ todo, onDelete, onToggleComplete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    function handleDelete() {
        onDelete(todo.id)
    }

    function handleToggleComplete() {
        onToggleComplete(todo.id)
    }

    function handleEdit() {
        setIsEditing(true)
    }

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
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '15px',
            margin: '10px 0',
            backgroundColor: todo.isCompleted ? '#e8f5e9' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px'
        }}>
            {isEditing ? (
                <div style={{ flex: 1 }}>
                    <input 
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{ padding: '5px', marginRight: '10px' }}
                    />
                    <button onClick={handleSaveEdit} style={{ marginRight: '5px' }}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </div>
            ) : (
                <div style={{ flex: 1 }}>
                    <span 
                        onClick={handleToggleComplete}
                        style={{ 
                            textDecoration: todo.isCompleted ? 'line-through' : 'none',
                            cursor: 'pointer',
                            fontSize: '18px'
                        }}
                    >
                        {todo.text}
                    </span>
                </div>
            )}
            <div>
                <button onClick={handleEdit} style={{ marginRight: '5px' }}>Edit</button>
                <button onClick={handleDelete} style={{ backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '5px 10px' }}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
