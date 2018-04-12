import React, { Fragment } from 'react';

import Text, { Span } from '../Common/Text/Text';

const ButPage = () => (
  <Fragment>
    <Text large>&lt;<Span primary>However</Span>/&gt;</Text>
    <br/>
    <Text className="fragment">
      What makes canvas <Span primary>difficult</Span> is what
      makes the possibilities <Span primary>endless</Span>.
    </Text>
  </Fragment>
);

export default ButPage;
