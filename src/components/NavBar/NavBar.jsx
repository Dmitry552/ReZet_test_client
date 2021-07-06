import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {registration, login, loginAut} from '../../actions/userAction';

import card from '../../image/Cart.svg';

import './NavBar.scss';


const NavBar = () => {
  const [width, setWidth] = useState(true);
  const [menuActive, setMenuActive] = useState(false)
  const isAuth = useSelector(state => state.user.isAuth);
  const cardList = useSelector(state => state.card.cardList);
  const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  const handleResize = () => {
    setWidth(document.documentElement.clientWidth > 850 ? true : false)
  }

  const handlerRedirectClick = () => {
    history.push('/card')
  }

  const handleClicOfBurger = (e) => {
    e.stopPropagation()
    menuActive ? setMenuActive(false) : setMenuActive(true)
  }

  return (
    <header className='header'>
      <div className="content__header">
        <div className="header__logo">
          <NavLink to ='/'> <p>ReZet test.</p></NavLink>
        </div>
        <div className="header__navbar">
            {!width ?
              <div className="card__icon" onClick={handlerRedirectClick}>
                <div className="card__icon__image">
                  <img src={card} alt="Корзина"/>
                </div>
                {cardList.length !== 0 ?
                  <div className="card__icon__icon">
                    <p>{cardList.length}</p>
                  </div>
                  : ''
                }
              </div> : ''
            }
          {width ?
          <div className="btn-block">
            {!isAuth && 
              <button type='button' 
                onClick={() => dispatch(registration('user@gmail.com', '12345'))}>
              Регистрация </button>}
            {!isAuth && 
              <button type='button' 
                onClick={() => dispatch(login('user@gmail.com', '12345'))}>
              Войти </button>}
            {isAuth && 
              <div className="card__icon" onClick={handlerRedirectClick}>
                <div className="card__icon__image">
                  <img src={card} alt="Корзина"/>
                </div>
                {cardList.length !== 0 ?
                  <div className="card__icon__icon">
                    <p>{cardList.length}</p>
                  </div>
                  : ''
                }
              </div>
            }
            {isAuth && 
              <button type='button' 
                onClick={() => dispatch(loginAut())}>
              Выйти </button>}
          </div>
          :
          <div className="header__burger" onClick={(e) => handleClicOfBurger(e)}>
            <span/>
          </div>
          }
        </div>
      </div>
      {menuActive ? 
        <div className="header__menu">
          <div className="conteiner__menu" onClick={handleClicOfBurger}>
            {!isAuth && 
              <button type='button' 
                onClick={() => dispatch(registration('user@gmail.com', '12345'))}>
              Регистрация </button>}
            {!isAuth && 
              <button type='button' 
                onClick={() => dispatch(login('user@gmail.com', '12345'))}>
              Войти </button>}
            {isAuth && 
              <button type='button' 
                onClick={() => dispatch(loginAut())}>
              Выйти </button>}
          </div>
        </div>
        : ''
      }
    </header>
  )
}

export default NavBar;