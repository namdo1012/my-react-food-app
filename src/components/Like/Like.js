import React from "react";
import "./Like.css";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.likes = [492560];
    this.state = {
      liked: this.isLike(this.props.item.id)
      // likes: new Array([])
    };
    this.onLike = this.onLike.bind(this);
  }

  onLike = (isLiked, id) => {
    console.log(isLiked);

    if (isLiked) {
      // Delete liked item
      this.setState({ liked: !this.state.liked });
      this.likes.filter(el => el !== id);
    } else {
      // Add new liked item
      // this.setState(prevState => ({ likes: prevState.likes.push(id) }));
      this.setState({ liked: !this.state.liked });
      this.likes.push(id);
      console.log(this.likes);
    }
    // console.log("Likes state:", this);
  };

  isLike = id => {
    return this.likes.includes(id);
  };

  render() {
    const { item } = this.props;
    // console.log("This likes state:", this.likes);
    // console.log("This state:", this.state);
    console.log("Item:", item);
    // const isLiked = this.isLike(item.id);
    // console.log("isLiked, ", isLiked);
    // const liked = this.props.liked;
    return (
      <div
        class="like__icon"
        onClick={() => this.onLike(this.state.liked, item.id)}
      >
        <ion-icon
          name={!this.state.liked ? "heart-outline" : "heart"}
        ></ion-icon>
      </div>
    );
  }
}

export default Like;
