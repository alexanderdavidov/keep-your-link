import React, { Component } from 'react';

// classes
import classes from './SuperWebLinkList.css';

// containers
import WebLinkBlock from './WebLinkBlock/WebLinkBlock';

// images
import TestImage1 from '../../../../assets/testImages/testImage.jpeg';
import Favicon1 from '../../../../assets/testImages/faviconMedium.ico';

import TestImage2 from '../../../../assets/testImages/littleGirl.jpeg';
import Favicon2 from '../../../../assets/testImages/apple-touch-icon-180x180.png';

import TestImage3 from '../../../../assets/testImages/tj_image.jpg';
import Favicon3 from '../../../../assets/testImages/favicon.ico';


class SuperWebLinkList extends Component {
  render() {

    return (
      <div className={classes.SuperWebLinkList}>
        <div style={{gridColumn: '1 / span 1', gridRow: '2 / span 1'}}>
          <WebLinkBlock
            title='Reversed Aging, Pig Organs, and the Future of Humankind'
            description=''
            domain='medium.com'
            favicon={Favicon1}
            image={TestImage1}/>
        </div>
        <div style={{gridColumn: '3 / span 1', gridRow: '2 / span 1'}}>
          <WebLinkBlock
            title='Why Are We So Certain About Our Mistakes?'
            description='One of the most painful parts of the writing profession is reviewing your own published work. It’s a bit like the uncomfortable experience of listening to your own voice being played back to you…'
            domain='medium.com'
            favicon={Favicon2}
            image={TestImage2}/>
        </div>
        <div style={{gridColumn: '5 / span 1', gridRow: '2 / span 1'}}>
          <WebLinkBlock
            title='Госсекретарь США подарит Ким Чен Ыну диск Элтона Джона...'
            description='Вместе с CD передадут ещё и письмо от Трампа.'
            domain='tjournal.ru'
            favicon={Favicon2}
            image={TestImage3}/>
        </div>

        <div style={{gridColumn: '1 / span 1', gridRow: '4 / span 1'}}>
          <WebLinkBlock
            title='Reversed Aging, Pig Organs, and the Future of Humankind'
            description=''
            domain='medium.com'
            favicon={Favicon1}
            image={TestImage1}/>
        </div>
        <div style={{gridColumn: '3 / span 1', gridRow: '4 / span 1'}}>
          <WebLinkBlock
            title='Why Are We So Certain About Our Mistakes?'
            description='One of the most painful parts of the writing profession is reviewing your own published work. It’s a bit like the uncomfortable experience of listening to your own voice being played back to you…'
            domain='medium.com'
            favicon={Favicon2}
            image={TestImage2}/>
        </div>
        <div style={{gridColumn: '5 / span 1', gridRow: '4 / span 1'}}>
          <WebLinkBlock
            title='Госсекретарь США подарит Ким Чен Ыну диск Элтона Джона...'
            description='Вместе с CD передадут ещё и письмо от Трампа.'
            domain='tjournal.ru'
            favicon={Favicon3}
            image={TestImage3}/>
        </div>

        <div style={{gridColumn: '1 / span 1', gridRow: '6 / span 1'}}>
          <WebLinkBlock
            title='Reversed Aging, Pig Organs, and the Future of Humankind'
            description=''
            domain='medium.com'
            favicon={Favicon1}
            image={TestImage1}/>
        </div>
        <div style={{gridColumn: '3 / span 1', gridRow: '6 / span 1'}}>
          <WebLinkBlock
            title='Why Are We So Certain About Our Mistakes?'
            description='One of the most painful parts of the writing profession is reviewing your own published work. It’s a bit like the uncomfortable experience of listening to your own voice being played back to you…'
            domain='medium.com'
            favicon={Favicon2}
            image={TestImage2}/>
        </div>
        <div style={{gridColumn: '5 / span 1', gridRow: '6 / span 1'}}>
          <WebLinkBlock
            title='Госсекретарь США подарит Ким Чен Ыну диск Элтона Джона...'
            description='Вместе с CD передадут ещё и письмо от Трампа.'
            domain='tjournal.ru'
            favicon={Favicon3}
            image={TestImage3}/>
        </div>

      </div>
    );
  }
}

export default SuperWebLinkList;