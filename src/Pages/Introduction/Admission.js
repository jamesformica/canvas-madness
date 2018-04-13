import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono>&lt;Soooo/&gt;</Text>
    <br />
    <Text>Making a canvas app is going to be a&nbsp;
      <Span primary>giant pain</Span> in the ass.
    </Text>
  </Fragment>
);
