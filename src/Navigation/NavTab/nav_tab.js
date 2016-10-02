import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class navTab extends Component{
  render(){
    let isActive = this.context.router.isActive(this.props.to, true),
      activeClass = isActive ? this.props.activeLinkClass : "";

    const classStyle = `${(this.props.className || '')} ${activeClass}`;

    const classNames = (
      classStyle.indexOf('bg') > -1
        ? classStyle
        : 'bg-white '+ classStyle
    );

    const style = { ...this.props.style,
      background: this.props.bgColor || '',
      color: this.props.txtColor || ''
    };

    if(isActive) return (
        <Link to={this.props.to} className={`nav-tab ${classNames}`} style={{...style, cursor:'default'}}>
          <div className="active-darken"></div>
          <span className="tab-text">{this.props.text}</span>
        </Link>
    );

    else if(this.props.to) return (
      <Link to={this.props.to} className={`nav-tab hoverable ${classNames}`} style={style}>
        <div className="active-darken"></div>
        <div className="hover-lighten"></div>
        <span className="tab-text">{this.props.text}</span>
      </Link>
    );
    else return (
      <div className={`nav-tab hoverable ${classNames}`} style={style}>
        <div className="active-darken"></div>
        <div className="hover-lighten"></div>
        <span className="tab-text">{this.props.text}</span>
      </div>
    )
  }
}

navTab.contextTypes = {
  router: PropTypes.object
};

export default navTab