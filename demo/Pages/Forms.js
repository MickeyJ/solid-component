import React from 'react'

import {BoxButton, Banner, Form, TextInput} from '../../src'

import FormRedux from '../Components/FormRedux'
import FormCustom from '../Components/FormCustom'

const Forms = (props) => (
  <div>
    <h2>Form Components</h2>

    <Banner>

      <p>Form With Redux</p>

      <FormRedux />

    </Banner>

    <Banner className="bg-off-black" shadow={false}>

      <p>Form Without Redux</p>

      <FormCustom />

    </Banner>

  </div>
);

export default Forms