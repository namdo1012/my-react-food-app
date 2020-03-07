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
    route: "signin",
    login: false
  };

  onRouteChange = route => {
    this.setState({
      route: route
    });
  };

  setLogin = newVal =>
    this.setState({
      login: newVal
    });

  render() {
    const { route, login } = this.state;
    const { setLogin } = this;

    return (
      <Router>
        <div className="App">
          <Switch>
            {/* <AuthRoute exact path="/" component={Home} /> */}
            {/* <AuthRoute path="/home" component={Home} /> */}
            {/* <Route
              path="/signin"
              component={({ history }) => (
                <SignIn history={history} setLogin={setLogin} login={login} />
              )}
            /> */}
            {/* <AuthRoute isLogin={login} path="/order" component={OrderOnline} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/order" component={OrderOnline} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// const Home = ({ history }) => {
//   return (
//     <div>
//       <h1> Home page </h1>
//       <button onClick={() => history.push("/signin")}> Sign out</button>
//     </div>
//   );
// };

const AuthRoute = ({ isLogin, ...rest }) => {
  return isLogin ? <Route {...rest} /> : <Redirect to="/signin" />;
};

export default App;
