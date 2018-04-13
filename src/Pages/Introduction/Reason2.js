import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono>&lt;Two/&gt;</Text>
    <br/>
    <Text>You have to keep track of and</Text>
    <Text>handle <Span primary>EVERYTHING</Span>.</Text>
  </Fragment>
);
