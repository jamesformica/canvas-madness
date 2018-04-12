import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from '../Window.css';
import canvasStyles from './CanvasSection.css';

class CanvasSection extends Component {
  constructor() {
    super();
    this.state = { ready: false }
    this.setReady = this.setReady.bind(this);
  }

  setReady(e) {
    if (e.indexh === this.props.index) {
      this.setState({ ready: true });
    } else if (this.state.ready) {
      this.setState({ ready: false });
    }
  }

  componentDidMount() {
    global.Reveal.addEventListener('slidechanged', this.setReady);
  }

  render() {
    const { dark, id, children } = this.props;
    return (
      <div className={styles.outerWrapper}>
        <div className={dark ? styles.wrapperDark : styles.wrapperLight}>
          <div className={styles.icons}>
            <i className={styles.red}></i>
            <i className={styles.yellow}></i>
            <i className={styles.green}></i>
          </div>

          <canvas className={canvasStyles.canvas} id={id}></canvas>
          {this.state.ready && children}
        </div>
      </div>
    )
  }
}

CanvasSection.defaultProps = {
  dark: true
}

CanvasSection.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
}

export default CanvasSection;
