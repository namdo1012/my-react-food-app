import React from "react";
import "./OrderOnlineTask.css";

class OrderOnlineTask extends React.Component {
  render() {
    return (
      <div className="order__task">
        <div className={"order__tab search__tab order__tab--active"}>
          Search for recipe
        </div>
        <div className="order__tab favorite__tab">My Favorite</div>
        <div className="order__tab menu__tab">My Menu</div>
      </div>
    );
  }
}

export default OrderOnlineTask;
