'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    key: 'getInputRef',
    value: function getInputRef(ref) {
      this.input = ref;
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      if (!this.input.value) {
        this.setState({
          labelTop: '0',
          fontSize: '0.8rem'
        });
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
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

      var classNames = this.props.className || '';

      return _react2.default.createElement(
        'div',
        { className: 'input-container' },
        _react2.default.createElement(
          'label',
          {
            className: 'input-label',
            htmlFor: this.props.id,
            style: { top: this.state.labelTop, fontSize: this.state.fontSize }
          },
          this.props.label
        ),
        _react2.default.createElement('input', {
          id: this.props.id,
          className: 'text-input ' + classNames,
          type: this.props.type || "text",
          onFocus: function onFocus(e) {
            return _this2.handleFocus(e);
          },
          onBlur: function onBlur(e) {
            return _this2.handleBlur(e);
          },
          ref: function ref(_ref) {
            return _this2.getInputRef(_ref);
          }
        })
      );
    }
  }]);

  return textInput;
}(_react.Component);

exports.default = textInput;
module.exports = exports['default'];