import React from 'react';
import './Product.scss';

const Product = ({_id, title, price, trueBasketProduct, image, isAuth, handlerAddProductToCart, handlerRemoveProductToCart}) => {


  return(
    <div className="product">
      <div className="product__image">
        <img src={image} alt="Фото товара"/>
      </div>
      <div className="product__conteiner">
        <div className="conteiner__info">
          <h3>{title}</h3>
        </div>
        <div className="conteiner__price">
          <p>{price} &#36;</p>
        </div>
        <div className="conteiner__btn">
          {trueBasketProduct ? 
            <button 
              className={isAuth ? 'btn' : 'btn no-active'} 
              onClick={() => handlerRemoveProductToCart(_id)} 
              disabled={isAuth ? false : true} 
              type='button'>Убрать из корзины
            </button>
            :
            <button 
              className={isAuth ? 'btn' : 'btn no-active'} 
              onClick={() => handlerAddProductToCart(_id)} 
              disabled={isAuth ? false : true} 
              type='button'>Добавить в корзину
            </button>
          }
        </div>
      </div>
      
    </div>
  )
}

export default Product;