import React from "react";
import LikeContext from "./LikeContext";

class LikeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: []
    };
  }

  addLike = id => {
    this.setState((state, props) => {
      const likes = state.likes.concat(id);
      return {
        likes
      };
    });
  };

  deleteLike = id => {
    this.setState(state => {
      const likes = state.likes.filter(val => val !== id);
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
