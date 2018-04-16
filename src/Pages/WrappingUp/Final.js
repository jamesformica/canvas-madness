import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono large>&lt;<Span primary>Thank you</Span>/&gt;</Text>
    <br />
    <Text mono>@jamesralphjr</Text>
    <Text mono>jamesformica.github.io</Text>
  </Fragment>
);
