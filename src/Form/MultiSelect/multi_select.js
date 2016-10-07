import React, { Component } from 'react'
import _ from 'underscore'

const demoOptions = [
  {value: '1', label: "Chips"},
  {value: '2', label: "Chocolate"},
  {value: '3', label: "Hot Dog"},
  {value: '4', label: "Pickle"},
  {value: "5", label: "Nachos"},
  {value: '6', label: "Fries"}
];

const Option = (props) =>(
  <option
    className="listed-option"
    disabled={props.disabled || false}
    value={props.value}
  >
    {props.label}
  </option>
);

const defaultOption = {value: -1, label: 'Please Select'};

class multiSelect extends Component {
  constructor(){
    super();
    this.state = {
      selections: [],
      options: demoOptions,
    }
  }

  componentWillMount(){
    if(this.props.options){
      this.setState({
        options: this.props.options
      })
    }
  }

  handleChange(){
    setTimeout(() =>{
      this.props.onChange(this.state.selections);
    }, 20);
  }

  handleAddSelection(e){
    this.setState({
      selections: [...this.state.selections,
        this.state.options.find(x => x.value === e.target.value)
      ],
      options: [...this.state.options.filter(x => x.value !== e.target.value)]
    });
    this.handleChange();
  }

  handleRemoveSelection(selection){
    this.setState({
      selections: [...this.state.selections.filter(x => x.value !== selection.value)],
      options: _.sortBy([...this.state.options, selection], 'value')
    });
    this.handleChange();
  }

  render(){
    const { defaultOptionLabel } = this.props;
    return(
      <div className="multi-select-container">
        <div className="selected-option-list">
          {this.state.selections.map((x, i) =>(
            <div className="selected-option hoverable" key={i} onClick={() => this.handleRemoveSelection(x)}>
              <span>{x.label}</span>
            </div>
          ))}
        </div>
        <select className="select-input" value={defaultOption.value} onChange={(e) => this.handleAddSelection(e)}>
          <Option
            disabled={true}
            value={defaultOption.value}
            label={defaultOptionLabel || defaultOption.label}
          />
          {this.state.options.map((x, i) =>(
            <Option
              key={i}
              value={x.value}
              label={x.label}
            />
          ))}
        </select>
      </div>
    )
  }
}

multiSelect.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  options: React.PropTypes.array.isRequired
};

export default multiSelect
