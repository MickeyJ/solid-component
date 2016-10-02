import React from 'react'

import {BoxButton, Banner} from '../../src'

const Main = (props) => (
  <div>

    <Banner shadow={false}>
      <h1>Solid...</h1>
      <h3>A React Style Component Library - work in progress</h3>
    </Banner>

    <Banner className="bg-creme">
      <h4>Intentions</h4>
      <ul>
        <li>Inspired by <strong>Material Design</strong> concepts</li>
        <li> <strong>Unobtrusive</strong> and flexible</li>
        <li>Avoid <strong>inline style conflict</strong></li>
      </ul>
    </Banner>

  </div>
);

export default Main