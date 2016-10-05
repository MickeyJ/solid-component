import React, {Component} from 'react'

class textInput extends Component{
  constructor(){
    super();
    this.state = {
      labelTop: '50%',
      fontSize: '1rem'
    }

  }

  getInputRef(ref){
    this.input = ref
  }

  handleFocus(e){
    if(!this.input.value){
      this.setState({
        labelTop: '0',
        fontSize: '0.8rem'
      })
    }
  }

  handleBlur(e){
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
    const classNames = this.props.className || '';

    return (
      <div className="input-container">
        <label
          className={`input-label`}
          htmlFor={this.props.id}
          style={{top: this.state.labelTop, fontSize: this.state.fontSize}}
        >
          {this.props.label}
        </label>
        <input
          id={this.props.id}
          className={`text-input ${classNames}`}
          type={this.props.type || "text"}
          onFocus={(e) => this.handleFocus(e)}
          onBlur={(e)=> this.handleBlur(e)}
          ref={(ref) => this.getInputRef(ref)}
        />
      </div>
    )
  }
}


export default textInput