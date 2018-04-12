import React, { Fragment } from 'react';

import Text, { Span } from '../Common/Text/Text';

const BlankCanvasPage = () => (
  <Fragment>
    <Text>
      You are <Span className="fragment" primary>literally</Span> starting with a blank canvas!
    </Text>
    <br />
    <Text className="fragment">
     <Span role="img" large>😉</Span>
    </Text>
    <br/>
    <Text className="fragment">
      You can build <Span primary>anything</Span> you can imagine!
    </Text>
  </Fragment>
);

export default BlankCanvasPage;
