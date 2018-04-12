import React, { Fragment } from 'react';

import Text from '../Common/Text/Text';
import CodeSection from '../Common/CodeSection/CodeSection';

const BluryLineProblemPage = () => (
  <Fragment>
    <Text heavy>THE SOLUTION:</Text>
    <CodeSection>
      <pre>
        <code>
          {`
  context.translate(0.5, 0.5);

  // draw your 1px lines here

  context.translate(-0.5, -0.5);

`}
        </code>
      </pre>
    </CodeSection>
  </Fragment>
);

export default BluryLineProblemPage;
