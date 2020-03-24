import React from "react";
import "./Results.css";
import Result from "./Result";
import LikeProvider from "../../contexts/LikeContext/LikeProvider";
import LikeContext from "../../contexts/LikeContext/LikeContext";

class Results extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <LikeProvider>
        <LikeContext.Consumer>
          {context => {
            console.log(context.likes.length);
            return (
              <React.Fragment>
                {results.map(result => {
                  return (
                    <Result
                      key={result.id}
                      result={result}
                      likes={context.likes}
                      addLike={context.addLike}
                      deleteLike={context.deleteLike}
                    />
                  );
                })}
              </React.Fragment>
            );
          }}
        </LikeContext.Consumer>
      </LikeProvider>
    );
  }
}

export default Results;
