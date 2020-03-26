import React from "react";
import backgroundImg from "../../img/sign-in-background-1.jpg";
import { Form, Button, Card, Container } from "react-bootstrap";
import "./SignIn.css";
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import LikeContext from "../../contexts/LikeContext/LikeContext";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = e => {
    this.setState({ signInEmail: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ signInPassword: e.target.value });
  };

  onSubmit = (e, getLiked, getEmail) => {
    e.preventDefault();
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          // Get user to the home page
          this.props.history.replace("/home");

          // Get liked items
          getLiked(data.message.data.user.likes);

          // Update current user's email
          getEmail(this.state.signInEmail);
          console.log(data);
        } else {
          alert("Password or Email Wrong");
        }
      })
      .catch(err => console.log(err));
  };

  render() {
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
              style={{
                borderRadius: "10px",
                backgroundColor: "rgba(0,0,0,.5)"
              }}
            >
              <Card.Title className="text-center text-uppercase">
                Sign In
              </Card.Title>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      onChange={this.onEmailChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={this.onPasswordChange}
                    />
                  </Form.Group>

                  <UserContext.Consumer>
                    {({ toLogin, getEmail }) => {
                      return (
                        <LikeContext.Consumer>
                          {({ getLiked }) => {
                            return (
                              <Form.Group>
                                <Button
                                  variant="success"
                                  type="submit"
                                  className="w-100 mt-3 text-uppercase"
                                  onClick={e => {
                                    this.onSubmit(e, getLiked, getEmail);
                                    toLogin();
                                  }}
                                >
                                  Login
                                </Button>
                              </Form.Group>
                            );
                          }}
                        </LikeContext.Consumer>
                      );
                    }}
                  </UserContext.Consumer>

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
}

export default SignIn;
