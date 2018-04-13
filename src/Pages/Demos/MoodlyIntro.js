import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text large mono>&lt;Moodly/&gt;</Text>
    <Text large><span role="img" aria-label="moodly">🎶</span></Text>
    <Text className="fragment">
      <Span strong>Canvasness ➡&nbsp;</Span>
      <Span primary>100%</Span>
    </Text>
    <Text className="fragment">
      <Span strong>Interaction ➡&nbsp;</Span>
      <Span primary>voice</Span>
    </Text>
    <Text className="fragment">
      <Span strong>Pointlessness ➡&nbsp;</Span>
      <Span primary>6.5/10</Span>
    </Text>
  </Fragment>
);
