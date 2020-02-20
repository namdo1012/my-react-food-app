import React from 'react';
import backgroundImg from './img/sign-in-background.jpg';
import {Form, Button, Card, Container} from 'react-bootstrap';
// import './SignIn.css';

function SignUp(props) {
    return (
        <div>
            <div className="background">
                <img src={backgroundImg} alt="background-img" />
            </div>
            <h1 className="logo">Maola</h1>
            <Container style={{height: '100vh'}}>
            <Card className="pt-4 pb-3" style={{ width: '21rem',top: '160px', left: '695px', borderRadius: '10px'}}>
                <Card.Title className="text-center"> Sign up </Card.Title>
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
                        <div className="text-center d-flex flex-column">
                            <Button variant="success" type="submit" className="mt-3" style={{}}
                            >Login</Button>
                            <button type="button" class="btn btn-outline-secondary border-0 pt-3">Create new account</button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
      </div>
    )
}

export default SignUp;