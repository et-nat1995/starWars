import React, { Component } from 'react';
import Home from "./pages/home"
import Header from "./components/Header"
import { Col, Row, Container } from "./components/Grid"

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Container >
            <Route exact path="/" component={Home} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
