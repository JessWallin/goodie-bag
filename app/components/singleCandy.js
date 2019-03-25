import React from 'react';
import { getSingleCandy, addMoreCandy, takeLessCandy } from '../reducers/index';
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
        <div className="content">
          <img className="candyImage" src={this.props.selectedCandy.imageUrl} />
          <h1>{this.props.selectedCandy.name}</h1>
          <h4>{this.props.selectedCandy.description}</h4>
          <p>Quantity: {this.props.selectedCandy.quantity} </p>
          <button
            type="button"
            onClick={() => {
              if (this.props.selectedCandy.quantity === 10) {
                alert("You can't have more than 10 of each candy!");
              } else {
                this.props.getMoreCandy(this.props.selectedCandy);
              }
            }}
          >
            Add More!
          </button>
          <button
            type="button"
            onClick={() => {
              if (this.props.selectedCandy.quantity === 0) {
                alert("You can't have negative candy!");
              } else {
                this.props.takeLessCandy(this.props.selectedCandy);
              }
            }}
          >
            Take Less!
          </button>
        </div>
      );
    }
  }
}

// const thisCandy = this.props.selectedCandy;

const mapDispatchToProps = dispatch => ({
  getSingleCandy: function(id) {
    dispatch(getSingleCandy(id));
  },
  getMoreCandy: function(thisCandy) {
    dispatch(addMoreCandy(thisCandy));
  },
  takeLessCandy: function(thisCandy) {
    dispatch(takeLessCandy(thisCandy));
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
