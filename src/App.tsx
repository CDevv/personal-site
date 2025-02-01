import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import indexstyles from './index.css';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import { Route, Router } from '@solidjs/router';
import Layout from './components/Layout';
import Home from './pages/Home';

const App: Component = () => {
  const testFunc = () => {
    console.log("hello!");
  } 

  return (
    <Router root={Layout}>
      <Route path='/' component={Home}></Route>
    </Router>
  );
};

export default App;
