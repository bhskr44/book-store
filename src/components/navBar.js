import React from 'react';

const navBar = () => {
  return (
    <div className="navBar">
      <h1>Book Store</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navBar;
