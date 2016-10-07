import React from 'react'

import {Banner} from '../../src'

import FormRedux from '../Components/FormRedux'
import FormCustom from '../Components/FormCustom'
import SelectForm from '../Components/SelectForm'

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

    <Banner>

      <p>Multi Select</p>

      <SelectForm />

    </Banner>

  </div>
);

export default Forms