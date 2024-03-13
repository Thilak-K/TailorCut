import React, { useState } from "react";
import { Link } from "react-router-dom";
import Secondnav from "./secondnav";
import ShopCard from './shopscard';
import "./shops.css";

const Shops=()=> {
  const shops = [
    { name: 'Rex Tailors', rating: 4.5, imageSrc: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzeenews.india.com%2Fphotos%2Findia%2Fin-pics-ima-passing-out-parade-held-amid-covid-19-threat-in-dehradun-2289720&psig=AOvVaw3iboves2KCYzjHGdvBzX1X&ust=1706374362516000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLi4tpDC-4MDFQAAAAAdAAAAABAD' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_2' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
    { name: 'Rex Tailors', rating: 3.8, imageSrc: 'url_to_image_3' },
  
  ];
  return (

    <div>
        <Secondnav/>
        <div className="shops-container">
        <div className="search-bar">
  
          <input type="text" placeholder="Search for shops..." />
          <button type="button">Search</button>
        </div>
        <div className='search-location'>
          <h2>Shops Near You</h2>
        </div> 
      </div>
      <div className="shops-list">
        {shops.map((shop, index) => (
          <ShopCard key={index} name={shop.name} rating={shop.rating} imageSrc={shop.imageSrc} />
        ))}
      </div>
    </div>
  );
}

export default Shops;
