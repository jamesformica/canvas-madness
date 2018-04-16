import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';
import LinkSection from '../../Common/LinkSection/LinkSection';

export default () => (
  <Fragment>
    <Text small>Moodly</Text>
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
    <br />
    <Text className="fragment">
      <LinkSection text="moodly" link="https://jamesformica.github.io/moodly/" />
    </Text>
  </Fragment>
);
