import React from 'react';

import CanvasSection from '../../Common/CanvasSection/CanvasSection';
import FixedClickHandler from '../../Animations/FixedClickHandler';

const id = "fixedClickHandler";

export default (props) => (
  <CanvasSection id={id} {...props}>
    <FixedClickHandler canvasId={id} />
  </CanvasSection>
);
