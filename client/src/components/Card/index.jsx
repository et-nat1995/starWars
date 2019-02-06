import React, { Component } from 'react';
import "./index.css"

import {
    Card, Button, CardSubtitle, CardBody,
    CardTitle, CardText,  Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';

class myCard extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="cardBody">
                <Card body>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardText>
                        <p> Role: {this.props.role} </p>
                        <p> Age: {this.props.age} </p>
                        <p> Force Points: {this.props.forcePoints} </p>
                    </CardText>
                    <Button onClick={this.toggle}>Hey There!!!</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            You Clicked on the button! Nice.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Card>
            </div>
        )

    }
}
export default myCard; 