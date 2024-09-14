import React, { useState } from 'react';
import './AddEvent.css';

const AddEvent = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            id: Date.now(), // unique ID for simplicity
            title,
            status,
        };
        onAdd(newEvent);
        setTitle('');
        setStatus('Pending');
    };

    return (
        <div className="add-event">
            <h2>Add Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Event Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default AddEvent;
