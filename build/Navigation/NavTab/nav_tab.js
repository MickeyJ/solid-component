'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navTab = function (_Component) {
  _inherits(navTab, _Component);

  function navTab() {
    _classCallCheck(this, navTab);

    return _possibleConstructorReturn(this, (navTab.__proto__ || Object.getPrototypeOf(navTab)).apply(this, arguments));
  }

  _createClass(navTab, [{
    key: 'render',
    value: function render() {

      var isActive = this.context.router.isActive(this.props.to, true),
          activeClass = isActive ? this.props.activeLinkClass : "";

      var classNameProp = (this.props.className || '') + ' ' + activeClass;

      var classNames = (classNameProp.indexOf('bg') > -1 ? classNameProp : 'bg-white ' + classNameProp).trim();

      var style = _extends({}, this.props.style, {
        background: this.props.bgColor || '',
        color: this.props.txtColor || ''
      });

      if (isActive) return _react2.default.createElement(
        _reactRouter.Link,
        { to: this.props.to, className: 'nav-tab ' + classNames, style: _extends({}, style, { cursor: 'default' }) },
        _react2.default.createElement('div', { className: 'active-darken' }),
        _react2.default.createElement(
          'span',
          { className: 'tab-text' },
          this.props.text
        )
      );else if (this.props.to) return _react2.default.createElement(
        _reactRouter.Link,
        { to: this.props.to, className: 'nav-tab hoverable ' + classNames, style: style },
        _react2.default.createElement('div', { className: 'active-darken' }),
        _react2.default.createElement('div', { className: 'hover-lighten' }),
        _react2.default.createElement(
          'span',
          { className: 'tab-text' },
          this.props.text
        )
      );else return _react2.default.createElement(
        'div',
        { className: 'nav-tab hoverable ' + classNames, style: style },
        _react2.default.createElement('div', { className: 'active-darken' }),
        _react2.default.createElement('div', { className: 'hover-lighten' }),
        _react2.default.createElement(
          'span',
          { className: 'tab-text' },
          this.props.text
        )
      );
    }
  }]);

  return navTab;
}(_react.Component);

navTab.contextTypes = {
  router: _react.PropTypes.object
};

exports.default = navTab;
module.exports = exports['default'];