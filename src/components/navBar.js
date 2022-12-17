import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import './css/navBar.css';

const NavBar = () => (
  <header className="navbar">
    <div className="logo-menu">
      <h1 className="nav_title">Bookstore CMS</h1>
      <nav className="links_list">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
    </div>
    <div className="user">
      <PersonIcon />
    </div>
  </header>
);

export default NavBar;
