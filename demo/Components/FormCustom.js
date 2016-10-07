import React, { Component } from 'react'

import {BoxButton, Banner, Form, TextInput} from '../../src'

class FormCustom extends Component {
  constructor(){
    super();
    this.state = {
      submitAttempted: false,
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    }
  }

  handleFormSubmit(e){
    e.preventDefault();
    const {username, email, password} = this.state;

    if(username && email && password){

      this.setState({
        submitAttempted: true,
        usernameError: '',
        emailError: '',
        passwordError: ''
      });

      alert(`
        Username: ${this.state.username}\n
        Email: ${this.state.email}\n
        Password: ${this.state.password}
      `)

    } else {

      this.setState({
        submitAttempted: true,
        usernameError: username ? '' : 'Field Required*',
        emailError: email ? '' : 'Field Required*',
        passwordError: password ? '' : 'Field Required*'
      })

    }

  }

  handleUsernameChange(input){
    this.setState({username: input.value});
    if (this.state.submitAttempted && input.value) {
      this.setState({usernameError: ''})
    }
  }

  handleEmailChange(input){
    this.setState({email: input.value});
    if (this.state.submitAttempted && input.value) {
      this.setState({emailError: ''})
    }
  }

  handlePasswordChange(input) {
    this.setState({password: input.value});
    if (this.state.submitAttempted && input.value) {
      this.setState({passwordError: ''})
    }
  }

  render(){

    return(
      <Form
        style={{maxWidth: 350}}
        handleSubmit={(e) => this.handleFormSubmit(e)}
      >

        <TextInput
          id="user-name"
          label="Username"
          errorText={this.state.usernameError}
          onChange={this.handleUsernameChange.bind(this)}
        />

        <TextInput
          id="user-email"
          label="Email"
          errorText={this.state.emailError}
          onChange={this.handleEmailChange.bind(this)}
        />

        <TextInput
          id="user-password"
          label="Password"
          type="password"
          errorText={this.state.passwordError}
          onChange={this.handlePasswordChange.bind(this)}
        />

        <BoxButton
          text="Signup"
          className="bg-primary"
          type="submit"
        />

      </Form>
    )
  }
}

export default FormCustom
