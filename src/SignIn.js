import React, { useEffect } from "react";
import backgroundImg from "./img/sign-in-background-1.jpg";
import { Form, Button, Card, Container } from "react-bootstrap";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn({ setLogin, login, history }) {
  const onClick = () => setLogin(true);

  useEffect(() => {
    if (login) {
      history.replace("/order");
    }
  }, [login]);

  return (
    <div>
      <div className="background">
        <img src={backgroundImg} alt="background-img" />
      </div>
      <Container className="pb-5 pt-3" style={{ height: "100vh" }}>
        <div
          className="d-flex flex-column"
          style={{ width: "21rem", top: "50px" }}
        >
          {" "}
          {/*Need Fix: Top property not be affected */}
          <h1 className="logo">Foodo</h1>
          <Card
            className="pt-4 pb-3"
            style={{ borderRadius: "10px", backgroundColor: "rgba(0,0,0,.5)" }}
          >
            <Card.Title className="text-center text-uppercase">
              Sign In
            </Card.Title>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                  <Button
                    variant="success"
                    type="submit"
                    className="w-100 mt-3 text-uppercase"
                    onClick={onClick}
                  >
                    Login
                  </Button>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center">
                  <p className="mb-0 text-dark">Not registed?</p>
                  <Link to="/signup">Create new account</Link>
                </Form.Group>
                {/* <div className="text-center d-flex flex-column">
									<Button variant="success" type="submit" className="mt-3 text-uppercase">Login</Button>
									<div className="d-flex pt-3 align-items-center justify-content-center">
											<p className="mb-0 text-dark">Not registed?</p>
											<button type="button" 
															class="btn btn-outline-secondary border-0 pl-1 text-success"
															onClick={()=>props.onRouteChange('register')}>
											Create new account
											</button>
									</div>
							</div> */}
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;
