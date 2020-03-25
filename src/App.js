import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import OrderOnline from "./pages/OrderOnline/OrderOnline";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import { UserProvider } from "./contexts/UserContext";
import LikeProvider from "./contexts/LikeContext/LikeProvider";

class App extends React.Component {
  render() {
    return (
      <UserProvider>
        <LikeProvider>
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/order" component={OrderOnline} />
                {/* history is passed through Router Component */}
                <Route
                  path="/signin"
                  component={({ history }) => <SignIn history={history} />}
                />
                <Route
                  path="/signup"
                  component={({ history }) => <SignUp history={history} />}
                />
              </Switch>
            </div>
          </Router>
        </LikeProvider>
      </UserProvider>
    );
  }
}

export default App;

// const AuthRoute = ({ isLogin, ...rest }) => {
//   return isLogin ? <Route {...rest} /> : <Redirect to="/signin" />;
// };
/* <AuthRoute exact path="/" component={Home} /> */
/* <AuthRoute path="/home" component={Home} /> */
/* <AuthRoute isLogin={login} path="/order" component={OrderOnline} /> */
