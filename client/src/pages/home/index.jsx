import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";


import MyModal from "../../components/Modal"
import MyCard from "../../components/Card"

import API from "../../utils/index"

import "./index.css"

class Home extends Component {
    state = {
        starWars: []
    }

    componentDidMount() {

    }

    UNSAFE_componentWillMount() {
        this.getInfo();
    }

    getInfo = () => {
        API.getAllCharacter()
            .then(data => {
                this.setState({ starWars: data.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div >
                <Container>
                    <Row>
                        <Col xs="4">
                            <MyModal />
                        </Col>
                    </Row>
                    <div className="flex">
                        {this.state.starWars ? this.state.starWars.map((item, i) => <MyCard {...item} key={i} />) : {}}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home;