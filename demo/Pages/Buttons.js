import React from 'react'

import {BoxButton, Banner} from '../../src'

const renderJsVar = (string) =>(
  <span className="js-var">{string}</span>
);

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

    <Banner className="bg-off-black">
      <code className="lang-js">

        <span className="js-keyword">import</span>
        <span> React</span>
        <span className="js-keyword"> from</span>
        <span className="js-string"> 'react'</span>
        <br/>


        <span className="js-keyword">import</span>
        <span>{` { BoxButton, Banner }`}</span>
        <span className="js-keyword"> from</span>
        <span className="js-string"> 'solid-components'</span>

        <br/>
        <br/>

        <span className="js-keyword">const</span>
        <span className="js-func"> Buttons</span>
        <span> =</span>
        <span className="js-brace"> (</span>
        <span className="js-arg">props</span>
        <span className="js-brace">)</span>
        <span> =></span>
        <span className="js-brace"> (</span>
        <br/>

        <span className="spaces">xx</span>
        <span className="js-jsx">{`<div>`}</span>
        <br/>
        <br/>

          <span className="spaces">xxxx</span>
          <span className="js-jsx">{`<Banner>`}</span>
          <br/>
          <br/>

            <span className="spaces">xxxxxx</span>
            <span className="js-jsx">{`<BoxButton`}</span>
            <br/>

              <span className="spaces">xxxxxxxx</span>
              <span className="js-arg">text</span>
              <span className="js-string">="Default"</span>
              <br/>

            <span className="spaces">xxxxxx</span>
            <span className="js-jsx">{`/>`}</span>
            <br/>
            <br/>

            <span className="spaces">xxxxxx</span>
            <span className="js-jsx">{`<BoxButton`}</span>
            <br/>

              <span className="spaces">xxxxxxxx</span>
              <span className="js-arg">text</span>
              <span className="js-string">="Primary"</span>
              <br/>
              <span className="spaces">xxxxxxxx</span>
              <span className="js-arg">className</span>
              <span className="js-string">="bg-primary"</span>
              <br/>

            <span className="spaces">xxxxxx</span>
            <span className="js-jsx">{`/>`}</span>
            <br/>
            <br/>


            <span className="spaces">xxxxxx</span>
            <span className="js-jsx">{`<BoxButton`}</span>
            <br/>

              <span className="spaces">xxxxxxxx</span>
              <span className="js-arg">text</span>
              <span className="js-string">="Custom Inline Style"</span>
              <br/>
              <span className="spaces">xxxxxxxx</span>
              <span className="js-arg">txtColor</span>
              <span className="js-string">="white"</span>
              <br/>
              <span className="spaces">xxxxxxxx</span>
              <span className="js-arg">bgColor</span>
              <span className="js-string">="#e85e54"</span>
              <br/>

            <span className="spaces">xxxxxx</span>
            <span className="js-jsx">{`/>`}</span>
            <br/>
            <br/>

          <span className="spaces">xxxx</span>
          <span className="js-jsx">{`</Banner>`}</span>
          <br/>
          <br/>

        <span className="spaces">xx</span>
        <span className="js-jsx">{`</div>`}</span>
        <br/>

        <span className="js-brace"> )</span>
        <span>;</span>

      </code>
    </Banner>



  </div>
);

export default Buttons
