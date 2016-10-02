'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var banner = function banner(props) {

  var hasShadow = props.shadow;
  var style = _extends({}, props.style);

  var classNames = props.className || '';

  if (hasShadow || hasShadow === undefined) classNames += ' shadow';

  return _react2.default.createElement(
    'div',
    { className: 'banner ' + classNames, style: style },
    props.children
  );
};

exports.default = banner;
module.exports = exports['default'];