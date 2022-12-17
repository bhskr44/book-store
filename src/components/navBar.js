import { NavLink } from 'react-router-dom';
import './css/navBar.css';

const NavBar = () => (
  <header className="navbar">
    <h1 className="nav_title">Book Store</h1>
    <nav className="links_list">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </nav>
  </header>
);

export default NavBar;
