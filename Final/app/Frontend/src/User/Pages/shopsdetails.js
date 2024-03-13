import './Shopdetails.css';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Shopdetails = () => {
  const { shopName } = useParams();

  const shopDetails = {
    name: 'Sample Shop',
    address: '123 Main Street, Cityville',
    ownerName: 'John Doe',
    ownerPhoneNumber: '+1234567890',
    verified: true,
    gstNumber: 'GST12345',
    closed: false,
    establishedYear: 2010,
    ratings: 4.5,
    imageSrc: 'url_to_shop_image',
    products: [
      { id: 1, name: 'Normal Blouse', price: '$10.99', imageSrc: 'url_to_product_image_1' },
      { id: 2, name: 'Product 2', price: '$20.99', imageSrc: 'url_to_product_image_2' },
      { id: 3, name: 'Product 3', price: '$15.99', imageSrc: 'url_to_product_image_3' },
      { id: 1, name: 'Normal Blouse', price: '$10.99', imageSrc: 'url_to_product_image_1' },
      { id: 2, name: 'Product 2', price: '$20.99', imageSrc: 'url_to_product_image_2' },
      { id: 3, name: 'Product 3', price: '$15.99', imageSrc: 'url_to_product_image_3' },
      { id: 1, name: 'Normal Blouse', price: '$10.99', imageSrc: 'url_to_product_image_1' },
      { id: 2, name: 'Product 2', price: '$20.99', imageSrc: 'url_to_product_image_2' },
      { id: 3, name: 'Product 3', price: '$15.99', imageSrc: 'url_to_product_image_3' },
      { id: 1, name: 'Normal Blouse', price: '$10.99', imageSrc: 'url_to_product_image_1' },
      { id: 2, name: 'Product 2', price: '$20.99', imageSrc: 'url_to_product_image_2' },
      { id: 3, name: 'Product 3', price: '$15.99', imageSrc: 'url_to_product_image_3' },
      
    ],
  };
    
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const renderProducts = () => {
    return shopDetails.products.map(product => (
      <div key={product.id} className='product-container'>
        <div className='product-image'>
          <img src={product.imageSrc} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <div className='product-details'>
          <p>{product.price}</p>
        </div>
        <div className='product-cart'>
          <button
            className='product-btn-cart'
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>

    
      <div className="shop-details-container">
        <div className="shop-image">
          <div className='shop-image-inner'>
            <img src={shopDetails.imageSrc} alt={`${shopDetails.name} Shop`} />
          </div>
        </div>
        <div className="shop-info">
          <h2>{shopDetails.name}</h2>
          <p>{shopDetails.address}</p>
          <p>Owner: {shopDetails.ownerName}</p>
          <p>Phone: {shopDetails.ownerPhoneNumber}</p>
          <p>
  Profile: {shopDetails.verified && (
    <>
      Verified <span role="img" aria-label="verified">✅</span>
    </>
  )}
</p>

          <p>GST Number: {shopDetails.gstNumber}</p>
          {shopDetails.closed ? <p>Closed</p> : <p>Open</p>}
          <p>Established: {shopDetails.establishedYear}</p>
          <p>Ratings: {shopDetails.ratings}</p>
        </div>
      </div>

      <div className='shopdetails-page'>
        {renderProducts()}
      </div>
    </>
  );
};

export default Shopdetails;
