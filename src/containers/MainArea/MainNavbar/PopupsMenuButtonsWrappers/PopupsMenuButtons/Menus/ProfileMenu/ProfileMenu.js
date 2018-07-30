import React, {Component} from 'react';
import classes from './ProfileMenu.css';
import PhotoButton from './PhotoButton';
import * as actions from "../../../../../../../store/actions";
import connect from "react-redux/es/connect/connect";
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';

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

  render() {

    const defaultCodeSnippet = (
      <div className={classes.MainWrapper}>

        <div className={classes.AvatarWrapper}>
          <div className={classes.AvatarPhoto}>
            <img  src={this.props.photo_url}  alt='avatar'/>
          </div>
          <div className={classes.Avatar}>
            <PhotoButton />
          </div>
        </div>

        <Formsy
          className={classes.MainInformation}
          onSubmit={this.onChangeProfileSubmit}
          // onInvalid={this.onInvalid}
          // onValid={this.onValid}
        >

          <div className={classes.ItemWrapper}>
            <Input
              name="email"
              type="email"
              validations="isEmail"
              // maxLength={20}
              placeholder="Enter email"
              value={this.props.email}
            />
          </div>

          <div className={classes.ItemWrapper}>
            <Input
              name="userName"
              type="text"
              validations="maxLength:19"
              maxLength={20}
              placeholder="Enter username"
              value={this.props.username}
            />
          </div>

          <div className={classes.ItemWrapper}>
            <Input
              name="firstname"
              type="text"
              validations="maxLength:19"
              maxLength={20}
              placeholder="Enter firstname"
              value={this.props.firstname}
            />
          </div>

          <div className={classes.ItemWrapper}>
            <Input
              name="lastname"
              type="text"
              validations="maxLength:19"
              maxLength={20}
              placeholder="Enter lastname"
              value={this.props.lastname}
            />
          </div>

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
          <div className={classes.SignOutButton} onClick={this.onSubmitSignOutHandler}>YES</div>
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

