import * as actionTypes from "./actionTypes";

export const profileSet = (photo_url, email, username, firstname, lastname) => {
  return {
    type: actionTypes.PROFILE_SET,
    photo_url: photo_url,
    email: email,
    username: username,
    firstname: firstname,
    lastname: lastname,
  };
};