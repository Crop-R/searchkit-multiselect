'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

require('react-select/dist/react-select.css');

var MultiSelect = (function (_React$Component) {
  _inherits(MultiSelect, _React$Component);

  function MultiSelect(props) {
    _classCallCheck(this, MultiSelect);

    _get(Object.getPrototypeOf(MultiSelect.prototype), 'constructor', this).call(this, props);
    this.handleChange = this.handleChange.bind(this);
  }

  _createClass(MultiSelect, [{
    key: 'handleChange',
    value: function handleChange() {
      var selectedOptions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      this.props.setItems(selectedOptions.map(function (el) {
        return el.value;
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var placeholder = _props.placeholder;
      var _props$clearable = _props.clearable;
      var clearable = _props$clearable === undefined ? true : _props$clearable;
      var items = _props.items;
      var _props$selectedItems = _props.selectedItems;
      var selectedItems = _props$selectedItems === undefined ? [] : _props$selectedItems;
      var disabled = _props.disabled;
      var showCount = _props.showCount;
      var setItems = _props.setItems;
      var translate = _props.translate;

      var options = items.map(function (option) {
        var label = translate(option.title || option.label || option.key);
        if (showCount) label += ' (' + option.doc_count + ') ';
        return { value: option.key, label: label };
      });

      return _react2['default'].createElement(_reactSelect.Creatable, { multi: true, disabled: disabled,
        value: selectedItems,
        placeholder: placeholder,
        options: options,
        valueRenderer: function (v) {
          return translate(v.value);
        },
        clearable: clearable,
        onChange: this.handleChange });
    }
  }]);

  return MultiSelect;
})(_react2['default'].Component);

exports['default'] = MultiSelect;
module.exports = exports['default'];