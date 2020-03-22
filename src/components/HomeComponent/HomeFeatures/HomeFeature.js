import React from "react";
import "./HomeFeature.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section class="section-feature">
      <div class="row section__title">
        <h2 class="section__title--main">How it work</h2>
        <p class="section__title--sub">
          Hello, we’re Omnifood, your new premium food delivery service.
        </p>
      </div>

      <div class="row features__container">
        <div class="col-4 feature__box">
          <ion-icon name="fast-food-outline" class="feature__icon"></ion-icon>
          <h3 class="feature__title">Choose Your Favorite Food</h3>
          <p class="feature__content">
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage.
          </p>
        </div>

        <div class="col-4 feature__box">
          <ion-icon name="stopwatch" class="feature__icon"></ion-icon>
          <h3 class="feature__title">Get Healthy Recipes Quickly</h3>
          <p class="feature__content">
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage.
          </p>
        </div>

        <div class="col-4 feature__box">
          <ion-icon name="nutrition" class="feature__icon"></ion-icon>
          <h3 class="feature__title">Order and Take Food Now</h3>
          <p class="feature__content">
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage.
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <Link to="/order">
          <button
            type="button"
            class="btn btn-outline-dark hero__button-item feature__btn"
          >
            Go order now!
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
