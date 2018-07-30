import axios from 'axios';

import interceptors from './interceptors'

const init = (store) => {
  interceptors(store);
  axios.defaults.baseURL = 'https://kyl-dev-env.znsa4ikfcc.us-east-1.elasticbeanstalk.com/';
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST,GET,PUT,DELETE';
  // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Lang';

}

export default init;