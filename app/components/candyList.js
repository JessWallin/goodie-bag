import React from 'react';
import IndividualCandy from './individualCandy';
import { getCandies } from '../reducers/index';
import { connect } from 'react-redux';

class CandyList extends React.Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <h1>LOADING ...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1> Your Candies </h1>
          {this.props.candies.map(candy => (
            <IndividualCandy candy={candy} key={candy.id} />
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  candies: state.candies,
  loading: state.loading,
});
const mapDispatchToProps = dispatch => ({
  getCandies: function() {
    dispatch(getCandies());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandyList);
