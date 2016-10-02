'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navBar = function navBar(props) {
  var classNames = props.className || '';

  return _react2.default.createElement(
    'nav',
    { className: 'nav-bar ' + classNames },
    props.children.map(function (x, i) {
      return _react2.default.createElement(
        'span',
        { key: i },
        _react2.default.cloneElement(x, {
          activeLinkClass: props.activeLinkClass
        })
      );
    })
  );
};

exports.default = navBar;
module.exports = exports['default'];