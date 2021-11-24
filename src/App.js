import { Routes, Route } from 'react-router-dom';

import NavBar from './Components/Navbar/Navbar';
import Services from '../src/Components/Navbar/Services/Services';


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/services' element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
