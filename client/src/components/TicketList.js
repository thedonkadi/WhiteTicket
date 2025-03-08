import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = ({ searchType, searchQuery }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(`/api/tickets/${searchType}/${searchQuery}`);
        setTickets(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchTickets();
  }, [searchType, searchQuery]);

  return (
    <div>
      <h2>Tickets</h2>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div key={ticket._id}>
            <h3>{ticket.movieName}</h3>
            <p>Time: {ticket.time}</p>
            <p>Location: {ticket.location}</p>
            <p>Date: {new Date(ticket.date).toLocaleDateString()}</p>
            <p>Tickets Available: {ticket.numberOfTickets}</p>
            <p>Contact: {ticket.contactNumber}</p>
          </div>
        ))
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
};

export default TicketList;