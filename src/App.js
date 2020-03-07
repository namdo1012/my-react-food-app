import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";

import Gallery from "./Gallery";
import Home from "./Home";
import OrderOnline from "./OrderOnline";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class App extends React.Component {
  state = {
    isLogin: false
  };

  onRouteChange = route => {
    this.setState({
      route: route
    });
  };

  setLogin = newVal => {
    this.setState({
      isLogin: newVal
    });
  };

  render() {
    const { isLogin } = this.state;
    const { setLogin } = this;

    return (
      <Router>
        <div className="App">
          <Switch>
            {/* <AuthRoute exact path="/" component={Home} /> */}
            {/* <AuthRoute path="/home" component={Home} /> */}
            {/* <AuthRoute isLogin={login} path="/order" component={OrderOnline} /> */}

            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/order" component={OrderOnline} />
            {/* history is passed through Router Component */}
            <Route
              path="/signin"
              component={({ history }) => (
                <SignIn
                  history={history}
                  setLogin={setLogin}
                  isLogin={isLogin}
                />
              )}
            />
            <Route
              path="/signup"
              component={({ history }) => (
                <SignUp
                  history={history}
                  setLogin={setLogin}
                  isLogin={isLogin}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const AuthRoute = ({ isLogin, ...rest }) => {
  return isLogin ? <Route {...rest} /> : <Redirect to="/signin" />;
};

export default App;
