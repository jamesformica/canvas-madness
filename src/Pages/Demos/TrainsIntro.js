import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text large mono>&lt;Trains/&gt;</Text>
    <Text large><span role="img" aria-label="trains">🚂</span></Text>
    <Text className="fragment">
      <Span strong>Canvasness ➡&nbsp;</Span>
      <Span primary>95%</Span>
    </Text>
    <Text className="fragment">
      <Span strong>Interaction ➡&nbsp;</Span>
      <Span primary>drawing/clicking</Span>
    </Text>
    <Text className="fragment">
      <Span strong>Pointlessness ➡&nbsp;</Span>
      <Span primary>0/10</Span>
    </Text>
  </Fragment>
);
