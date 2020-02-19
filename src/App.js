import React from 'react';
import Navigation from './components/Navigation';
import OrderOnline from './OrderOnline';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import SignIn from './SignIn';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/order" component={OrderOnline} />
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} /> 
          </Switch>
      </div>
    </Router>
    // <SignIn></SignIn>
	);
}

const Home = () => {
    return (
      <div>
        <h1> Home page </h1>
      </div>
    )
};

export default App;
