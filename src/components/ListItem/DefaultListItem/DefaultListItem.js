import React from 'react';

const defaultListItem = (props) => {
  return (
    <div>
      <div className={props.customStyle.join(' ')}>{props.children}</div>
    </div>
  );
};

export default defaultListItem;