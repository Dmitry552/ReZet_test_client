import axios from 'axios';
import {URL_API} from './config';

const $host = axios.create({
  baseURL: URL_API
})

const $authHost = axios.create({
  baseURL: URL_API,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})

export {
  $host,
  $authHost
}