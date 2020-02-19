import React from 'react';
import {Form, Button, Card, Container} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
function SignInForm() {
    const onSubmit = (e) => {
        e.preventDefault();
        return <Redirect to="/" />;
    }

    return (
        <Container style={{height: '100vh'}}>
            <Card className="pt-4 pb-3" style={{ width: '24rem',top: '160px', left: '650px', 'border-radius': '10px'}}>
                <Card.Title className="text-center"> Sign In </Card.Title>
                <Card.Body>
                    <Form onSubmit={onSubmit}>
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
                            <Button variant="success" type="submit" style={{top:'10px'}}>Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SignInForm;