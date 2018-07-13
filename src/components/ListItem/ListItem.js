import React from 'react';

// classes
import classes from './ListItem.css';

import DefaultListItem from './DefaultListItem/DefaultListItem';
import PrivateListItem from './PrivateListItem/PrivateListItem';
import PublicListItem from './PublicListItem/PublicListItem';


const listItem = (props) => {
  let listItemStyles = [classes.ListItemDisplayInlineBlock];

  let circle;
  if (props.isNew) {
    circle = <div className={classes.CircleNew}></div>;
  }
  else if (props.type === 'active') {
    circle = <div className={classes.CircleActive}></div>;
  }

  if (props.type === 'active') {
    listItemStyles.push(classes.ListItemActive);
  }
  else if (props.isNew) {
    listItemStyles.push(classes.ListItemNew);
  }

  let listItem;
  switch (props.listItemType) {
    case 'default':
      listItem = <DefaultListItem customStyle={listItemStyles} type={props.type}>{props.children}</DefaultListItem>;
      break;
    case 'private':
      listItem = <PrivateListItem customStyle={listItemStyles} type={props.type}>{props.children}</PrivateListItem>;
      break;
    case 'public':
      listItem = <PublicListItem customStyle={listItemStyles} isNew={props.isNew} type={props.type}>{props.children}</PublicListItem>;
      break;
    default:
      listItem = <DefaultListItem customStyle={listItemStyles} type={props.type}>{props.children}</DefaultListItem>;
      break;
  }

  return (
    <div className={classes.ListItem}>
      {circle}
      <div className={classes.ListItemControls}>
        {listItem}
      </div>
    </div>
  );
};

export default listItem;