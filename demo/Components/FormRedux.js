import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import {BoxButton, Banner, Form, TextInput} from '../../src'

class FormRedux extends Component {

  handleFormSubmit(form){

    if(form.email && form.password){
      alert(`
        Email: ${form.email}\n
        Password: ${form.password}
      `)
    }

  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <Form
        style={{maxWidth: 350}}
        handleSubmit={handleSubmit(this.handleFormSubmit)}
      >

        <Field
          name="email"
          id="user-email"
          label="Email"
          component={TextInput}
        />

        <Field
          name="password"
          id="user-password"
          label="Password"
          type="password"
          component={TextInput}
        />

        <BoxButton
          text="Signin"
          type="submit"
        />

      </Form>
    )
  }
}

function validate(fields){
  const errors = {};
  const { email, password } = fields;

  if(!email){
    errors.email = 'Field Required*'
  }
  if(!password){
    errors.password = 'Field Required*'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'signin',
  fields: ['email', 'password'],
  initialValues: {
    email: '',
    password: ''
  }
}, null)(FormRedux);
