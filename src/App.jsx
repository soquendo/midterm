import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext, themes } from './ThemeContext';
import { useState, useContext } from 'react';


function App() {
  const navigate = useNavigate();

  const { toggleTheme } = useContext(ThemeContext);

  const handleShowHome = () => {
    navigate('home');
  };

  const handleShowProducts = () => {
    navigate('products');
  };

  return (
    <div className="App">
      <hr />
      <button onClick={() => handleShowHome()} className="button">
        Home
      </button>
      <button onClick={() => handleShowProducts()} className="button">
        Products
      </button>

      <div className="theme-button">
        <p> </p>
        <ToggleSwitch onToggle={toggleTheme} />
      </div>

      <hr />
      <Outlet />
    </div>
  );
}

export default App;