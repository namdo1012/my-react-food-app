import React from "react";
import LikeProvider from "../../contexts/LikeContext/LikeProvider";
import LikeContext from "../../contexts/LikeContext/LikeContext";

class LikedItem extends React.Component {
  render() {
    return (
      <LikeProvider>
        <LikeContext.Consumer>
          {context => <h3>{context.likes.length}</h3>}
        </LikeContext.Consumer>
      </LikeProvider>
    );
  }
}

export default LikedItem;
