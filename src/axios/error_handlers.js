import * as actions from '../store/actions/index';

const handle_unauthorized = (store, error) => {
  store.dispatch(actions.authFail(error));
}


const handle_error = (store, error) => {
  switch (error.response.status) {
    case 401:
      handle_unauthorized(store, error);
      break;
    default:
      console.log('api request error:');
      console.log(error);
      break;
  }
}

export default handle_error;

