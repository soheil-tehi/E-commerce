import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';

import './App.css';
import Navbar from './Components/Navabar/Navbar';
import CoursesHeader from './Components/CoursesHeader/CoursesHeader';


function App() {

  const router = useRoutes(routes);

  return (
    <div className="App">
      <Navbar />
      <CoursesHeader />
      {router}
    </div>
  );
}

export default App;
