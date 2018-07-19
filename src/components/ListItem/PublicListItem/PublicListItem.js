import React from 'react';

// classes
import classes from '../ListItem.css';

// images
import Edit from '../../../assets/images/listsImages/Edit.svg';
import Delete from '../../../assets/images/listsImages/Delete.svg';
import PeopleGroup from '../../../assets/images/listsImages/PeopleGroup.svg';
import Ok from '../../../assets/images/listsImages/Ok.svg';
import DeleteRed from '../../../assets/images/listsImages/DeleteRed.svg';

const publicListItem = (props) => {
  const editImage = <img key='editImage' className={classes.ListButton} src={Edit} alt="Edit" />;
  const peopleGroup = <img key='peopleGroup' className={classes.ListButton} src={PeopleGroup} alt="PeopleGroup" />;
  const deleteImage = <img key='deleteImage' className={classes.ListButton} src={Delete} alt="Delete" />;

  const ok = <img key='ok' className={classes.ListButton} src={Ok} alt="Ok" />;
  const deleteRed = <img key='deleteRed' className={classes.ListButton} src={DeleteRed} alt="DeleteRed" />;

  // let listItemStyles = [classes.ListItemDisplayInlineBlock];

  let buttons = [editImage, peopleGroup, deleteImage];
  if (props.isNew) {
    buttons = [ok, deleteRed];
  }

  return (
    <div>
      <div className={props.customStyle.join(' ')}>{props.children}</div>
      {buttons}
    </div>
  );
};

export default publicListItem;