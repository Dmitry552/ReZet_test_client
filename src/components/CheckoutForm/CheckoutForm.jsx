import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

import {ordering} from '../../actions/cardAction';

import './CheckoutForm.scss';


const CheckoutForm = () => {
  const [globalValid, setGlobalValid] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch()

  const [firstname, setFirstname] = useState('');
  const [validFirstname, setValidFirstname] = useState(true);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(true);

  const [city, setCity] = useState('');

  const [cardnumber, setCardnumber] = useState('');
  const [validCardnumber, setValidCardnumber] = useState(true);

  const [expyear, setExpyear] = useState('');
  const [validExpyear, setValidExpyear] = useState(true);

  const validForm = () => {
    !firstname ? setValidFirstname(false) : setValidFirstname(true);
    !email ? setValidEmail(false) : setValidEmail(true);
    !address ? setValidAddress(false) : setValidAddress(true);
    !cardnumber ? setValidCardnumber(false) : setValidCardnumber(true);
    !expyear ? setValidExpyear(false) : setValidExpyear(true);
    if(!firstname || !email || !address || !cardnumber ||! expyear) {return false} else {return true}
  }

  const handlerForm = (e) => {
    e.preventDefault()
    if(validForm()) {
      setGlobalValid(false);
      dispatch(ordering(firstname, email, address, cardnumber, expyear));
      history.push('/');
    } else {
      setGlobalValid(true)
    }
  }

  return(
    <section className="form">
      <div className="container">
        <form onSubmit = {(e) => handlerForm(e)}>
          <h3>Платежные реквезиты</h3>

          <label htmlFor="fname"> Полное имя*</label>
          <input type="text" id="fname" name="firstname" placeholder="Пупкин Сергей Сергеевич" value={firstname}
            onChange={(e) => setFirstname(e.target.value)} style={{borderColor: `${validFirstname ? "#ccc" : "red"}`}} />

          <label htmlFor="email">Email* (Ведите реальный Email... На него отправится письмо с заказом!!!!)</label>
          <input type="text" id="email" name="email" placeholder="john@gmail.com" value={email}
            onChange={(e) => setEmail(e.target.value)} style={{borderColor: `${validEmail ? "#ccc" : "red"}`}}/>

          <label htmlFor="adr">Адресс*</label>
          <input type="text" id="adr" name="address" placeholder="г.Запорожье, ул. Степная, д.23" value={address}
            onChange={(e) => setAddress(e.target.value)} style={{borderColor: `${validAddress ? "#ccc" : "red"}`}}/>

          <label htmlFor="city">Город</label>
          <input type="text" id="city" name="city" placeholder="Киев" value={city}
            onChange={(e) => setCity(e.target.value)} />

          <h3>Оплата</h3>
          <label htmlFor="ccnum">Номер кредитной карты*</label>
          <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" value={cardnumber}
            onChange={(e) => setCardnumber(e.target.value)} style={{borderColor: `${validCardnumber ? "#ccc" : "red"}`}}/>

          <div className="row">
            <label htmlFor="expyear">Срок действия кредитной карты*</label>
            <input type="text" id="expyear" name="expyear" placeholder="2023" value={expyear}
              onChange={(e) => setExpyear(e.target.value)} style={{borderColor: `${validExpyear ? "#ccc" : "red"}`}}/>
          </div>
          <p>* - поля обязательные для заполнения!</p>
          {globalValid ? 
          <div className="alert__title">
            <h3>Все поля должны быть заполненны!</h3>
          </div>
          :
          ''
          }
          <input type="submit" value="Оформить заказ" className="btn"/>
        </form>
      </div>
    </section>
  )
}

export default CheckoutForm;