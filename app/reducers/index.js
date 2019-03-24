import Axios from 'axios';

const initialState = {
  candies: [],
  selectedCandy: [],
  loading: true,
};

const GOT_CANDIES = 'GOT_CANDIES';
const GOT_SINGLE_CANDY = 'GOT_SINGLE_CANDY';
const MORE_CANDY = 'MORE_CANDY';
const LESS_CANDY = 'LESS_CANDY';

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

export const gotSingleCandy = candy => ({
  type: GOT_SINGLE_CANDY,
  candy,
});

export const getSingleCandy = id => {
  console.log('id to dispatch: ', id);
  return async dispatch => {
    const { data } = await Axios.get(`/api/candy/${id}`);
    console.log('candy', data);
    dispatch(gotSingleCandy(data));
  };
};

export const moreCandy = id => ({
  type: MORE_CANDY,
  id,
});

export const lessCandy = id => ({
  type: LESS_CANDY,
  id,
});

export const addMoreCandy = id => {
  return async dispatch => {
    await Axios.put(`api/candy${id}`, { quantity: 0 });
    dispatch(moreCandy(id));
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES: {
      return { ...state, candies: action.candies, loading: false };
    }
    case GOT_SINGLE_CANDY: {
      return { ...state, loading: false, selectedCandy: action.candy };
    }
    case MORE_CANDY: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default rootReducer;
