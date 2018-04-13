import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text large mono>&lt;Sketchly/&gt;</Text>
    <Text large><span role="img" aria-label="sketchly">🖌</span></Text>
    <Text className="fragment">
      <Span strong>Canvasness ➡&nbsp;</Span>
      <Span primary>50%</Span>
    </Text>
    <Text className="fragment">
      <Span strong>Interaction ➡&nbsp;</Span>
      <Span primary>drawing</Span>
    </Text>
    <Text className="fragment">
      <Span strong>Pointlessness ➡&nbsp;</Span>
      <Span primary>3/10</Span>
    </Text>
  </Fragment>
);
