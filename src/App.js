import React from 'react';
import Navigation from './components/Navigation';
import OrderOnline from './OrderOnline';
import SignIn from './SignIn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      route: 'signifn',
    };
  }
  
  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }
  render(){
    const {route} = this.state;

    if (route === 'signin') {
        return (
          <Router>
            <div className="App">
                <Navigation />
                <Switch>
                  <Route  path="/" 
                          exact
                          render={(props) => <Home {...props} onRouteChange={this.onRouteChange} />} 
                  />
                  <Route path="/order" component={OrderOnline} />
                  <Route path="/menu" component={Menu} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/about" component={About} /> 
                </Switch>
            </div>
          </Router>);
      } 
      else {
          return (

            <SignIn onRouteChange={this.onRouteChange}></SignIn>
          );
      }
    } 
}

const Home = (props) => {
  return (
    <div>
      <h1> Home page </h1>
      <button onClick={()=>props.onRouteChange('signfin')}> Sign out</button>
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
