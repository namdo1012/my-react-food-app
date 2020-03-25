import React from "react";
import "./Cart.css";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart__box">
        <div className="cart__title">
          <div>My Cart</div>
          <div className="cart__quantity">(20 items)</div>
        </div>
        <div className="cart__list">
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1 x Our Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1xOur Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1xOur Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
          <div className="cart__item">
            <div className="cart__item--name">1xOur Poke</div>
            <div className="cart__item--price">13$</div>
          </div>
        </div>
        <div className="cart__total">
          <div className="cart__total--title">Total</div>
          <div className="cart__total--amount">96$</div>
        </div>

        <div className="cart__btn-box">
          <button
            type="button"
            class="btn btn-outline-dark cart__btn btn-success"
          >
            Order Now
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
