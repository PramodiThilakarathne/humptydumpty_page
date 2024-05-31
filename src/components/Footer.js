import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Footer.css";
import "../styles/Contact.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='contact'>
        <div
          className='leftSide'
          style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className='rightSide'>
          <h1>Contact Us</h1>
          <form id='contact-form' method='POST'>
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='Enter full name...' type='text' />
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter email...' type='email' />
            <label htmlFor='message'>Message</label>
            <input name='text' placeholder='Enter message...' type='text' />
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </div>
      <p>&copy; 2024 humptydumptypizza.com</p>
    </div>
  );
}

export default Footer;



