import './main.css';
import React, { useState } from 'react';
import data from './data.json';
// import Footer from './footer';

function Main() {
  const [searchTerm, setSearchTerm] = useState('');

  const cardStyle = {
    width: '18rem',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    padding: '10px',
    height: "300px"
  };

  
  const filteredData = data.filter((section) => {
    return section.items.some((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="aa">
        {filteredData.map((section, index) => (
          <div key={index}>
            <h2 className="h2h">{section.section}</h2>
            <div className="card">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} style={cardStyle}>
                  <img src={item.image} alt={item.name} style={{width :"100%" , maxHeight : "170px"}} />
                  <div>
                    <h2>{item.name}</h2>
                    <p>{`Price: $${item.price}`}</p>
                    {/* <a href="#" style={{ textDecoration: 'none' }}>
                      🛒 Order Now
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Main;
