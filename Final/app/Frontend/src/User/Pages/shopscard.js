
import React from 'react';
import { Link } from 'react-router-dom';
import './shopscard.css';

const ShopCard = ({ name, rating, imageSrc }) => {
  return (
    <a href={`/shop/${name}`}>
      <div className="shop-card">
        <div
          className="shop-image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className="shop-details">
          <h3>{name}</h3>
          <p className="rating">Rating: {rating}</p>
        </div>
      </div>
    </a>
  );
};

export default ShopCard;
