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
    if (JSON.stringify(this.state.likes) !== JSON.stringify(prevState.likes)) {
      // Get liked item from DB
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
          console.log(data);
          if (data.status === "success") {
            /*
            NOTE: When start to login to this app, 
            the email is undefined so it's also need 
            the command "if data.user !== null", 
            but it will toggle alert below --> NEED FIX!
             */
            console.log("Success getting liked items");
          } else {
            alert("Server have something wrong");
          }
        })
        .catch(err => console.log(err));
    }
  }

  addLike = item => {
    this.setState((state, props) => {
      const likes = state.likes.concat(item);
      return {
        likes
      };
    });
  };

  deleteLike = item => {
    this.setState(state => {
      const likes = state.likes.filter(val => val.id !== item.id);
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
