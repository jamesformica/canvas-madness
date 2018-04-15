import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono>&lt;Pros/&gt;</Text>
    <br />
    <Text className="fragment">
      Only limitation is your <Span primary>imagination</Span>
    </Text>
    <Text className="fragment">
      Take a <Span primary>vacation</Span> from normal development
    </Text>
    <Text className="fragment">
      You'll be the <Span primary>coolest for 5 minutes</Span> when showing your app off to people
    </Text>
  </Fragment>
);
