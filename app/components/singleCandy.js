import React from 'react';
import { getSingleCandy } from '../reducers/index';
import { connect } from 'react-redux';

class SingleCandy extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('id :', id);
    console.log('props:', this.props);
    this.props.getSingleCandy(id);
  }

  render() {
    if (!this.props.selectedCandy) {
      return <p> L - O - A - D - I - N - G </p>;
    } else {
      return (
        <div>
          <img className="candyImage" src={this.props.selectedCandy.imageUrl} />
          <h1>{this.props.selectedCandy.name}</h1>
          <h4>{this.props.selectedCandy.description}</h4>
          <p>Quantity: {this.props.selectedCandy.quantity} </p>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  getSingleCandy: function(id) {
    console.log('getSingleCandy');
    dispatch(getSingleCandy(id));
  },
});

const mapStateToProps = state => ({
  selectedCandy: state.selectedCandy,
  candies: state.candies,
  loading: state.loading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
