import React from "react";
import LikeContext from "./LikeContext";

class LikeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [1, 2, 3]
    };
  }

  addLike = id => {
    this.setState((state, props) => {
      const likes = state.likes.concat(state.likes.length + 1);
      return {
        likes
      };
    });
  };

  deleteLike = id => {
    this.setState(state => {
      const item = state.likes.length;
      const likes = state.likes.filter(val => val !== item);
      return {
        likes
      };
    });
  };

  render() {
    return (
      <LikeContext.Provider
        value={{
          likes: this.state.likes,
          addLike: this.addLike,
          deleteLike: this.deleteLike
        }}
      >
        {this.props.children}
      </LikeContext.Provider>
    );
  }
}

export default LikeProvider;
