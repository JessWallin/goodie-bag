import Axios from 'axios';

const initialState = {
  candies: [],
  loading: true,
};

const GOT_CANDIES = 'GOT_CANDIES';

export const gotCandies = candies => ({
  type: GOT_CANDIES,
  candies,
});

export const getCandies = () => {
  return async dispatch => {
    const { data } = await Axios.get('/api/candy');
    dispatch(gotCandies(data));
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES: {
      return { ...state, candies: action.candies, loading: false };
    }
    default:
      return state;
  }
};

export default rootReducer;
