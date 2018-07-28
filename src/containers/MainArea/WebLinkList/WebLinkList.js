import React, { Component } from 'react';
import disableScroll from 'disable-scroll';
import { SizeMe } from 'react-sizeme'

// classes
import classes from './WebLinkList.css';

// containers
import SuperWebLinkList from './SuperWebLinkList/SuperWebLinkList';

class WebLinkList extends Component {
  render() {
    this.props.isNotScrolable ?
      disableScroll.on(document.getElementById('WebLinkList'))
      :
      disableScroll.off(document.getElementById('WebLinkList'));
    return (
      <div id="WebLinkList" className={classes.WebLinkList}>
        <SizeMe>
          {({ size }) => <SuperWebLinkList widthSize={size.width} />}
        </SizeMe>
      </div>
    );
  }
}

export default WebLinkList;