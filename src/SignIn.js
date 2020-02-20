import React from 'react';
import backgroundImg from './img/sign-in-background.jpg';
import {Form, Button, Card, Container} from 'react-bootstrap';
import './SignIn.css';

function SignIn(props) {
    return (
        <div>
            <div className="background">
                <img src={backgroundImg} alt="background-img" />
            </div>
            <h1 className="logo">Maola</h1>
            <Container style={{height: '100vh'}}>
            <Card className="pt-4 pb-3" style={{ width: '21rem',top: '160px', left: '695px', borderRadius: '10px'}}>
                <Card.Title className="text-center"> Sign In </Card.Title>
                <Card.Body>
                    <Form onSubmit={()=>{props.onRouteChange('signin')}}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="text-center d-flex flex-column">
                            <Button variant="success" type="submit" className="mt-3 text-uppercase" style={{}}
                            >Login</Button>
                            <div className="d-flex pt-3 align-items-center justify-content-center">
                                <p className="mb-0 text-dark">Not registed?</p>
                                <button type="button" 
                                        class="btn btn-outline-secondary border-0 pl-1 text-success"
                                        >Create new account</button>
                            </div>

                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
      </div>
    )
}

export default SignIn;