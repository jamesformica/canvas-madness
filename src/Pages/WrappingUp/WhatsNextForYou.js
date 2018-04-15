import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono>&lt;What&apos;s/&gt; next for you?</Text>
    <br />
    <Text className="fragment">
      Build something that you once thought was
      <br />
      <Span large primary>impossible</Span>
    </Text>
  </Fragment>
);
