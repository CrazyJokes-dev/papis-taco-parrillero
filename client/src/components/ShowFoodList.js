import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';

function ShowFoodList() {
  const [Foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/Foods')
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowFoodList');
      });
  }, []);

  const FoodList =
    Foods.length === 0
      ? 'there is no Food record!'
      : Foods.map((Food, k) => <FoodCard Food={Food} key={k} />);

  return (
    <div className='ShowFoodList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Foods List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-Food'
              className='btn btn-outline-warning float-right'>
              + Add New Food
            </Link> 
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{FoodList}</div>
      </div>
    </div>
  );
}

export default ShowFoodList;