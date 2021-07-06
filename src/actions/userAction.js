import {$host, $authHost} from '../http';
import {setUser, loginAuth} from '../reducers/userReducer';

export const registration = (email, password) => {
  return async () => {
    try {
      const response = await $host.post('api/user/registration', {
        email,
        password
      });
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export const login = (email, password) => {
  return async dispatch => {
    try {
      const {data} = await $host.post('api/user/login', {
        email,
        password
      });
      dispatch(setUser(data.user));
      localStorage.setItem('token', data.token)
    } catch (error) {
      alert(error)
    }
  }
}

export const auth = () => {
  return async dispatch => {
    try {
      const {data} = await $authHost.get('api/user/auth');
      dispatch(setUser(data.user));
      localStorage.setItem('token', data.token)
    } catch (error) {
      console.log(error)
      localStorage.removeItem('token');
    }
  }
}

export const loginAut = () => {
  return async dispatch => {
    try {
      dispatch(loginAuth());
    } catch (error) {
      console.log(error)
      localStorage.removeItem('token');
    }
  }
}