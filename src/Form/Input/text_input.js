import React, {Component} from 'react'

export default class textInput extends Component{
  constructor(){
    super();
    this.state = {
      labelTop: '50%',
      fontSize: '1rem'
    }
  }

  getInput(ref){
    this.input = ref
  }

  handleFocus(){
    if(!this.input.value){
      this.setState({
        labelTop: '0',
        fontSize: '0.8rem'
      })
    }
  }

  handleBlur(){
    if(this.input.value){
      return this.setState({
        labelTop: '0',
        fontSize: '0.8rem'
      })
    }
    this.setState({
      labelTop: '50%',
      fontSize: '1rem'
    })
  }

  render(){
    const { input } = this.props;
    const classNames = this.props.className || '';

    return (
      <div className="input-container">
        <label
          className={`input-label`}
          htmlFor={this.props.id}
          style={{top: this.state.labelTop, fontSize: this.state.fontSize}}>
          {this.props.label}
        </label>
        {
          input
            ?(
              <input
                {...input}
                id={this.props.id}
                className={`text-input ${classNames}`}
                type={this.props.type || "text"}
                onFocus={() => this.handleFocus()}
                onBlur={()=> this.handleBlur()}
                onChange={() => input.onChange(this.input.value)}
                ref={(ref) => this.getInput(ref)}
              />
            )
            :(
              <input
                id={this.props.id}
                className={`text-input ${classNames}`}
                type={this.props.type || "text"}
                onFocus={() => this.handleFocus()}
                onBlur={()=> this.handleBlur()}
                onChange={(e) => this.props.onChange(this.input.value, e)}
                ref={(ref) => this.getInput(ref)}
              />
            )
        }
      </div>
    )
  }
}
