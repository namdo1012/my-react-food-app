import React from "react";
import Like from "../Like/Like";

class Result extends React.Component {
  render() {
    const { result } = this.props;
    let imgSrc = `https://spoonacular.com/recipeImages/${result.image}`;
    if (result.title.length > 40) return null;
    return (
      <>
        <a
          className="results__link d-flex align-items-center"
          href={`#${result.id}`}
        >
          <figure className="results__fig">
            <img src={imgSrc} alt="Test" />
          </figure>
          <div className="results__data">
            <h4 className="results__name">{result.title}</h4>
            <p className="results__cooking-time">
              Ready in minutes: {result.readyInMinutes}'
            </p>
          </div>

          <div className="result__btn">
            <div class="add-item__btn">
              <ion-icon name="add-circle-outline"></ion-icon>
            </div>
            <Like
              item={result}
              likes={this.props.likes}
              addLike={this.props.addLike}
              deleteLike={this.props.deleteLike}
            />
          </div>
        </a>
      </>
    );
  }
}

export default Result;
