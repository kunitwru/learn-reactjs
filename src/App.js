import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';


class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
          <Header />
          <main>
              <Content />
          </main>      
          <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
