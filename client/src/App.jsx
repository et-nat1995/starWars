import React, { Component } from 'react';
import Home from "./pages/home"
import Header from "./components/Header"
import MyForm from "./pages/addPage"
import { Col, Row, Container } from "reactstrap";

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={MyForm}/>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
