import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FoodCard = (props) => {
  const Food = props.Food;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Foods'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-Food/${Food._id}`}>{Food.title}</Link>
        </h2>
        <h3>{Food.author}</h3>
        <p>{Food.description}</p>
      </div>
    </div>
  );
};

export default FoodCard;