import axios from 'axios';
// import {AUTH_API} from './settings';


const backenApi = axios.create({
  baseURL: 'https://kyl-dev-env.znsa4ikfcc.us-east-1.elasticbeanstalk.com/'
  // baseURL: 'http://localhost:8000/'
  // baseURL: '/'
});


export default backenApi;