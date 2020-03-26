import React from "react";
import "./HomeMeals.css";
import { Link } from "react-router-dom";

function HomeMeals() {
  return (
    <section className="section-meals">
      <div className="meals__container row">
        <div className="meal__box col-3">
          <div className="img__box">
            <img
              className="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/1.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div className="meal__box col-3">
          <div className="img__box">
            <img
              className="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/2.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div className="meal__box col-3">
          <div className="img__box">
            <img
              className="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/3.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div className="meal__box col-3">
          <div className="img__box">
            <img
              className="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/4.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div className="meal__box col-3">
          <div className="img__box">
            <img
              className="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/5.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div className="meal__box col-3">
          <div className="img__box">
            <img
              className="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/6.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div className="meal__box col-3">
          <div className="img__box">
            <img
              className="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/7.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div className="meal__box col-3">
          <div className="img__box">
            <img
              className="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/8.jpg"}
              alt="img"
            />
          </div>
        </div>
      </div>

      <Link to="/signin">
        <button
          type="button"
          className="btn btn-outline-dark hero__button-item meal__button app__btn--green"
        >
          Sign In Now
        </button>
      </Link>
    </section>
  );
}

export default HomeMeals;
