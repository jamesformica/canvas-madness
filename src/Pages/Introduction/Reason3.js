import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono>&lt;Three/&gt;</Text>
    <br/>
    <Text>Some things are just plain</Text>
    <Text><Span primary>ridiculous</Span> and make no sense.</Text>
  </Fragment>
);
