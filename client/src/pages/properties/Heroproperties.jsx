import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Properties.css';
import one_bedroom from "../../assets/one_bedroom.jpg";
import two_bedroom from "../../assets/two_bedroom.jpg";
import three_bedroom from "../../assets/three_bedroom.jpg";
import four_bedroom from "../../assets/4bedroom.webp";
import five_bedroom from "../../assets/five_bedroom.jpg";
import six_bedroom from "../../assets/six_bedroom.jpg";
import specialoffer from "../../assets/specialoffer.jpg";
import { Link } from 'react-router-dom';

function Heroproperties() {
  const [spaces, setSpaces] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/spaces')
      .then(response => {
        setSpaces(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the spaces!', error);
      });
  }, []);

  const getImageByType = (type) => {
    switch (type) {
      case 'one_bedroom': return one_bedroom;
      case 'two_bedroom': return two_bedroom;
      case 'three_bedroom': return three_bedroom;
      case 'four_bedroom': return four_bedroom;
      case 'five_bedroom': return five_bedroom;
      case 'six_bedroom': return six_bedroom;
      default: return three_bedroom;
    }
  };

  const addToCart = (space) => {
    setCart([...cart, space]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, space) => total + space.price, 0);
  };

  const handlePurchase = () => {
    setCart([]);
    alert('Purchase successful!');
  };

  return (
    <>
      <div className='heroproperties'>
        <h2>Tranquil Oasis Properties</h2>
      </div>

      <div className='grey'>
        <div className='ourspacestext'>Available Spaces</div>
        <form className="our_Spaces_form">
          <label htmlFor="our_spaces"></label>
          <select onChange={(e) => window.location.href = 'dwelling1'}>
            <option>one_bedroom</option>
            <option>two_bedroom</option>
            <option>three_bedroom</option>
            <option>four_bedroom</option>
            <option>five_bedroom</option>
            <option>six_bedroom</option>
          </select>
        </form>
      </div>

      <div className='cart'>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.type.replace('_', ' ')} - ${item.price}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${getTotalPrice()}</p>
            <button onClick={handlePurchase}>Purchase</button>
          </>
        )}
      </div>

      <section className='dwelling1' id="dwelling1">
        {spaces.map((space, index) => (
          <div className='dcard' key={index}>
            <img src={getImageByType(space.type)} alt={space.type.replace('_', ' ')} />
            <h2>{space.type.replace('_', ' ')}</h2>
            <p>{space.description} <br />${space.price}</p>
            <p className={space.vacancy ? 'vacant' : 'booked'}>
              {space.vacancy ? 'vacant' : 'booked'}
            </p>
            <p>Location: {space.location}</p>
            <p>Floor: {space.floor}</p>
            <button onClick={() => addToCart(space)}>Add to Cart</button>
          </div>
        ))}
      </section>

      <button className='btn'>
        <Link to="/">Log out</Link>
      </button>
    </>
  );
}

export default Heroproperties;
