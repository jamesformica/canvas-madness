import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';
import LinkSection from '../../Common/LinkSection/LinkSection';

export default () => (
  <Fragment>
    <Text small>Lineart</Text>
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
    <br />
    <Text className="fragment">
      <LinkSection text="lineart" link="https://jamesformica.github.io/lineart/" />
    </Text>
  </Fragment>
);
