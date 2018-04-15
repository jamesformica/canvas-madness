import React from 'react';

const IFrameSection = ({ url, title }) => (
  <iframe className="stretch" title={title} src={url}></iframe>
);

export default IFrameSection;
