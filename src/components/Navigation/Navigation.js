import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Foodo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <Link to="/home" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/order" class="nav-link">
                Foodo Order
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/gallery" class="nav-link">
                Our Gallery
              </Link>
            </li>
          </ul>
          <div class="navbar-nav mr-0">
            <button
              type="button"
              class="btn btn-outline-secondary  button-signin"
            >
              Sign In
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary button-register"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigation;
