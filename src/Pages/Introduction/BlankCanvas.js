import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text>
      You are <Span className="fragment" primary>literally</Span> starting with a blank canvas!
    </Text>
    <br />
    <Text className="fragment" large>
     <span role="img" aria-label="wink">😉</span>
    </Text>
  </Fragment>
);
