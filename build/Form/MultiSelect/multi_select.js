'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var demoOptions = [{ value: '1', label: "Chips" }, { value: '2', label: "Chocolate" }, { value: '3', label: "Hot Dog" }, { value: '4', label: "Pickle" }, { value: "5", label: "Nachos" }, { value: '6', label: "Fries" }];

var Option = function Option(props) {
  return _react2.default.createElement(
    'option',
    {
      className: 'listed-option',
      disabled: props.disabled || false,
      value: props.value
    },
    props.label
  );
};

var defaultOption = { value: -1, label: 'Please Select' };

var multiSelect = function (_Component) {
  _inherits(multiSelect, _Component);

  function multiSelect() {
    _classCallCheck(this, multiSelect);

    var _this = _possibleConstructorReturn(this, (multiSelect.__proto__ || Object.getPrototypeOf(multiSelect)).call(this));

    _this.state = {
      selections: [],
      options: demoOptions
    };
    return _this;
  }

  _createClass(multiSelect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.options) {
        this.setState({
          options: this.props.options
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.onChange(_this2.state.selections);
      }, 20);
    }
  }, {
    key: 'handleAddSelection',
    value: function handleAddSelection(e) {
      this.setState({
        selectedOption: this.state.options.find(function (x) {
          return x.value === e.target.value;
        }),
        selections: [].concat(_toConsumableArray(this.state.selections), [this.state.options.find(function (x) {
          return x.value === e.target.value;
        })]),
        options: [].concat(_toConsumableArray(this.state.options.filter(function (x) {
          return x.value !== e.target.value;
        })))
      });
      this.handleChange();
    }
  }, {
    key: 'handleRemoveSelection',
    value: function handleRemoveSelection(selection) {
      this.setState({
        selections: [].concat(_toConsumableArray(this.state.selections.filter(function (x) {
          return x.value !== selection.value;
        }))),
        options: _underscore2.default.sortBy([].concat(_toConsumableArray(this.state.options), [selection]), 'value')
      });
      this.handleChange();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var defaultOptionLabel = this.props.defaultOptionLabel;

      return _react2.default.createElement(
        'div',
        { className: 'multi-select-container' },
        _react2.default.createElement(
          'div',
          { className: 'selected-option-list' },
          this.state.selections.map(function (x, i) {
            return _react2.default.createElement(
              'div',
              { className: 'selected-option hoverable', key: i, onClick: function onClick() {
                  return _this3.handleRemoveSelection(x);
                } },
              _react2.default.createElement(
                'span',
                null,
                x.label
              )
            );
          })
        ),
        _react2.default.createElement(
          'select',
          { className: 'select-input', value: defaultOption.value, onChange: function onChange(e) {
              return _this3.handleAddSelection(e);
            } },
          _react2.default.createElement(Option, {
            disabled: true,
            value: defaultOption.value,
            label: defaultOptionLabel || defaultOption.label
          }),
          this.state.options.map(function (x, i) {
            return _react2.default.createElement(Option, {
              key: i,
              value: x.value,
              label: x.label
            });
          })
        )
      );
    }
  }]);

  return multiSelect;
}(_react.Component);

multiSelect.propTypes = {
  onChange: _react2.default.PropTypes.func.isRequired,
  options: _react2.default.PropTypes.array.isRequired
};

exports.default = multiSelect;
module.exports = exports['default'];