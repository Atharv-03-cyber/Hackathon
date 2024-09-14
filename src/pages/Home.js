import React, { useState } from "react";
import AddEvent from "../components/AddEvent";
import TodoList from "../components/TodoList";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // check user login
  const checkUserLoggedIn = () => {
    if (
      localStorage.getItem("loggedIn") === null ||
      !localStorage.getItem("loggedIn") === "true"
    ) {
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
    setTodos(todos.map((todo) => (todo.id === id ? updatedEvent : todo)));
  };

  // Delete event handler function
  const handleDeleteEvent = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onLogout = () => {
    localStorage.setItem("loggedIn", null);
    localStorage.setItem("currentUser", null);
    navigate("/");
  };
  return (
    <div>
      {(localStorage.getItem("loggedIn") === null ||
      !localStorage.getItem("loggedIn") === "true") ? (
        <Navigate to="/" />
      ) : (
        <div className="home">
          <h1>Event Manager</h1>
          <AddEvent onAdd={handleAddEvent} />
          <TodoList
            todos={todos}
            onDelete={handleDeleteEvent}
            onEdit={handleEditEvent}
          />
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Home;
