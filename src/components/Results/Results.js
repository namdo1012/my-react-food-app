import React from 'react';
import './Results.css';
import Result from './Result';

class Results extends React.Component {
	render(){
		const {results} = this.props;
		return(
			<React.Fragment>
				{
					results.map(result => {
						return (
							<Result 
								key={result.id} 
								result={result}
							/>
						)
					})
				};
            </React.Fragment>
		)
	}
}

export default Results;


          //   <Card className="card__results">
          //     <div className="card__img">
          //     <Card.Img className="" variant="top" src={test1} />
          //     </div>
          //     <Card.Body className="card__body d-inline-block">
          //       <Card.Title className="card__title">Pasta with Tomato ...</Card.Title>
          //       <Card.Text className="card__author"> 
          //         The Pioneer Woman
          //       </Card.Text>
          //     </Card.Body>
          // </Card>