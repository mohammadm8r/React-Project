import React , { Component } from 'react';
// import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './bootstrap-rtl.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Restaurant from './Restaurant'
import Header from './Header'
import Main from './Main'
import RestPart from './RestPage'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div id="base">
          <Header />
          <Route path="/restaurants/" component={Restaurant} />
          <Route exact path="/" component={Main} />
          <Route exact path="/restaurant/" component={RestPart}/>
        </div>
      </Router>
    )
  }
};


export default App;
