import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text large>James Formica</Text>
    <Text mono>UI &lt;<Span primary>Developer</Span>/&gt;</Text>
    <br/>
    <Text small>Lego, sloths, bananas, guitar, and... canvas</Text>
  </Fragment>
);
