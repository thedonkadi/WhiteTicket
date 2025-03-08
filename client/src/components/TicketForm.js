import React, { useState } from 'react';
import axios from 'axios';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    time: '',
    location: '',
    date: '',
    numberOfTickets: '',
    contactNumber: '',
  });

  const { movieName, time, location, date, numberOfTickets, contactNumber } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
      const res = await axios.post('http://localhost:5000/api/tickets', formData, config);
      console.log(res.data);
      alert('Ticket posted successfully!');
    } catch (err) {
      console.error('Error posting ticket:', err.response?.data || err.message);
      alert('Failed to post ticket. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Post a Ticket</h2>
      <input
        type="text"
        placeholder="Movie Name"
        name="movieName"
        value={movieName}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Time"
        name="time"
        value={time}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={location}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="date"
        placeholder="Date"
        name="date"
        value={date}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Number of Tickets"
        name="numberOfTickets"
        value={numberOfTickets}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Contact Number"
        name="contactNumber"
        value={contactNumber}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Post Ticket
      </button>
    </form>
  );
};

export default TicketForm;