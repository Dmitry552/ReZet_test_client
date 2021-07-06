import { combineReducers } from "redux";

import {userReducer} from './userReducer';
import {productReducer} from './productReducer';
import {cardReducer} from './cardReducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  card: cardReducer
})

export default rootReducer;