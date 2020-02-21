import React from 'react';
import backgroundImg from './img/sign-in-background-1.jpg';
import {Form, Button, Card, Container} from 'react-bootstrap';
// import './SignIn.css';

function SignUp(props) {
    return (
        <div>
            <div className="background">
                <img src={backgroundImg} alt="background-img" />
            </div>

            <Container className="pb-5 pt-3" style={{height: '100vh'}}>
            <div className="d-flex flex-column" style={{width: '21rem', top: '50px'}}>
            <h1 className="logo">Foodo</h1>
            <Card className="pt-4 pb-3">
                <Card.Title className="text-center text-uppercase"> Sign up </Card.Title>
                <Card.Body>
                    <Form onSubmit={()=>{props.onRouteChange('home')}}>
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
                            <Button variant="success" type="submit" className="mt-3" >Login</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
        </Container>
      </div>
    )
}

export default SignUp;