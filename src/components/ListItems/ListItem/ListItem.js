import React, {Component} from 'react';

// classes
import classes from './ListItem.css';

// images


class ListItem extends Component {
  render() {

    return (
      <div className={classes.ListItem}>
        {this.props.circle}
        <div className={classes.ListItemControls}>
          {this.props.listNameBlock}
          {this.props.buttons}
        </div>
      </div>
    );
  };
}

export default ListItem;