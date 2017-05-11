require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint react/prop-types: 0 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSelectPlus = require('react-select-plus');

var _reactSelectPlus2 = _interopRequireDefault(_reactSelectPlus);

var _componentsGroupedOptionsField = require('./components/GroupedOptionsField');

var _componentsGroupedOptionsField2 = _interopRequireDefault(_componentsGroupedOptionsField);

_reactDom2['default'].render(_react2['default'].createElement(
	'div',
	null,
	_react2['default'].createElement(_componentsGroupedOptionsField2['default'], { label: 'Option Groups' })
), document.getElementById('example'));

},{"./components/GroupedOptionsField":2,"react":undefined,"react-dom":undefined,"react-select-plus":undefined}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelectPlus = require('react-select-plus');

var _reactSelectPlus2 = _interopRequireDefault(_reactSelectPlus);

var GroupedOptionsField = (function (_React$Component) {
  _inherits(GroupedOptionsField, _React$Component);

  function GroupedOptionsField(props) {
    _classCallCheck(this, GroupedOptionsField);

    _get(Object.getPrototypeOf(GroupedOptionsField.prototype), 'constructor', this).call(this, props);
    // this.handleOnChange = this.handleOnChange.bind(this);
    // Do this, or will get a "not defined" error. Also
    this.state = {
      multi: true,
      multiValue: [],
      options: [{ "label": "Colours", "value": "Colours", "key": 122, "options": [{ "label": "Green", "value": "Green", "key": 2 }, { "label": "Blue", "value": "Blue", "key": 3 }, { "label": "BlahBlah", "value": "BlahBlah", "key": 4 }, { "label": "Disestablishmenterianism", "value": "Disestablishmenterianism", "key": 5 }, { "label": "MagentaMagenta", "value": "MagentaMagenta", "key": 6 }, { "label": "Orange", "value": "Orange", "key": 7 }, { "label": "TealMagentaMagenta", "value": "TealMagentaMagenta", "key": 20 }, { "label": "Violet", "value": "Violet", "key": 21 }] }, { "label": "Fruits", "value": "Fruits", "key": 141, "options": [{ "label": "Banana", "value": "Banana", "key": 8 }, { "label": "Apple", "value": "Apple", "key": 9 }, { "label": "Orange", "value": "Orange", "key": 10 }, { "label": "Orange", "value": "Orange", "key": 11 }, { "label": "Tomato", "value": "Tomato", "key": 12 }, { "label": "Eggplant", "value": "Eggplant", "key": 13 }, { "label": "Capsicum", "value": "Capsicum", "key": 14 }] }, { "label": "Planets", "value": "Planets", "key": 131, "options": [{ "label": "Earth", "value": "Earth", "key": 15 }, { "label": "Mars", "value": "Mars", "key": 16 }, { "label": "Venus", "value": "Venus", "key": 17 }, { "label": "Neptune", "value": "Neptune", "key": 18 }, { "label": "Saturn", "value": "Saturn", "key": 19 }, { "label": "Uranus", "value": "Uranus", "key": 190 }] }]
    };
  }

  _createClass(GroupedOptionsField, [{
    key: 'handleOnChange',
    value: function handleOnChange(value) {
      // const { multi } = this.state;
      this.setState({ multiValue: value });
      console.log('this is new', value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var multi = _state.multi;
      var multiValue = _state.multiValue;
      var options = _state.options;

      return _react2['default'].createElement(_reactSelectPlus2['default'].Creatable, {
        multi: multi,
        options: options,
        onChange: this.handleOnChange.bind(this),
        value: this.state.multiValue
      });
    }
  }]);

  return GroupedOptionsField;
})(_react2['default'].Component);

module.exports = GroupedOptionsField;

},{"react":undefined,"react-select-plus":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdXNlcjEvRGV2L0E1MS9UZW1wL1JlYWN0U2VsZWN0L2V4YW1wbGVzL3NyYy9hcHAuanMiLCIvVXNlcnMvdXNlcjEvRGV2L0E1MS9UZW1wL1JlYWN0U2VsZWN0L2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL0dyb3VwZWRPcHRpb25zRmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cUJDRWtCLE9BQU87Ozs7d0JBQ0osV0FBVzs7OzsrQkFDYixtQkFBbUI7Ozs7NkNBRU4sa0NBQWtDOzs7O0FBRWxFLHNCQUFTLE1BQU0sQ0FDZDs7O0NBQ0MsK0VBQXFCLEtBQUssRUFBQyxlQUFlLEdBQUc7Q0FDeEMsRUFDTixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7cUJDYmdCLE9BQU87Ozs7K0JBQ04sbUJBQW1COzs7O0lBRWhDLG1CQUFtQjtZQUFuQixtQkFBbUI7O0FBSVosV0FKUCxtQkFBbUIsQ0FJWCxLQUFLLEVBQUU7MEJBSmYsbUJBQW1COztBQUtyQiwrQkFMRSxtQkFBbUIsNkNBS2YsS0FBSyxFQUFFOzs7QUFHYixRQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsV0FBSyxFQUFFLElBQUk7QUFDWCxnQkFBVSxFQUFFLEVBQUU7QUFDZCxhQUFPLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFHLEVBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFFLEVBQUUsQ0FBRTtLQUM5M0MsQ0FBQztHQUNIOztlQWJHLG1CQUFtQjs7V0FjUix3QkFBQyxLQUFLLEVBQUU7O0FBRXJCLFVBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNyQyxhQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUNsQzs7O1dBQ00sa0JBQUc7bUJBQytCLElBQUksQ0FBQyxLQUFLO1VBQXpDLEtBQUssVUFBTCxLQUFLO1VBQUUsVUFBVSxVQUFWLFVBQVU7VUFBRSxPQUFPLFVBQVAsT0FBTzs7QUFDbEMsYUFDSSxpQ0FBQyw2QkFBTyxTQUFTO0FBQ2YsYUFBSyxFQUFFLEtBQUssQUFBQztBQUNiLGVBQU8sRUFBRSxPQUFPLEFBQUM7QUFDakIsZ0JBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztBQUN6QyxhQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEFBQUM7UUFDN0IsQ0FDSjtLQUNIOzs7U0E3QkcsbUJBQW1CO0dBQVMsbUJBQU0sU0FBUzs7QUFnQ2pELE1BQU0sQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QtcGx1cyc7XG5cbmltcG9ydCBHcm91cGVkT3B0aW9uc0ZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9Hcm91cGVkT3B0aW9uc0ZpZWxkJztcblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8ZGl2PlxuXHRcdDxHcm91cGVkT3B0aW9uc0ZpZWxkIGxhYmVsPVwiT3B0aW9uIEdyb3Vwc1wiIC8+XG5cdDwvZGl2Pixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC1wbHVzJztcblxuY2xhc3MgR3JvdXBlZE9wdGlvbnNGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXM6IHtcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyB0aGlzLmhhbmRsZU9uQ2hhbmdlID0gdGhpcy5oYW5kbGVPbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIC8vIERvIHRoaXMsIG9yIHdpbGwgZ2V0IGEgXCJub3QgZGVmaW5lZFwiIGVycm9yLiBBbHNvXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgbXVsdGlWYWx1ZTogW10sXG4gICAgICBvcHRpb25zOiBbIHsgXCJsYWJlbFwiOiBcIkNvbG91cnNcIiwgXCJ2YWx1ZVwiOiBcIkNvbG91cnNcIiwgXCJrZXlcIjogMTIyLCBcIm9wdGlvbnNcIjogWyB7IFwibGFiZWxcIjogXCJHcmVlblwiLCBcInZhbHVlXCI6IFwiR3JlZW5cIiwgXCJrZXlcIjogMiB9LCB7IFwibGFiZWxcIjogXCJCbHVlXCIsIFwidmFsdWVcIjogXCJCbHVlXCIsIFwia2V5XCI6IDMgfSwgeyBcImxhYmVsXCI6IFwiQmxhaEJsYWhcIiwgXCJ2YWx1ZVwiOiBcIkJsYWhCbGFoXCIsIFwia2V5XCI6IDQgfSwgeyBcImxhYmVsXCI6IFwiRGlzZXN0YWJsaXNobWVudGVyaWFuaXNtXCIsIFwidmFsdWVcIjogXCJEaXNlc3RhYmxpc2htZW50ZXJpYW5pc21cIiwgXCJrZXlcIjogNSB9LCB7IFwibGFiZWxcIjogXCJNYWdlbnRhTWFnZW50YVwiLCBcInZhbHVlXCI6IFwiTWFnZW50YU1hZ2VudGFcIiwgXCJrZXlcIjogNiB9LCB7IFwibGFiZWxcIjogXCJPcmFuZ2VcIiwgXCJ2YWx1ZVwiOiBcIk9yYW5nZVwiLCBcImtleVwiOiA3IH0sIHsgXCJsYWJlbFwiOiBcIlRlYWxNYWdlbnRhTWFnZW50YVwiLCBcInZhbHVlXCI6IFwiVGVhbE1hZ2VudGFNYWdlbnRhXCIsIFwia2V5XCI6IDIwIH0sIHsgXCJsYWJlbFwiOiBcIlZpb2xldFwiLCBcInZhbHVlXCI6IFwiVmlvbGV0XCIsIFwia2V5XCI6IDIxIH0sIF0gfSwgeyBcImxhYmVsXCI6IFwiRnJ1aXRzXCIsIFwidmFsdWVcIjogXCJGcnVpdHNcIiwgXCJrZXlcIjogMTQxLCBcIm9wdGlvbnNcIjogWyB7IFwibGFiZWxcIjogXCJCYW5hbmFcIiwgXCJ2YWx1ZVwiOiBcIkJhbmFuYVwiLCBcImtleVwiOiA4IH0sIHsgXCJsYWJlbFwiOiBcIkFwcGxlXCIsIFwidmFsdWVcIjogXCJBcHBsZVwiLCBcImtleVwiOiA5IH0sIHsgXCJsYWJlbFwiOiBcIk9yYW5nZVwiLCBcInZhbHVlXCI6IFwiT3JhbmdlXCIsIFwia2V5XCI6IDEwIH0sIHsgXCJsYWJlbFwiOiBcIk9yYW5nZVwiLCBcInZhbHVlXCI6IFwiT3JhbmdlXCIsIFwia2V5XCI6IDExIH0sIHsgXCJsYWJlbFwiOiBcIlRvbWF0b1wiLCBcInZhbHVlXCI6IFwiVG9tYXRvXCIsIFwia2V5XCI6IDEyIH0sIHsgXCJsYWJlbFwiOiBcIkVnZ3BsYW50XCIsIFwidmFsdWVcIjogXCJFZ2dwbGFudFwiLCBcImtleVwiOiAxMyB9LCB7IFwibGFiZWxcIjogXCJDYXBzaWN1bVwiLCBcInZhbHVlXCI6IFwiQ2Fwc2ljdW1cIiwgXCJrZXlcIjogMTQgfSwgXSwgfSwgeyBcImxhYmVsXCI6IFwiUGxhbmV0c1wiLCBcInZhbHVlXCI6IFwiUGxhbmV0c1wiLCBcImtleVwiOiAxMzEsIFwib3B0aW9uc1wiOiBbIHsgXCJsYWJlbFwiOiBcIkVhcnRoXCIsIFwidmFsdWVcIjogXCJFYXJ0aFwiLCBcImtleVwiOiAxNSB9LCB7IFwibGFiZWxcIjogXCJNYXJzXCIsIFwidmFsdWVcIjogXCJNYXJzXCIsIFwia2V5XCI6IDE2IH0sIHsgXCJsYWJlbFwiOiBcIlZlbnVzXCIsIFwidmFsdWVcIjogXCJWZW51c1wiLCBcImtleVwiOiAxNyB9LCB7IFwibGFiZWxcIjogXCJOZXB0dW5lXCIsIFwidmFsdWVcIjogXCJOZXB0dW5lXCIsIFwia2V5XCI6IDE4IH0sIHsgXCJsYWJlbFwiOiBcIlNhdHVyblwiLCBcInZhbHVlXCI6IFwiU2F0dXJuXCIsIFwia2V5XCI6IDE5IH0sIHsgXCJsYWJlbFwiOiBcIlVyYW51c1wiLCBcInZhbHVlXCI6IFwiVXJhbnVzXCIsIFwia2V5XCI6IDE5MCB9IF0gfSBdLFxuICAgIH07XG4gIH1cbiAgaGFuZGxlT25DaGFuZ2UgKHZhbHVlKSB7XG4gICAgLy8gY29uc3QgeyBtdWx0aSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbXVsdGlWYWx1ZTogdmFsdWUgfSk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgbmV3JywgdmFsdWUpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IG11bHRpLCBtdWx0aVZhbHVlLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3QuQ3JlYXRhYmxlXG4gICAgICAgICAgbXVsdGk9e211bHRpfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tdWx0aVZhbHVlfVxuICAgICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cGVkT3B0aW9uc0ZpZWxkO1xuIl19
