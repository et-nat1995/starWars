import React, { Component } from 'react';
import Home from "./pages/home"

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        {/* need to add paths here and create components */}
        <Route exact path="/" component= {Home}/>
      </Router>
    );
  }
}

export default App;
