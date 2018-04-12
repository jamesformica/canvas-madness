import React, { Fragment } from 'react';

import Text, { Span } from '../Common/Text/Text';

const Reason1Page = () => (
  <Fragment>
    <Text mono>&lt;One/&gt;</Text>
    <br/>
    <Text>Things don't behave the way</Text>
    <Text>you <Span primary>expect</Span> them to...</Text>
  </Fragment>
);

export default Reason1Page;
