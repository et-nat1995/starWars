import React, { Component } from 'react';
import API from "../../utils"
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class MyForm extends Component {
    state = {
        role: "",
        name: "",
        age: "",
        forcePoints: "",
        modal: false
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };
    handleClear = e => {
        e.preventDefault();
        this.setState({
            role: "",
            name: "",
            age: "",
            forcePoints: "",
            modal: false
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        API.addNewCharacter(this.state).then(data => {
            console.log(data);
            this.toggle();
        }).catch(err => console.log("There has been an Error: ", err));
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="jediName">Jedi Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="jediName"
                            placeholder="Jedi Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input
                            type="text"
                            name="role"
                            id="role"
                            placeholder="Jedi Role"
                            value={this.state.role}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                            type="text"
                            name="age"
                            id="age"
                            placeholder="Jedi Age"
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="forcePoints">Force Points</Label>
                        <Input
                            type="text"
                            name="forcePoints"
                            id="forcePoints"
                            placeholder="Jedi Role"
                            value={this.state.forcePoints}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button color="primary" onClick={this.handleSubmit}>Add Jedi</Button>
                </Form>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle} href="/">Go Home!</Button>

                        <Button color="secondary" onClick={this.handleClear}>Add Another Jedi!</Button>

                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}

export default MyForm;