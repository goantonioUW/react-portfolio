/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Components here ▼
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import './App.css';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';



function App() {
  return (
  <>
      <Navbar />
      <Switch>
      <Route path="/AboutMe" component={AboutMePage} />
      <Route path="/Projects" component={ProjectsPage} />
      <Route path="/Contact" component={ContactPage} />
      <Route path="/" component={MainPage} />
      </Switch>
      <Footer />
  </>
  );
}

export default App;
