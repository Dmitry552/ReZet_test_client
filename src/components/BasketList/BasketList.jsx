import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import './BasketList.scss';
import {uploadBasket, clearBasket, removeProductToCart} from '../../actions/cardAction';

import Card from '../Card/Card';

const BasketList = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const cardList = useSelector(state => state.card.cardList);
  const fullPrice = useSelector(state => state.card.fullPrice);
  const history = useHistory()
  const dispatch = useDispatch();

  const handlerQuantityProduct = (id, quantity ) => {
    dispatch(uploadBasket(id, quantity))
  }

  const handlerClearBasket = () => {
    dispatch(clearBasket())
  }

  const handlerRemoveProductToCart = (id) => {
    dispatch(removeProductToCart(id))
  }

  const handlerOrdering = () => {
    history.push('/shipping')
  }

  return(
    <section className="card">
      <div className="card__product" >
        {!isAuth && <h2>Вы не зарегестрированы!</h2>}
        {cardList.length !== 0 ? cardList.map(card => (
          <Card key={card._id} 
            {...card} 
            handlerQuantityProduct = {handlerQuantityProduct}
            handlerRemoveProductToCart = {handlerRemoveProductToCart}
          />
        )) : <h2>Корзина пуста</h2>}
      </div>
      <div className="card__order-info">
        <div className="card__order-info__full-price">
          <h2>Итоговая цена</h2>
          <p>{fullPrice} &#36;</p>
        </div>
        <div className="card__order-info__btn">
          <button type='button' onClick={() => handlerOrdering()} 
          disabled={cardList.length === 0 ? true : false} 
          >Оформить заказ</button>
          <button type='button'  onClick={() => handlerClearBasket()}> Очистить корзину </button>
        </div>
      </div>
    </section>
  )
}

export default BasketList;