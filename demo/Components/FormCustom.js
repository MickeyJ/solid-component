import React, { Component } from 'react'

import {BoxButton, Banner, Form, TextInput} from '../../src'

class FormCustom extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleFormSubmit(e){
    e.preventDefault();
    const {username, email, password} = this.state;

    if(username && email && password){
      alert(`
        Username: ${this.state.username}\n
        Email: ${this.state.email}\n
        Password: ${this.state.password}
      `)
    }

  }

  handleUsernameChange(value){
    this.setState({username: value});
  }

  handleEmailChange(value){
    this.setState({email: value});
  }

  handlePasswordChange(value){
    this.setState({password: value});
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
          onChange={this.handleUsernameChange.bind(this)}
        />

        <TextInput
          id="user-email"
          label="Email"
          onChange={this.handleEmailChange.bind(this)}
        />

        <TextInput
          id="user-password"
          label="Password"
          type="password"
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
