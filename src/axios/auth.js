import axios from 'axios';
// import {AUTH_API} from './settings';


const instance = axios.create({
  baseURL: 'https://kyl-dev-env.znsa4ikfcc.us-east-1.elasticbeanstalk.com/'
  // baseURL: 'http://127.0.0.1:8000'
  // baseURL: '/'
});


export default instance;