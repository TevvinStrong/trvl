import { Routes, Route } from 'react-router-dom';

// Importing Components
import Collage from '../src/Components/Collage/Collage';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import NavBar from './Components/Navbar/Navbar';
import Products from './Components/Navbar/ProductsPage/Products';
import Services from './Components/Navbar/ServicesPage/Services';
import SignIn from './Components/Navbar/SignInPage/SignIn';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Collage />
      <Routes>
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
