import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <section className="section-header">
        <Navigation />
        <div className="row hero">
          <p className="hero__title">Foodo</p>
          <p className="hero__subtitle">Food for life</p>
        </div>
        <div className="row hero__button">
          <div className="col-3"></div>
          <div className="col-6 hero__button-group">
            <button
              type="button"
              className="btn btn-outline-dark hero__button-item"
            >
              <Link to="/order" style={{ color: "white" }}>
                Foodo Order
              </Link>
            </button>
            <button
              type="button"
              className="btn btn-outline-dark hero__button-item"
            >
              <Link to="/gallery" style={{ color: "white" }}>
                Our Gallery
              </Link>
            </button>
          </div>
          <div className="col-3"></div>
        </div>
      </section>
    </>
  );
}

export default Header;
