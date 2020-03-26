import React from "react";
import backgroundImg from "../../img/sign-in-background-1.jpg";
import { Form, Button, Card, Container } from "react-bootstrap";
import UserContext from "../../contexts/UserContext";
// import './SignIn.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpUsername: "",
      signUpEmail: "",
      signUpPassword: ""
    };
  }

  onUsernameChange = e => {
    this.setState({
      signUpUsername: e.target.value
    });
  };

  onEmailChange = e => {
    this.setState({
      signUpEmail: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      signUpPassword: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.signUpUsername,
        email: this.state.signUpEmail,
        password: this.state.signUpPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          this.props.history.replace("/home");
          console.log(data);
        } else alert("Please fill in all fields");
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
                Sign up
              </Card.Title>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={this.onEmailChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      onChange={this.onUsernameChange}
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
                    {({ toLogin }) => {
                      return (
                        <div className="text-center d-flex flex-column">
                          <Button
                            variant="success"
                            type="submit"
                            className="mt-3"
                            onClick={e => {
                              this.onSubmit(e);
                              toLogin();
                            }}
                          >
                            Login
                          </Button>
                        </div>
                      );
                    }}
                  </UserContext.Consumer>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default SignUp;
