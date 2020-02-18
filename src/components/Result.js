import React from 'react';

class Result extends React.Component {

	render() {
		const {result} = this.props;
		let imgSrc = `https://spoonacular.com/recipeImages/${result.image}`;		
		return (
            <a className="results__link d-flex align-items-center" href={`#${result.id}`}>
              <figure className="results__fig">
                <img src={imgSrc} alt="Test" />
              </figure>
              <div className="results__data">
                <h4 className="results__name">{result.title}</h4>
                <p className="results__cooking-time">Ready in minutes: {result.readyInMinutes}'</p>
              </div>
            </a>
		);
	}
}

export default Result;