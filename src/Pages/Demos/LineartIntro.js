import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text large mono>&lt;Lineart/&gt;</Text>
    <Text large><span role="img" aria-label="lineart">⚫</span></Text>
    <Text className="fragment">
      <Span strong>Canvasness ➡&nbsp;</Span>
      <Span primary>100%</Span>
    </Text>
    <Text className="fragment">
      <Span strong>Interaction ➡&nbsp;</Span>
      <Span primary>clicking</Span>
    </Text>
    <Text className="fragment">
      <Span strong>Pointlessness ➡&nbsp;</Span>
      <Span primary>10/10</Span>
    </Text>
  </Fragment>
);
