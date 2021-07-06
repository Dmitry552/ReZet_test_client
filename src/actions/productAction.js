import {$host} from '../http';
import {setProduct} from '../reducers/productReducer';

export const set = () => {
  return async dispatch => {
    try {
      const {data} = await $host.get('api/product');
      dispatch(setProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}