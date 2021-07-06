const SET_USER = 'SET_USER';
const LOGINOUT = 'LOGINOUT';

const defaultStore = {
  user: {},
  isAuth: false
}

export const userReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true
      }
    case LOGINOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        user: {},
        isAuth: false
      }
  
    default:
      return state;
  }
}

export const setUser = user => ({type: SET_USER, payload: user});
export const loginAuth = () => ({type: LOGINOUT});