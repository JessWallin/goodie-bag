import React from 'react';

const IndividualCandies = props => {
  return (
    <div>
      <img className="candyImage" src={props.candy.imageUrl} />
      <h2>{props.candy.name} </h2>
      <p>Current Quantity:{props.candy.quantity} </p>
    </div>
  );
};

export default IndividualCandies;
