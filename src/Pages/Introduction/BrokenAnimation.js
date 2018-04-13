import React from 'react';

import CanvasSection from '../../Common/CanvasSection/CanvasSection';
import BrokenAnimation from '../../Animations/BrokenAnimation';

const id = "broken";

export default (props) => (
  <CanvasSection id={id} {...props}>
    <BrokenAnimation canvasId={id} />
  </CanvasSection>
);
