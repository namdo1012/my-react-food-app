import React from "react";
import "./HomeMeals.css";
import { Link } from "react-router-dom";

function HomeMeals() {
  return (
    <section class="section-meals">
      <div class="meals__container row">
        <div class="meal__box col-3">
          <div class="img__box">
            <img
              class="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/1.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div class="meal__box col-3">
          <div class="img__box">
            <img
              class="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/2.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div class="meal__box col-3">
          <div class="img__box">
            <img
              class="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/3.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div class="meal__box col-3">
          <div class="img__box">
            <img
              class="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/4.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div class="meal__box col-3">
          <div class="img__box">
            <img
              class="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/5.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div class="meal__box col-3">
          <div class="img__box">
            <img
              class="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/6.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div class="meal__box col-3">
          <div class="img__box">
            <img
              class="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/7.jpg"}
              alt="img"
            />
          </div>
        </div>
        <div class="meal__box col-3">
          <div class="img__box">
            <img
              class="meal__img"
              src={process.env.PUBLIC_URL + "home-meals-img/8.jpg"}
              alt="img"
            />
          </div>
        </div>
      </div>

      <Link to="/signin">
        <button
          type="button"
          class="btn btn-outline-dark hero__button-item meal__button"
        >
          Sign In Now
        </button>
      </Link>
    </section>
  );
}

export default HomeMeals;
