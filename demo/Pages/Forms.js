import React from 'react'

import {BoxButton, Banner, Form, TextInput} from '../../src'

const Forms = (props) => (
  <div>
    <h2>Form Components</h2>

    <Banner>

      <p>Signin Form</p>

      <Form
        style={{maxWidth: 350}}
        handleSubmit={(e) => e.preventDefault()}
      >
        <TextInput
          id="user-email"
          label="Email"
        />

        <TextInput
          id="user-password"
          label="Password"
          type="password"
        />

        <BoxButton
          text="Signin"
          type="submit"
        />
      </Form>

    </Banner>

    <Banner className="bg-off-black" shadow={false}>

      <p>Signup In The Dark</p>

      <Form
        style={{maxWidth: 350}}
        handleSubmit={(e) => e.preventDefault()}
      >
        <TextInput
          id="user-name"
          label="Username"
        />

        <TextInput
          id="user-email"
          label="Email"
        />

        <TextInput
          id="user-password"
          label="Your Password"
          type="password"
        />

        <BoxButton
          text="Signup"
          className="bg-primary"
          type="submit"
        />
      </Form>
    </Banner>

  </div>
);

export default Forms