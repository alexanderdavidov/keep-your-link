import React, { Component } from 'react';

// components
// import WelcomePage from './components/WelcomePage/WelcomePage';

// containers
// import SignUp from './containers/Authorization/SignUp/SignUp';
// import LogIn from './containers/Authorization/LogIn/LogIn';
// import ResetPassword from './containers/Authorization/ResetPassword/ResetPassword';
import MainArea from './containers/MainArea/MainArea';


class App extends Component {
  render() {
    return (
      <div>
        {/*<WelcomePage />*/}
        {/*<SignUp />*/}
        {/*<LogIn />*/}
        {/*<ResetPassword />*/}
        <MainArea />
      </div>
    );
  }
}

export default App;
