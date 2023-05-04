import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
//import button from './Button';


function App() {
  const navigate = useNavigate();

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

      <hr />
      <Outlet />
    </div>
  );
}

export default App;