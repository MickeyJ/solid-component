import React, { Component } from 'react'

import {Form, MultiSelect} from '../../src'

const demoOptions = [
  {value: '1', label: "Chips"},
  {value: '2', label: "Chocolate"},
  {value: '3', label: "Hot Dog"},
  {value: '4', label: "Pickle"},
  {value: "5", label: "Nachos"},
  {value: '6', label: "Fries"}
];

class SelectForm extends Component {
  handleSelectChange(selections){
    console.log(selections);
  }
  render(){
    return(
      <Form style={{maxWidth: 400}}>

        <MultiSelect
          options={demoOptions}
          defaultOptionLabel="Choose From Selection"
          onChange={this.handleSelectChange.bind(this)}
        />

      </Form>
    )
  }
}
export default SelectForm
