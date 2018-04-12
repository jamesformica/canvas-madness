import React, { Fragment } from 'react';

import Text, { Span } from '../Common/Text/Text';

const BluryLineProblemPage = () => (
  <Fragment>
    <Text heavy>THE PROBLEM:</Text>
    <br />
    <Text>
      <Span mono>1px</Span> lines don't look&nbsp;
      <Span primary>crisp</Span> on the canvas.
    </Text>
  </Fragment>
);

export default BluryLineProblemPage;
