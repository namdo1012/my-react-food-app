import React from "react";
import "./Quote.css";
import { Link } from "react-router-dom";

function Quote() {
  return (
    <section className="section-quote">
      <div className="row">
        <div className="col col-3" />
        <div className="col col-4 quote__box">
          <blockquote>
            "When you drink the water,{" "}
            <span className="quote__bold">remember the spring"</span>
            <br />
            <cite className="quote__author">Nam Do</cite>
          </blockquote>
        </div>
        <div className="col col-2 quote__button-box">
          <Link to="/gallery">
            <button
              type="button"
              className="btn btn-outline-dark hero__button-item quote-btn"
            >
              Visit Our Gallery
            </button>
          </Link>
        </div>
        <div className="col col-3" />
      </div>
    </section>
  );
}

export default Quote;
