import React from 'react';

import CanvasSection from '../Common/CanvasSection/CanvasSection';
import FixedAnimation from '../Animations/FixedAnimation';

const id = "fixedCanvas";

const FixedAnimationPage = (props) => (
  <CanvasSection id={id} {...props}>
    <FixedAnimation canvasId={id} />
  </CanvasSection>
);

export default FixedAnimationPage;
