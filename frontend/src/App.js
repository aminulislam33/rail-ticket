import React, { useEffect, useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import axios from 'axios';

const App = () => {
    const [tickets, setTickets] = useState([]);

    const fetchTickets = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/tickets');
            setTickets(response.data); // Set tickets in state
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTickets(); // Fetch tickets on component mount
    }, []);

    return (
        <div>
            <h1>Railway Ticket Booking</h1>
            <TicketForm fetchTickets={fetchTickets} /> {/* Pass fetchTickets as prop */}
            <TicketList tickets={tickets} fetchTickets={fetchTickets} />
        </div>
    );
};

export default App;