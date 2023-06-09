import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';

import './App.css';
import Navbar from './Components/Navabar/Navbar';
import CoursesHeader from './Components/CoursesHeader/CoursesHeader';
import CourseBox from './Components/CourseBox/CourseBoxItem';
import FrontProducts from './Pages/FrontProducts/FrontProducts';
import GoalBox from './Components/Main/GoalBox/GoalBoxItem';
import { Col, Container, Row } from 'react-bootstrap';


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
