import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono>&lt;Cons/&gt;</Text>
    <br />
    <Text className="fragment">
      A lot of <Span primary>extra</Span> work required
    </Text>
    <Text className="fragment">
      A lot <Span primary>less</Span> information out there to help you
    </Text>
    <Text className="fragment">
      The <Span primary>judgemental stare</Span> of those around you
    </Text>
  </Fragment>
);
