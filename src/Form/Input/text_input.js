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
    const { input, meta } = this.props;
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
              <div>
                <input
                  {...input}
                  id={this.props.id}
                  className={`text-input ${classNames}`}
                  type={this.props.type || "text"}
                  onFocus={() => this.handleFocus()}
                  onBlur={()=> this.handleBlur()}
                  onChange={(e) => input.onChange(e.target.value)}
                  ref={(ref) => this.getInput(ref)}
                />
                {meta.touched && meta.error  && <p className="input-error">{meta.error}</p>}
              </div>
            )
            :(
              <div>
                <input
                  id={this.props.id}
                  className={`text-input ${classNames}`}
                  type={this.props.type || "text"}
                  onFocus={() => this.handleFocus()}
                  onBlur={()=> this.handleBlur()}
                  onChange={(e) => this.props.onChange(this.input, e)}
                  ref={(ref) => this.getInput(ref)}
                />
                {this.props.errorText ? <p className="input-error">{this.props.errorText}</p> : ''}
              </div>
            )
        }
      </div>
    )
  }
}
