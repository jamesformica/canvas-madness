import React, { Fragment } from 'react';

import Text, { Span } from '../Common/Text/Text';

const IntroPage = () => (
  <Fragment>
    <Text large>
      <Span mono>
        &lt;
        <Span primary>Canvas</Span>
        /&gt;
      </Span>
      &nbsp;Madness</Text>
  </Fragment>
);

export default IntroPage;
