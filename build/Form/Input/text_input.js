'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textInput = function textInput(props) {

  var classNames = props.className || '';

  return _react2.default.createElement(
    'div',
    { className: 'input-container' },
    _react2.default.createElement(
      'label',
      { className: 'input-label', htmlFor: props.id },
      props.label
    ),
    _react2.default.createElement('input', {
      id: props.id,
      className: 'text-input ' + classNames,
      type: props.type || "text"
    })
  );
};

exports.default = textInput;
module.exports = exports['default'];