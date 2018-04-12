import React from 'react'
import PropTypes from 'prop-types';

import styles from '../Window.css';
import codeStyles from './CodeSection.css';

const CodeSection = ({ dark, children }) => (
  <div className={styles.outerWrapper}>
    <div className={dark ? styles.wrapperDark : styles.wrapperLight}>
      <div className={styles.icons}>
        <i className={styles.red}></i>
        <i className={styles.yellow}></i>
        <i className={styles.green}></i>
      </div>

      <div className={codeStyles.wrapper}>
        {children}
      </div>
    </div>
  </div>
);

CodeSection.defaultProps = {
  dark: true
}

CodeSection.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
}

export default CodeSection;
