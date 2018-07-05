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
  const editImage = <img className={classes.ListButton} src={Edit} alt="Edit" />;
  const peopleGroup = <img className={classes.ListButton} src={PeopleGroup} alt="PeopleGroup" />;
  const deleteImage = <img className={classes.ListButton} src={Delete} alt="Delete" />;

  const ok = <img className={classes.ListButton} src={Ok} alt="Ok" />;
  const deleteRed = <img className={classes.ListButton} src={DeleteRed} alt="DeleteRed" />;

  let listItemStyles = [classes.ListItemDisplayInlineBlock];

   let circle;
  if (props.type === 'active') {
    listItemStyles.push(classes.ListItemActive);
  }
  else if (props.isNew) {
    listItemStyles.push(classes.ListItemNew);
  }


  let buttons = [editImage, peopleGroup, deleteImage];
  if (props.isNew) {
    buttons = [ok, deleteRed];
    circle = <div className={classes.CircleNew}></div>;
  } else if (props.type === 'active'){
    circle = <div className={classes.CircleActive}></div>;
  }

  return (
    <div className={classes.ListItem}>
      {circle}
      <div className={classes.ListItemControls}>
        <div className={listItemStyles.join(' ')}>{props.children}</div>
        {buttons}
      </div>
    </div>
  );
};

export default publicListItem;