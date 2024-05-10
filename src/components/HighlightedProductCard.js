import React from 'react';

const HighlightedProductCard = ({ imageUrl, title, description }) => {

    const truncatedDescription = description.length > 50 ? description.substring(0, 50) + '...' : description;
  
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" alt="Product" style={{ width: '350px', height: '250px' }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{truncatedDescription}</p>
          <a href="#" className="btn btn-primary">View More</a>
        </div>
      </div>
    );
  };
  

export default HighlightedProductCard;
