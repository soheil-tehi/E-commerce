import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';

import './App.css';
import Navbar from './Components/Navabar/Navbar';


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
