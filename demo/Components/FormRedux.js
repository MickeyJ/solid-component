import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import {BoxButton, Banner, Form, TextInput} from '../../src'

class FormRedux extends Component {

  handleFormSubmit(form){
    console.log(form);
  }

  render(){
    const { handleSubmit, fields: {email, password} } = this.props;



    return(
      <Form
        style={{maxWidth: 350}}
        handleSubmit={handleSubmit(this.handleFormSubmit)}
      >

        <Field name="email" component={(props) =>{
          console.log(props);

          return (
            <TextInput
              {...props}
              id="user-email"
              label="Email"
            />
          )
        }}/>


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
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  initialValues: {
    email: '',
    password: ''
  }
}, null)(FormRedux);
