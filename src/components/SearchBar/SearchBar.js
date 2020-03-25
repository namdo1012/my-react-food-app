import React from "react";
import { Button } from "react-bootstrap";
import "./SearchBar.css";
import axios from "axios";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = e => {
    e.preventDefault();
    this.props.onInputChange(e.target.value);
  };

  handleSearch = e => {
    e.preventDefault();
    let query = `https://api.spoonacular.com/recipes/search?apiKey=37848c0493014265a07a58b40b9dc855&query=${this.props.s}&number=10`;
    axios(query)
      .then(({ data }) => {
        let results = data.results;
        this.props.onSearch(results);
      })
      .catch(err => {
        alert("Something wrong with search function!");
      });
  };

  render() {
    return (
      <div className="search">
        <div className="search__bar">
          <form className="search__input" onSubmit={this.handleSearch}>
            <input
              type="text"
              className="search__field"
              placeholder="Search over 1,000,000 recipes..."
              onChange={this.handleInput}
            />
          </form>
          <Button className="search__btn h-100 " variant="success">
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
