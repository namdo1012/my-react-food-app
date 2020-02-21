import React from 'react';
import Navigation from './components/Navigation/Navigation';
import OrderOnline from './OrderOnline';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      route: 'signin',
    };
  }
  
  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }
  render(){
    const {route} = this.state;

    if (route === 'home') {
        return (
          <Router>
            <div className="App">
                <Navigation />
                <Switch>
                  <Route  path="/"
                          exact 
                          render={(props) => <Home {...props} onRouteChange={this.onRouteChange} />} />
                  <Route path="/order" component={OrderOnline} />
                  <Route path="/menu" component={Menu} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/about" component={About} /> 
                  <Redirect to="/order"/> {/* Fail: Redirect to order when sign in */}
                </Switch>
            </div>
          </Router>);
      } 
      else if (route==='signin'){return <SignIn onRouteChange={this.onRouteChange}></SignIn>}
      else {return <SignUp onRouteChange={this.onRouteChange}></SignUp>}
    } 
}

const Home = (props) => {
  return (
    <div>
      <h1> Home page </h1>
      <button onClick={()=>props.onRouteChange('signin')}> Sign out</button>
    </div>
  )
};

const Contact = () => {
  return (
    <div>
      <h1> Contact page </h1>
    </div>
  )
};

const About = () => {
  return (
    <div>
      <h1> About page </h1>
    </div>
  )
};

const Menu = () => {
  return (
    <div>
      <h1> Menu page </h1>
    </div>
  )
};


export default App;
