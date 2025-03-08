import React, { useState } from 'react';
import TicketForm from '../components/TicketForm';
import TicketList from '../components/TicketList';

const Home = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [searchType, setSearchType] = useState('location');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="home">
      <div className="tabs">
        <button
          className={activeTab === 'buy' ? 'active' : ''}
          onClick={() => setActiveTab('buy')}
        >
          Buy Ticket
        </button>
        <button
          className={activeTab === 'sell' ? 'active' : ''}
          onClick={() => setActiveTab('sell')}
        >
          Sell Ticket
        </button>
      </div>

      {activeTab === 'buy' ? (
        <div className="buy-ticket">
          <div className="search">
            <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
              <option value="location">Location</option>
              <option value="movie">Movie</option>
            </select>
            <input
              type="text"
              placeholder={`Search by ${searchType}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <TicketList searchType={searchType} searchQuery={searchQuery} />
        </div>
      ) : (
        <div className="sell-ticket">
          <TicketForm />
        </div>
      )}
    </div>
  );
};

export default Home;