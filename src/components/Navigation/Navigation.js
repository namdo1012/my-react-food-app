import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import LikeContext from "../../contexts/LikeContext/LikeContext";
import UserContext from "../../contexts/UserContext";

import { DropdownButton, Dropdown } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar-brand">
          Foodo
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">
                Foodo Order
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">
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
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={`Favorite (${context.likes.length})`}
                          drop="left"
                          variant="success"
                        >
                          {/* Need to be a component */}
                          {context.likes.map((item, i) => {
                            return (
                              <Dropdown.Item
                                href={"#/action-" + { i }}
                                className="liked-item__box"
                              >
                                <>
                                  <div className="liked-item__img">
                                    <img
                                      src={`https://spoonacular.com/recipeImages/${item.image}`}
                                      alt="Test"
                                      className="liked-item__img--src"
                                    />
                                  </div>
                                  <div>{item.title}</div>
                                </>
                              </Dropdown.Item>
                            );
                          })}
                          {/* Need to be a component */}
                        </DropdownButton>
                        <button
                          type="button"
                          className="btn btn-outline-secondary  button-signin"
                          onClick={toLogout}
                        >
                          <Link to="/signin"> Sign Out</Link>
                        </button>
                      </React.Fragment>
                    );
                  }}
                </LikeContext.Consumer>
              ) : (
                <div className="navbar-nav mr-0">
                  <button
                    type="button"
                    className="btn btn-outline-secondary  button-signin"
                  >
                    <Link to="/signin"> Sign In</Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary button-register"
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
