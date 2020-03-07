import React from "react";
import backgroundImg from "./img/sign-in-background-1.jpg";
import { Form, Button, Card, Container } from "react-bootstrap";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn({ setLogin, login, history }) {
  // const onClick = () => setLogin(true);
  const goHomePage = () => {
    setLogin(true);
    history.replace("/home");
  };

  // useEffect(() => {
  //   if (login) {
  //     history.push("/order");
  //   }
  // }, [login]);

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
                    onClick={goHomePage}
                  >
                    Login
                  </Button>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center">
                  <p className="mb-0 text-dark">Not registed?</p>
                  <Link to="/signup">Create new account</Link>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;
