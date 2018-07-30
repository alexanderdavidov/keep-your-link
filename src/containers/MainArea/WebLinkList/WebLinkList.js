import React, { Component } from 'react';
import noScroll from 'no-scroll';
import { SizeMe } from 'react-sizeme';

// classes
import classes from './WebLinkList.css';

// containers
import SuperWebLinkList from './SuperWebLinkList/SuperWebLinkList';

class WebLinkList extends Component {
  render() {
    return (
      <div id="WebLinkList" className={classes.WebLinkList}>
        <SizeMe>
          {({ size }) => <SuperWebLinkList widthSize={size.width} />}
        </SizeMe>
        {this.props.isNotScrolable ? noScroll.on() : noScroll.off()}
      </div>
    );
  }
}

export default WebLinkList;