'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var textInput = function (_Component) {
  _inherits(textInput, _Component);

  function textInput() {
    _classCallCheck(this, textInput);

    var _this = _possibleConstructorReturn(this, (textInput.__proto__ || Object.getPrototypeOf(textInput)).call(this));

    _this.state = {
      labelTop: '50%',
      fontSize: '1rem'
    };
    return _this;
  }

  _createClass(textInput, [{
    key: 'getInput',
    value: function getInput(ref) {
      this.input = ref;
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      if (!this.input.value) {
        this.setState({
          labelTop: '0',
          fontSize: '0.8rem'
        });
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      if (this.input.value) {
        return this.setState({
          labelTop: '0',
          fontSize: '0.8rem'
        });
      }
      this.setState({
        labelTop: '50%',
        fontSize: '1rem'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var input = _props.input;
      var meta = _props.meta;

      var classNames = this.props.className || '';

      return _react2.default.createElement(
        'div',
        { className: 'input-container' },
        _react2.default.createElement(
          'label',
          {
            className: 'input-label',
            htmlFor: this.props.id,
            style: { top: this.state.labelTop, fontSize: this.state.fontSize } },
          this.props.label
        ),
        input ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', _extends({}, input, {
            id: this.props.id,
            className: 'text-input ' + classNames,
            type: this.props.type || "text",
            onFocus: function onFocus() {
              return _this2.handleFocus();
            },
            onBlur: function onBlur() {
              return _this2.handleBlur();
            },
            onChange: function onChange(e) {
              return input.onChange(e.target.value);
            },
            ref: function ref(_ref) {
              return _this2.getInput(_ref);
            }
          })),
          meta.touched && meta.error && _react2.default.createElement(
            'p',
            { className: 'input-error' },
            meta.error
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            id: this.props.id,
            className: 'text-input ' + classNames,
            type: this.props.type || "text",
            onFocus: function onFocus() {
              return _this2.handleFocus();
            },
            onBlur: function onBlur() {
              return _this2.handleBlur();
            },
            onChange: function onChange(e) {
              return _this2.props.onChange(_this2.input, e);
            },
            ref: function ref(_ref2) {
              return _this2.getInput(_ref2);
            }
          }),
          this.props.errorText ? _react2.default.createElement(
            'p',
            { className: 'input-error' },
            this.props.errorText
          ) : ''
        )
      );
    }
  }]);

  return textInput;
}(_react.Component);

exports.default = textInput;
module.exports = exports['default'];