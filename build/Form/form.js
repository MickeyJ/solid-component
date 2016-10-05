'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var form = function form(props) {

  var classNames = props.className || '';

  return _react2.default.createElement(
    'form',
    {
      autoComplete: 'off',
      className: 'form-container ' + classNames,
      style: props.style || {},
      onSubmit: function onSubmit(e) {
        return props.handleSubmit(e);
      }
    },
    props.children
  );
};
exports.default = form;
module.exports = exports['default'];