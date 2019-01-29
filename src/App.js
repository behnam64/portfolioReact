import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.scss';

import Home from "./views/home";
import Natour from "./views/natour";

class App extends Component {
  state = {
    show: true
  }
  toggleShow = () => {
    this.setState({show: false});
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/natour" component={Natour}/>
          {this.state.show ? (
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link onClick={this.toggleShow} to="/natour">Natour</Link></li>
          </ul>
          ) : null}

        </div>
      </Router>
    );
  }
}

export default App;
