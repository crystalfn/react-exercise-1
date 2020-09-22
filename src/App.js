import React, { Component } from 'react';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Educations from './components/educations/Educations';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <AboutMe />
        <Educations />
      </main>
    );
  }
}

export default App;
