import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import LikeContext from "../../contexts/LikeContext/LikeContext";
import UserContext from "../../contexts/UserContext";

class Navigation extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" class="navbar-brand">
          Foodo
        </Link>

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

          <UserContext.Consumer>
            {({ isLogin, toLogout }) => {
              return isLogin ? (
                <LikeContext.Consumer>
                  {context => {
                    return (
                      <React.Fragment>
                        <Link to="/order" class="nav-link">
                          Favorite({context.likes.length})
                        </Link>
                        <button
                          type="button"
                          class="btn btn-outline-secondary  button-signin"
                          onClick={toLogout}
                        >
                          <Link to="/signin"> Sign Out</Link>
                        </button>
                      </React.Fragment>
                    );
                  }}
                </LikeContext.Consumer>
              ) : (
                <div class="navbar-nav mr-0">
                  <button
                    type="button"
                    class="btn btn-outline-secondary  button-signin"
                  >
                    <Link to="/signin"> Sign In</Link>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary button-register"
                  >
                    <Link to="/signup"> Register</Link>
                  </button>
                </div>
              );
            }}
          </UserContext.Consumer>
        </div>
      </nav>
    );
  }
}
export default Navigation;
