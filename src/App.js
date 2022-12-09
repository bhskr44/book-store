import './App.css';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import Categories from './components/categories';
import Profile from './components/profile';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
