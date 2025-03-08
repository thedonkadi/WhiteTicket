import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const config = {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        };
        const res = await axios.get('http://localhost:5000/api/tickets/user', config);
        setTickets(res.data);
      } catch (err) {
        console.error('Error fetching tickets:', err.response?.data || err.message);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Tickets</h1>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div key={ticket._id} className="border p-4 mb-4 rounded">
            <h3 className="text-xl font-semibold">{ticket.movieName}</h3>
            <p>Time: {ticket.time}</p>
            <p>Location: {ticket.location}</p>
            <p>Date: {new Date(ticket.date).toLocaleDateString()}</p>
            <p>Tickets Available: {ticket.numberOfTickets}</p>
            <p>Contact: {ticket.contactNumber}</p>
          </div>
        ))
      ) : (
        <p>No tickets posted yet.</p>
      )}
    </div>
  );
};

export default Profile;