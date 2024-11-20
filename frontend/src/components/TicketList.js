import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
    const [tickets, setTickets] = useState([]);

    const fetchTickets = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/tickets');
            setTickets(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    const deleteTicket = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/tickets/${id}`);
            fetchTickets(); // Refresh the list after deletion
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Booked Tickets</h2>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket._id}>
                        {ticket.name} - {ticket.trainNumber} - {new Date(ticket.date).toLocaleDateString()} - {ticket.seatNumber}
                        <button onClick={() => deleteTicket(ticket._id)}>Cancel</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketList;