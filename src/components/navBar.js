import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="navbar">
    <h1 className="nav_title">Math Magician</h1>
    <nav className="links_list">
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  </header>
);

export default NavBar;
