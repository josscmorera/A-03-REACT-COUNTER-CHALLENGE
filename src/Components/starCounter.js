import React, { useState } from 'react';
import '../index.css';
import logo from '../logo.png';
import star from '../stars.png';

function StarCounter() {
  const [counter, setCounter] = useState(0);

  let stars = [];
  for (let i = 0; i < counter; i++) {
    stars.push(<img key={i} src={star} alt="Star" className="star" />);
  }

  return (
    <div className="StarCounter">
      <header>
        <div id="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Menu</a></li>
          </ul>
        </nav>
      </header>
      <main>      <br/> 
      <br/>
        <div id="counter-container">
          <button id="add-button" onClick={() => setCounter(counter + 1)}>Add 1</button>
          <div id="counter">{counter}</div>
          <button id="remove-button" onClick={() => setCounter(counter - 1 < 0 ? 0 : counter - 1)}>Remove 1</button>
        </div>
        <div id="stars">
          {stars}
        </div>
      </main>
    </div>
  );
}

export default StarCounter;
