import React from 'react';

import CanvasSection from '../../Common/CanvasSection/CanvasSection';
import FixedAnimation from '../../Animations/FixedAnimation';

const id = "fixedCanvas";

export default (props) => (
  <CanvasSection id={id} {...props}>
    <FixedAnimation canvasId={id} />
  </CanvasSection>
);
