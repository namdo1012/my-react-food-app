import React from 'react';
import {Nav, Col, Row} from 'react-bootstrap';
import './Navigation.css';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
  render(){
    return (
        <Row className="navigation justify-content-center">
        <Col lg={9}>
            <Nav justify className="justify-content-start align-items-center " activeKey="/home"> 
                <Nav.Item className =""> 
                    <Link to="/"> Home </Link> 
                </Nav.Item>          
                 <Nav.Item className =""> 
                    <Link to="/menu"> Menu </Link> 
                </Nav.Item>      
                <Nav.Item className =""> 
                    <Link to="/order"> Order online </Link> 
                </Nav.Item>                
                <Nav.Item className =""> 
                    <Link to="/contact"> Contact </Link> 
                </Nav.Item>               
                 <Nav.Item className =""> 
                    <Link to="/about"> About us </Link> 
                </Nav.Item>               
            </Nav>
        </Col>
        </Row>  
    )

  }
}
export default Navigation;