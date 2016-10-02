import React from 'react'

import {BoxButton, Banner} from '../../src'

const Buttons = (props) => (
  <div>

    <h4>BUTTONS / BANNERS / CONTAINERS</h4>

    <Banner>
      <p>Default Banner Component</p>

      <BoxButton
        text="Primary"
        className="bg-primary"
      />
      <BoxButton
        text="Default"
      />
    </Banner>


    <Banner className="bg-off-black" shadow={false}>
      <p>Dark Banner Component</p>

      <BoxButton
        text="Secondary"
        className="bg-secondary"
      />
      <BoxButton
        text="Custom Inline Style"
        txtColor="white"
        bgColor="#e85e54"
      />
    </Banner>


    <Banner className="bg-creme" shadow>
      <p>Creme Banner Component With Inset Shadow</p>

      <BoxButton
        text="Tertiary"
        className="bg-tertiary"
      />
      <BoxButton
        text="Custom Class Style"
        className="my-test-btn"
      />
    </Banner>


  </div>
);

export default Buttons