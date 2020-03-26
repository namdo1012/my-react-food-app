import React from "react";
import LikeContext from "./LikeContext";

class LikeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: []
    };
  }

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    // debugger;
    if (JSON.stringify(this.state.likes) !== JSON.stringify(prevState.likes)) {
      console.log("Fetching data!");
      console.log("Emai:", this.props.email);
      fetch("http://localhost:3000/updatelikes", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.props.email,
          likes: this.state.likes
        })
      })
        .then(response => response.json())
        .then(data => {
          // debugger;
          console.log(data);
          if (data.status === "success" && data.message.data.user !== null) {
            console.log(data);
          } else {
            alert("Server have something wrong");
          }
        })
        .catch(err => console.log(err));
    }
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

  getLiked = likedArr => {
    this.setState({
      likes: [].concat(likedArr)
    });
  };

  render() {
    return (
      <LikeContext.Provider
        value={{
          likes: this.state.likes,
          addLike: this.addLike,
          deleteLike: this.deleteLike,
          getLiked: this.getLiked
        }}
      >
        {this.props.children}
      </LikeContext.Provider>
    );
  }
}

export default LikeProvider;
