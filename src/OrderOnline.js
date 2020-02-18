import React from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import {Container, Row, Col} from 'react-bootstrap';
import './OrderOnline.css';

class OrderOnline extends React.Component {

  constructor(props){
    super(props);
    this.state={
        s: "", //user input string
        results: []
    };
  }

  handleInputChange = val => {
      this.setState({s: val});
  }

  handleSearch = (results) => {
    this.setState( {results} );
    console.log(this.state.results);
  }

  render(){
      return (
        <Container>
          <Row>
            <p className="my-hero d-inline-block text-center">Order Online</p>
          </Row>
          <Row>
            <SearchBar
              onInputChange = {this.handleInputChange}
              onSearch = {this.handleSearch}
              s = {this.state.s}
            /> 
          </Row>

          <Row className="main-page">
            <Col md={3} className= "recipe"></Col>
            <Col md={6} className = "results__list">
                <Results
                  results = {this.state.results}
                />
            </Col>
            <Col md={3} className = "order-list"></Col>
          </Row>
        </Container>
      );    
  }
}

export default OrderOnline;