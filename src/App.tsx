import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';
import Navbar from './Components/Navabar/Navbar';
import './App.css';
import Footer from './Components/Footer/Footer';


function App() {

  const router = useRoutes(routes);

  return (
    <div className="App">
      <Navbar />
      {router}
      <Footer />
    </div>
  );
}

export default App;
