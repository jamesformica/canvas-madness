import React, { Component } from 'react';
import values from 'lodash/values';

import * as importSlides from './Pages';

class Reveal extends Component {
  componentDidMount() {
    global.Reveal.initialize({
      dependencies: [
        { src: 'revealjs/markdown/marked.js' },
        { src: 'revealjs/markdown/markdown.js' },
        {
          src: 'revealjs/highlight/highlight.js',
          async: true,
          callback: () => global.hljs.initHighlightingOnLoad()
        }
      ]
    });
  }

  render() {
    return (
      <div className="reveal">
        <div className="slides">
          {values(importSlides).map((Slide, i) => (
            <section key={i}>
              <Slide index={i} />
            </section>
          ))}
        </div>
      </div>
    )
  }
}

export default Reveal;
