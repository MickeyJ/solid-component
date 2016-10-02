import React from 'react'

import {BoxButton, Banner} from '../../build'

const Buttons = (props) => (
  <div>

    <h2>Buttons / Containers</h2>

    <Banner>

        <BoxButton
          text="Default"
          className="block-btn"
        />

        <BoxButton
          text="Primary"
          className="bg-primary block-btn"
        />

        <BoxButton
          text="Secondary"
          className="bg-secondary block-btn"
        />

        <BoxButton
          text="Tertiary"
          className="bg-tertiary block-btn"
        />

        <BoxButton
          text="Custom Inline Style"
          className="block-btn"
          txtColor="white"
          bgColor="#e85e54"
        />

        <BoxButton
          text="Custom Class Style"
          className="my-test-btn block-btn"
        />

    </Banner>

  </div>
);

export default Buttons