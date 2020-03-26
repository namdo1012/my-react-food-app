import React from "react";
import "./HomeFeature.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="section-feature">
      <div className="row section__title">
        <h2 className="section__title--main">How it work</h2>
        <p className="section__title--sub">
          Hello, we’re Omnifood, your new premium food delivery service.
        </p>
      </div>

      <div className="row features__container">
        <div className="col-4 feature__box">
          <ion-icon name="fast-food-outline" class="feature__icon"></ion-icon>
          <h3 className="feature__title">Choose Your Favorite Food</h3>
          <p className="feature__content">
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage.
          </p>
        </div>

        <div className="col-4 feature__box">
          <ion-icon name="stopwatch" class="feature__icon"></ion-icon>
          <h3 className="feature__title">Get Healthy Recipes Quickly</h3>
          <p className="feature__content">
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage.
          </p>
        </div>

        <div className="col-4 feature__box">
          <ion-icon name="nutrition" class="feature__icon"></ion-icon>
          <h3 className="feature__title">Order and Take Food Now</h3>
          <p className="feature__content">
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Link to="/order">
          <button
            type="button"
            className="btn btn-outline-dark hero__button-item feature__btn"
          >
            Go order now!
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
