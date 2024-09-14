import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);

    const handleAccept = () => {
        onEdit(todo.id, { ...todo, status: 'Accepted' });
        setTimeout(() => alert('Event accepted'), 1000);
    };

    const handleReject = () => {
        onEdit(todo.id, { ...todo, status: 'Rejected' });
        setTimeout(() => alert('Event rejected'), 1000);
    };

    const handleEdit = () => {
        if (isEditing) {
            onEdit(todo.id, { ...todo, title: editedTitle });
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    return (
        <div className={`todo-item ${todo.status.toLowerCase()}`}>
            {isEditing ? (
                <div className="todo-edit">
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </div>
            ) : (
                <div className="todo-content">
                    <h4>{todo.title}</h4>
                    <p>Status: {todo.status}</p>
                </div>
            )}
            <div className="todo-actions">
                <button onClick={handleAccept}>Accept</button>
                <button onClick={handleReject}>Reject</button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
                <button onClick={handleEdit}>{isEditing ? 'Cancel' : 'Edit'}</button>
            </div>
        </div>
    );
};

export default TodoItem;
