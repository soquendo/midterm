import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext } from './ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from './redux/ReduxStore';

interface AppProps {}

function App(props: AppProps) {
  const navigate = useNavigate();
  const cartItemsCount = useSelector((state: RootState) => state.cart.items.length);
  const { toggleTheme } = useContext(ThemeContext);

  const handleShowHome = () => {
    navigate('home');
  };

  const handleShowProducts = () => {
    navigate('/products');
  };

  const handleShowCart = () => {
    navigate('/shoppingcart');
  };

  return (
    <div className="App">
      <hr />
      
      <button onClick={handleShowHome} className="button">
        Home
      </button>

      <button onClick={handleShowProducts} className="button">
        Products
      </button>

      <button onClick={handleShowCart} className="button">
        Cart ({cartItemsCount})
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
