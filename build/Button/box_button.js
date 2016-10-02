'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boxButton = function boxButton(props) {

  var classNameProp = props.className || '';

  var classNames = (classNameProp.indexOf('bg') > -1 ? classNameProp : 'bg-white ' + classNameProp).trim();

  var style = _extends({}, props.style, {
    background: props.bgColor || '',
    color: props.txtColor || ''
  });

  return _react2.default.createElement(
    'button',
    {
      type: props.type || 'button',
      className: 'box-btn hoverable ' + classNames,
      style: style,
      onClick: props.onClick || null,
      onMouseDown: props.onMouseDown || null
    },
    _react2.default.createElement('div', { className: 'active-darken' }),
    _react2.default.createElement('div', { className: 'hover-lighten' }),
    _react2.default.createElement(
      'span',
      { className: 'btn-text' },
      props.text
    )
  );
};

exports.default = boxButton;
module.exports = exports['default'];