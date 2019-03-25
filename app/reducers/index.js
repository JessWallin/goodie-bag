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
const ADD_CANDY = 'ADD_CANDY';

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

export const moreCandy = more => ({
  type: MORE_CANDY,
  more,
});

export const lessCandy = less => ({
  type: LESS_CANDY,
  less,
});

export const addMoreCandy = candy => {
  const newQuantity = candy.quantity + 1;
  return async dispatch => {
    await Axios.put(`api/candy/${candy.id}`, { quantity: newQuantity });
    dispatch(moreCandy(newQuantity));
  };
};

export const takeLessCandy = candy => {
  const newQuantity = candy.quantity - 1;
  return async dispatch => {
    await Axios.put(`api/candy/${candy.id}`, { quantity: newQuantity });
    dispatch(lessCandy(newQuantity));
  };
};

export const addCandy = candy => ({
  type: ADD_CANDY,
  candy,
});

export const addNewCandy = candy => {
  return async dispatch => {
    const newCandy = await Axios.post('/api/candy', candy);
    dispatch(addCandy(candy));
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES: {
      return { ...state, candies: action.candies, loading: false };
    }
    case GOT_SINGLE_CANDY: {
      return { ...state, selectedCandy: action.candy };
    }
    case MORE_CANDY: {
      return {
        ...state,
        selectedCandy: {
          ...state.selectedCandy,
          quantity: +action.more,
        },
      };
    }
    case LESS_CANDY: {
      return {
        ...state,
        selectedCandy: {
          ...state.selectedCandy,
          quantity: +action.less,
        },
      };
    }
    case ADD_CANDY: {
      return {
        ...state,
        candies: [...state.candies, action.candy],
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
