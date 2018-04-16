import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';
import LinkSection from '../../Common/LinkSection/LinkSection';

export default () => (
  <Fragment>
    <Text small>Trains</Text>
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
    <br />
    <Text className="fragment">
      <LinkSection text="trains" link="https://jamesformica.github.io/trains/" />
    </Text>
  </Fragment>
);
