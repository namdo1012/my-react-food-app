import React, {Component} from 'react';
import {Form, Button, Card, Container} from 'react-bootstrap';
import './SignIn.css';

function SignIn() {
    return (
        <Container style={{height: '100vh'}}>
            <Card className="pt-4 mx-auto" style={{ width: '25rem',top: '120px'}}>
                <Card.Title className="text-center"> Sign In </Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" type="submit" style={{top:'10px'}}>Submit</Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SignIn;