import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';
import LinkSection from '../../Common/LinkSection/LinkSection';

export default () => (
  <Fragment>
    <Text small>Sketchly</Text>
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
    <br />
    <Text className="fragment">
      <LinkSection text="sketchly" link="https://sketchly.netlify.com" />
    </Text>
  </Fragment>
);
