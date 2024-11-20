import React, { useState } from 'react';
import axios from 'axios';

const TicketForm = ({ fetchTickets }) => {
    const [name, setName] = useState('');
    const [trainNumber, setTrainNumber] = useState('');
    const [date, setDate] = useState('');
    const [seatNumber, setSeatNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/tickets', { name, trainNumber, date, seatNumber });
            fetchTickets(); // Refresh the list after submission
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Train Number" value={trainNumber} onChange={(e) => setTrainNumber(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="text" placeholder="Seat Number" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} required />
            <button type="submit">Book Ticket</button>
        </form>
    );
};

export default TicketForm;