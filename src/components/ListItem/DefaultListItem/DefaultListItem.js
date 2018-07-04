import React from 'react';

// classes
import classes from '../ListItem.css';

const defaultListItem = (props) => {
  let style = props.type === 'active' ? {fontWeight: '400'} : null;

  return (
    <div style={style} className={classes.ListItem}>
      {props.children}
    </div>
  );
};

export default defaultListItem;