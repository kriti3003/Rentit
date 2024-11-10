import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  const productImageStyle = {
    width: '250px',  
    height: '350px', 
    objectFit: 'cover', 
    objectPosition: 'center',  
  };

  const productItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden" style={productItemStyle}>
        {/* Apply inline styles to the image */}
        <img src={image[0]} alt={name} style={productImageStyle} />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;


