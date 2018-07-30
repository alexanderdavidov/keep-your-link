import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

// components
import WelcomePage from './components/WelcomePage/WelcomePage';
import LogIn from './containers/Authorization/LogIn/LogIn';
import connect from "react-redux/es/connect/connect";
import * as actions from "./store/actions";
// import ResetPassword from './containers/Authorization/ResetPassword/ResetPassword';
import MainArea from './containers/MainArea/MainArea';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/welcome_page" component={WelcomePage} />
        <Redirect from="/" to="/welcome_page" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={MainArea} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthSuccess: ( token, userId ) => dispatch( actions.authSuccess( token, userId ) ),
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
