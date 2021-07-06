import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Product from '../Product/Product';
import './Catalog.scss';

import {set} from '../../actions/productAction';
import { loadBasket, addProductToCart, removeProductToCart} from '../../actions/cardAction';

const Catalog = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const productList = useSelector(state => state.product.product);
  const cardList = useSelector(state => state.card.cardList);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(set());
    dispatch(loadBasket());
  }, [])

  const handlerAddProductToCart = (id) => {
    dispatch(addProductToCart(id))
  }

  const handlerRemoveProductToCart = (id) => {
    dispatch(removeProductToCart(id))
  }

  return(
    <section className="catalog">
      <div className="catalog__list">
        {productList.map(product => {
          return <Product key={product._id} 
            {...product} isAuth={isAuth}
            trueBasketProduct={cardList.find(card => card.product._id === product._id)}
            handlerAddProductToCart = {handlerAddProductToCart}
            handlerRemoveProductToCart = {handlerRemoveProductToCart}
            />
        })}
      </div>
    </section>
  )
}

export default Catalog;