import React, { useState } from 'react';
import AddEvent from '../components/AddEvent';
import TodoList from '../components/TodoList';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    
    // check user login
    const checkUserLoggedIn = () => {
        if(localStorage.getItem('loggedIn') === null || !localStorage.getItem('loggedIn') === 'true') {
            setIsLoggedIn(false); 
            return;
        }
        setIsLoggedIn(true);
    };
    
    /*useEffect(() => {
        checkUserLoggedIn();
    }, []); 
    */
    // Add event handler function
    const handleAddEvent = (event) => {
        setTodos([...todos, event]);
    };
    
    // Edit event handler function
    const handleEditEvent = (id, updatedEvent) => {
        setTodos(todos.map(todo => (todo.id === id ? updatedEvent : todo)));
    };

    // Delete event handler function
    const handleDeleteEvent = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            
            <div className="home"> 
                <h1>Event Manager</h1>
                <AddEvent onAdd={handleAddEvent} />
                <TodoList
                    todos={todos}
                    onDelete={handleDeleteEvent}
                    onEdit={handleEditEvent}
                />
            </div>
            
       
        </div>
    );
};

export default Home;
