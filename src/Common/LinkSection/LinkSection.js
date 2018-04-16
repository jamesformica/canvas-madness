import React, { Fragment } from 'react';

import { Span } from '../Text/Text';
import styles from './LinkSection.css';

export default ({ text, link }) => (
  <Fragment>
    <span aria-label="point" role="img">👉&nbsp;&nbsp;</span>
    Try&nbsp;
    <Span large>
      <a className={styles.link} href={link} target="_blank">{text}</a>
    </Span>
    &nbsp;here
    <span aria-label="point" role="img">&nbsp;&nbsp;👈</span>
  </Fragment>
);
