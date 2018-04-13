import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono>&lt;However/&gt;</Text>
    <br/>
    <Text className="fragment">
      What makes canvas <Span primary>difficult</Span> is what
      makes the possibilities <Span primary>endless</Span>.
    </Text>
  </Fragment>
);
