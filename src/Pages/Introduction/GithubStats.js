import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text small>GitHub stats*:</Text>
    <Text className="fragment">
      Javascript repo&apos;s:&nbsp;
      <Span primary>5,207,443</Span>
    </Text>
    <Text className="fragment">
      &lt;canvas&gt; repo&apos;s:&nbsp;
      <Span primary>23,976</Span>
    </Text>
    <br />
    <Text large className="fragment">
      only:&nbsp;
      <Span primary>~0.5%</Span>
    </Text>
    <Text tiny className="fragment">
      *independent research. May not be 100% accurate. I dunno.
    </Text>
  </Fragment>
);
