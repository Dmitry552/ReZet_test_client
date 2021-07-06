import React from 'react';
import './Card.scss';

const Card = ({product, quantity, _id, handlerQuantityProduct, handlerRemoveProductToCart}) => {

  

  return(
    <div className="card-product">
      <div className="card-product__img">
        <img src={product.image} alt="Фото товара"/>
      </div>
      <div className="product__conteiner">
        <div className="conteiner__info">
          <h3>{product.title}</h3>
        </div>
        <div className="conteiner__price">
          <p>{product.price} &#36;</p>
        </div>
        <div className="conteiner__btn">
          <button 
            className='btn' 
            onClick={() => handlerQuantityProduct(_id, quantity + 1)}
            type='button'>+
          </button>
          <input type='text' value={quantity} onChange={(e) => handlerQuantityProduct(_id, e.target.value)}/>
          <button type='button' 
            className='btn'
            onClick={() => handlerQuantityProduct(_id, quantity - 1)}>-
          </button>
        </div>
        <div className="conteiner__exit">
          <button type="button" className="btn-exit"
            onClick={() => handlerRemoveProductToCart(product._id)}
          >X</button>
        </div>
      </div>
      
    </div>
  )
}

export default Card;