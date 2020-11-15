import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolios from './Portfolios';
import Contact from './Contact';

export default class App extends React.Component{
  render(){
    return (
      <div className="main-container">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/resume"  component={Resume} />
            <Route path="/portfolios"  component={Portfolios} />
            <Route path="/contact"  component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}