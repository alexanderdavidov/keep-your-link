import React from 'react';

// classes
import classes from './ListHeader.css';

const listHeader = (props) => {
  return (
    <div className={classes.ListHeader}>
      {props.children}
    </div>
  );
};

export default listHeader;