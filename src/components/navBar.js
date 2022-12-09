import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const navBar = () => (
  <div className="navBar">
    <h1>Book Store</h1>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </Router>
  </div>
);

export default navBar;
