import React from 'react';

import CanvasSection from '../Common/CanvasSection/CanvasSection';
import BrokenClickHandler from '../Animations/BrokenClickHandler';

const id = "clickHandler";

const BrokenClickHandlerPage = (props) => (
  <CanvasSection id={id} {...props}>
    <BrokenClickHandler canvasId={id} />
  </CanvasSection>
);

export default BrokenClickHandlerPage;
