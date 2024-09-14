import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos = [], onDelete, onEdit }) => {
    return (
        <div className="todo-list">
            {todos.length > 0 ? (
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))
            ) : (
                <p>No events available</p>
            )}
        </div>
    );
};

export default TodoList;
