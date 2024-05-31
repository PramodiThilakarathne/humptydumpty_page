import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/backpizza1.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' 
      style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1>Humpty Dumpty Pizzeria</h1>
        <p>It's Like a heaven machan.. Taste it ! </p>
        <Link to='/'>
            <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home
