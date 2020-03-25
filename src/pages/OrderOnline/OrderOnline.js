import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Results from "../../components/Results/Results";
import { Row, Col } from "react-bootstrap";
import "./OrderOnline.css";
import Navigation from "../../components/Navigation/Navigation";
import Cart from "../../components/Cart/Cart";
import OrderOnlineTask from "../../components/OrderOnlineTask/OrderOnlineTask";

class OrderOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: "", //user input string
      results: []
    };
  }

  handleInputChange = val => {
    this.setState({ s: val });
  };

  handleSearch = results => {
    this.setState({ results });
    console.log(this.state.results);
  };

  render() {
    return (
      <section className="order-section">
        <Navigation></Navigation>
        <Row>
          <SearchBar
            onInputChange={this.handleInputChange}
            onSearch={this.handleSearch}
            s={this.state.s}
          />
        </Row>

        <Row className="main-page">
          <Col md={3} className="recipe">
            <OrderOnlineTask />
          </Col>
          <Col md={6} className="results__list">
            <Results results={this.state.results} />
          </Col>
          <Col md={3} className="order-list">
            <Cart />
          </Col>
        </Row>
      </section>
    );
  }
}

export default OrderOnline;
