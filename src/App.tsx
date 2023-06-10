import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';
import Navbar from './Components/Navabar/Navbar';
import './App.css';


function App() {

  const router = useRoutes(routes);

  return (
    <div className="App">
      <Navbar />
      {router}
    </div>
  );
}

export default App;
