import React from 'react'

import {BoxButton, Banner, Form, TextInput} from '../../src'

const Forms = (props) => (
  <div>
    <h3>Form Components</h3>

    <Banner >

      <h5>Login Form</h5>

      <Form
        style={{width: 350}}
        handleSubmit={(e) =>{
          e.preventDefault();
          console.log('form 1 submitted');
        }}>

        <TextInput
          id="user-name"
          label="Username"
        />

        <TextInput
          id="user-password"
          label="Password"
          type="password"
        />

        <BoxButton
          text="Submit"
          type="submit"
        />
      </Form>

    </Banner>

    <Banner className="bg-off-black">
      <p>Dark Banner Component</p>
      <Form
        style={{width: 350}}
        handleSubmit={(e) =>{
          e.preventDefault();
          console.log('form 2 submitted');
        }}>

        <TextInput
          id="user-name"
          label="Your Name"
        />

        <TextInput
          id="user-password"
          label="Your Password"
          type="password"
        />

        <BoxButton
          text="Submit"
          className="bg-secondary"
          type="submit"
        />
      </Form>
    </Banner>

  </div>
);

export default Forms