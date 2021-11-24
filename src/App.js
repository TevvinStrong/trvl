import { Routes, Route } from 'react-router-dom';

// Importing Components
import Jumbotron from './Components/Jumbotron/Jumbotron';
import NavBar from './Components/Navbar/Navbar';
import Products from './Components/Navbar/ProductsPage/Products';
import Services from './Components/Navbar/ServicesPage/Services';
import SignUp from './Components/Navbar/SignUpPage/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Routes>
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
