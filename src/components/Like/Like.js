import React from "react";
import "./Like.css";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.likes.includes(5) ? true : false
    };
  }

  onLike = (itemID, isLiked) => {
    if (isLiked) {
      // Delete the liked item
      this.props.deleteLike(itemID);
    } else {
      // Add liked item
      this.props.addLike(itemID);
    }

    // Modefy like icon
    this.setState({
      isLiked: !this.state.isLiked
    });
  };

  render() {
    const { item } = this.props;
    const itemID = item.id; // ID of current item

    return (
      <div onClick={() => this.onLike(itemID, this.state.isLiked)}>
        <ion-icon
          name={!this.state.isLiked ? "heart-outline" : "heart"}
          class="like__icon"
        ></ion-icon>
      </div>
    );
  }
}

export default Like;
