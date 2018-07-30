import axios from 'axios';

import error_handlers from './error_handlers'


const init = (store) => {
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  axios.interceptors.response.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    error_handlers(store, error);
    return Promise.reject(error);
  });
}

export default init;