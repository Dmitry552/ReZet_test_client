import {$authHost} from '../http';
import {setCard, clearCard} from '../reducers/cardReducer';

export const loadBasket = () => {
  return async  dispatch => {
    try {
      const {data} = await $authHost.get('api/basket');
      dispatch(setCard(data));
    } catch (error) {
      console.log(error)
    }
    
  }
}

export const uploadBasket = (id, quantity) => {
  return async dispatch => {
    try {
      if(typeof(quantity) != 'string' && typeof(quantity) != 'number') {
        alert(`Некоректное значение поля " ${quantity} "!`)
        quantity = 1;
      }
      const {data} = await $authHost.post('api/basket/update', {
        productId: id,
        quantity
      });
      dispatch(setCard(data));
    } catch (error) {
      console.log(error)
    }
  }
}

export const addProductToCart = (id) => {
  return async dispatch => {
    try {
      const {data} = await $authHost.post('api/basket', {
        productId: id
      });
      dispatch(setCard(data));
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeProductToCart = (id) => {
  return async dispatch => {
    try {
      const {data} = await $authHost.delete(`api/basket?productId=${id}`);
      dispatch(setCard(data));
    } catch (error) {
      console.log(error)
    }
  }
}

export const clearBasket = () => {
  return async dispatch => {
    try {
      const {data} = await $authHost.delete(`api/basket/clear`);
      dispatch(setCard(data));
      dispatch(clearCard());
    } catch (error) {
      console.log(error)
    }
  }
}

export const ordering = (firstname, email, address, cardnumber, expyear) => {
  return async dispatch => {
    try {
      const response = await $authHost.post(`api/ordering`, {firstname, email, address, cardnumber, expyear});
      if(response.statusText) alert('Заказ успешно обработан. Проверти почту указаную в форме!')
      dispatch(clearCard());
    } catch (error) {
      console.log(error)
    }
  }
  
}