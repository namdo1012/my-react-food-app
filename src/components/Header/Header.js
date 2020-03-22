import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <section class="section-header">
        <Navigation />
        <div class="row hero">
          <p class="hero__title">Foodo</p>
          <p class="hero__subtitle">Food for life</p>
        </div>
        <div class="row hero__button">
          <div class="col-3"></div>
          <div class="col-6 hero__button-group">
            <button
              type="button"
              class="btn btn-outline-dark hero__button-item"
            >
              <Link to="/order" style={{ color: "white" }}>
                Foodo Order
              </Link>
            </button>
            <button
              type="button"
              class="btn btn-outline-dark hero__button-item"
            >
              <Link to="/gallery" style={{ color: "white" }}>
                Our Gallery
              </Link>
            </button>
          </div>
          <div class="col-3"></div>
        </div>
      </section>
    </>
  );
}

export default Header;
