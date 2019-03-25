import React from 'react';
import { Link } from 'react-router-dom';
import { singleCandy } from './singleCandy';

const IndividualCandies = props => {
  return (
    <div>
      <Link to={`/candies/${props.candy.id}`} component={singleCandy}>
        <img className="candyImage" src={props.candy.imageUrl} />
      </Link>
      <h2>{props.candy.name} </h2>
    </div>
  );
};

export default IndividualCandies;
