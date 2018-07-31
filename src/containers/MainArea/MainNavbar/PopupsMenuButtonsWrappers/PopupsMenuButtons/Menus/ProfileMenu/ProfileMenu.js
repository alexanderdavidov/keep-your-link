import React, {Component} from 'react';
import classes from './ProfileMenu.css';
import PhotoButton from './PhotoButton';
import * as actions from "../../../../../../../store/actions";
import connect from "react-redux/es/connect/connect";
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
import { SizeMe } from 'react-sizeme';

class ProfileMenu extends Component {
  state = {
    isSignOutButtonPressed: false,
  }

  onClickSignOutButtonHandler = () => {
    this.setState({
      isSignOutButtonPressed: true,
    });
  }

  onSubmitSignOutHandler = () => {
    this.props.onLogout();
  }

  onChangeProfileSubmit = (evt) => {
    console.log(evt);
  }

  onClickAvatarChangeHandler = () => {
    console.log('YO THIS IS CLICK');
  }

  render() {

    const defaultCodeSnippet = (
      <div className={classes.MainWrapper}>

        <div className={classes.AvatarWrapper}>
          <div className={classes.AvatarPhoto}>
            <img src={this.props.photo_url}  alt='avatar'/>
          </div>
          <div className={classes.Avatar}>
            <SizeMe>
              {({ size }) => <PhotoButton avatar={this.props.photo_url} widthSize={size.width} />}
            </SizeMe>
          </div>
        </div>
        <Formsy onSubmit={this.onChangeProfileSubmit} className={classes.MainInformation}>
          <Input
            autoComplete="off"
            name="email"
            type="email"
            validations="isEmail"
            validateOnSubmit={true}
            placeholder="Enter email"
            value={this.props.email}
          />
          <Input
            name="userName"
            type="text"
            validations="maxLength:19"
            maxLength={20}
            placeholder="Enter username"
            value={this.props.username}
          />
          <Input
            name="firstname"
            type="text"
            validations="maxLength:19"
            maxLength={20}
            placeholder="Enter firstname"
            value={this.props.firstname}
          />
          <Input
            name="lastname"
            type="text"
            validations="maxLength:19"
            maxLength={20}
            placeholder="Enter lastname"
            value={this.props.lastname}
          />

          <div className={classes.ButtonsWrapper}>
            <button type='submit' className={classes.SaveButton}>SAVE</button>
            <button className={classes.SignOutButton} onClick={this.onClickSignOutButtonHandler}>SIGN OUT</button>
          </div>

        </Formsy>

      </div>
    );

    const signOutMenuSnippet = (
      <div className={classes.SignOutWrapper}>
        <div className={classes.Title}>Do you want to sign out?</div>
        <div className={classes.ButtonsWrapper}>
          <button className={classes.SignOutButton} onClick={this.onSubmitSignOutHandler}>YES</button>
        </div>
      </div>
    );

    return (
      <div className={classes.ProfileMenu}>
        {!this.state.isSignOutButtonPressed ? defaultCodeSnippet : signOutMenuSnippet}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

const mapStateToProps = state => {
  return {
    photo_url: state.profile.photo_url,
    email: state.profile.email,
    username: state.profile.username,
    firstname: state.profile.firstname,
    lastname: state.profile.lastname,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);

