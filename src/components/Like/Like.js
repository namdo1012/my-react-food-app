import React from "react";
import "./Like.css";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.likes.includes(this.props.item) ? true : false
    };
  }

  onLike = (item, isLiked) => {
    if (isLiked) {
      // Delete the liked item
      this.props.deleteLike(item);
    } else {
      // Add liked item
      this.props.addLike(item);
    }

    // Modefy like icon
    this.setState({
      isLiked: !this.state.isLiked
    });
  };

  render() {
    const { item } = this.props;
    // const itemID = item.id; // ID of current item

    return (
      <div onClick={() => this.onLike(item, this.state.isLiked)}>
        <ion-icon
          name={!this.state.isLiked ? "heart-outline" : "heart"}
          class="like__icon"
        ></ion-icon>
      </div>
    );
  }
}

export default Like;
