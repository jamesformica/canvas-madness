import React, { Fragment } from 'react';

import Text, { Span } from '../Common/Text/Text';

const AdmissionPage = () => (
  <Fragment>
    <Text large>&lt;<Span primary>Soooo</Span>/&gt;</Text>
    <Text>Making a canvas app is going to be a&nbsp;
      <Span primary>giant pain</Span> in the ass.
    </Text>
  </Fragment>
);

export default AdmissionPage;
