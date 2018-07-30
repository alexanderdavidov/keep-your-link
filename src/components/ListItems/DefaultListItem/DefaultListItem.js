import React from 'react';

import ListItem from '../ListItem/ListItem';

// classes
import classes from '../ListItem/ListItem.css';

const defaultListItem = (props) => {
  let circle;
  if (props.isActive) {
    circle = <div className={classes.CircleActive}></div>;
  }

  const listNameBlock = <div className={classes.ListItemDisplayInlineBlock}>{props.children}</div>;

  return (
    <div>
      <ListItem circle={circle} listNameBlock={listNameBlock}/>
    </div>
  );
};

export default defaultListItem;