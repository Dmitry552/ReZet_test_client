const SET_PRODUCT = 'SET_PRODUCT';
// const ADD_PRODUCT = 'ADD_PRODUCT';
// const DELETE_PRODUCT = 'DELETE_PRODUCT';

const defaultStore = {
  product: []
}

export const productReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: [...action.payload]
      }
  
    default:
      return state;
  }
}

export const setProduct = product => ({type: SET_PRODUCT, payload: product});