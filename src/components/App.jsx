import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {auth} from '../actions/userAction';

import './App.scss';

import NavBar from "./NavBar/NavBar";
import Catalog from "./Catalog/Catalog";
import BasketList from "./BasketList/BasketList";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  }, [])


  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className="wrap">
          {!isAuth ?
            <Switch>
              <Route path='/' component={Catalog} exact/>
              <Redirect to='/'/>
            </Switch>
            :
            <Switch>
              <Route path='/' component={Catalog} exact/>
              <Route path='/card' component={BasketList} exact/>
              <Route path='/shipping' component={CheckoutForm} exact/>
              <Redirect to='/'/>
            </Switch>
          }
        </div>
        
      </div> 
    </Router>
  );
}

export default App;
