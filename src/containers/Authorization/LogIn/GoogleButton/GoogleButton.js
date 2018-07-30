import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

import {AUTH_API} from '../../../../axios/settings';
import auth_api from '../../../../axios/auth';
import axios from 'axios';
// import axios from 'axios';

import connect from "react-redux/es/connect/connect";
// import {authSuccess} from "../../../../store/actions/auth";
import * as actions from '../../../../store/actions/index';


class GoogleButton extends Component {

  state = {
    photo: null
  }

  onRequest = () => {
    this.props.onAuthStart();
  }

  responseGoogle = (response) => {
    const data = {access_token: response.accessToken};
    console.log(response);

    auth_api.post(AUTH_API, data, {
    })
      .then(response => {

        let token = response.data.token;
        let user_pk = response.data.user.pk;
        localStorage.setItem('token', response.data.token);

        axios.get('v1/user/1/', {
          headers: {Authorization: `JWT ${token}`},
          mode: 'no-cors',
        })
          .then(response => {
            this.props.onAuthSuccess(token, user_pk);

            console.log(response);
            this.props.onProfileSet(
              response.data.profile.photo,
              response.data.email,
              response.data.username,
              response.data.profile.first_name,
              response.data.profile.last_name,
            );
          })
      })
      .catch(error => {
        console.log(error)
      });

  }

  render() {
    return (
      <div>
        <GoogleLogin
          onRequest={this.onRequest}
          clientId="82076420700-gha62k64tmtun8soutekkvforg74dbdd.apps.googleusercontent.com"
          buttonText="Login Google"
          // redirectUri='http://localhost:3000'
          // uxMode='redirect'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthSuccess: (token, userId) => dispatch(actions.authSuccess(token, userId)),
    onAuthStart: () => dispatch(actions.authStart()),
    onProfileSet: (photo_url, email, username, firstname, lastname) =>
      dispatch(actions.profileSet(photo_url, email, username, firstname, lastname)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleButton);

