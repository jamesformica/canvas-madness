import React, { Fragment } from 'react';

import Text, { Span } from '../../Common/Text/Text';

export default () => (
  <Fragment>
    <Text mono>&lt;What&apos;s/&gt; next for me?</Text>
    <br />
    <Text className="fragment">
      <Span primary>Llamas</Span> eating grass game&nbsp;
      <br/>
      🐐 + 🦒
    </Text>
    <Text className="fragment">
      Self drawn <Span primary>blobs</Span> battling each other kinda like a tamagotchi
      <br/>
      ⚔️
    </Text>
  </Fragment>
);
