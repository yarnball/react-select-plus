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
      multiValue: [{ "label": "Genius", "value": "Genius" }],
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdXNlcjEvRGV2L0E1MS9UZW1wL1JlYWN0U2VsZWN0L2V4YW1wbGVzL3NyYy9hcHAuanMiLCIvVXNlcnMvdXNlcjEvRGV2L0E1MS9UZW1wL1JlYWN0U2VsZWN0L2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL0dyb3VwZWRPcHRpb25zRmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cUJDRWtCLE9BQU87Ozs7d0JBQ0osV0FBVzs7OzsrQkFDYixtQkFBbUI7Ozs7NkNBRU4sa0NBQWtDOzs7O0FBRWxFLHNCQUFTLE1BQU0sQ0FDZDs7O0NBQ0MsK0VBQXFCLEtBQUssRUFBQyxlQUFlLEdBQUc7Q0FDeEMsRUFDTixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7cUJDYmdCLE9BQU87Ozs7K0JBQ04sbUJBQW1COzs7O0lBRWhDLG1CQUFtQjtZQUFuQixtQkFBbUI7O0FBSVosV0FKUCxtQkFBbUIsQ0FJWCxLQUFLLEVBQUU7MEJBSmYsbUJBQW1COztBQUtyQiwrQkFMRSxtQkFBbUIsNkNBS2YsS0FBSyxFQUFFOzs7QUFHYixRQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsV0FBSyxFQUFFLElBQUk7QUFDWCxnQkFBVSxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQztBQUNwRCxhQUFPLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFHLEVBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFFLEVBQUUsQ0FBRTtLQUM5M0MsQ0FBQztHQUNIOztlQWJHLG1CQUFtQjs7V0FjUix3QkFBQyxLQUFLLEVBQUU7O0FBRXJCLFVBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNyQyxhQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUNsQzs7O1dBQ00sa0JBQUc7bUJBQytCLElBQUksQ0FBQyxLQUFLO1VBQXpDLEtBQUssVUFBTCxLQUFLO1VBQUUsVUFBVSxVQUFWLFVBQVU7VUFBRSxPQUFPLFVBQVAsT0FBTzs7QUFDbEMsYUFDSSxpQ0FBQyw2QkFBTyxTQUFTO0FBQ2YsYUFBSyxFQUFFLEtBQUssQUFBQztBQUNiLGVBQU8sRUFBRSxPQUFPLEFBQUM7QUFDakIsZ0JBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztBQUN6QyxhQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEFBQUM7UUFDN0IsQ0FDSjtLQUNIOzs7U0E3QkcsbUJBQW1CO0dBQVMsbUJBQU0sU0FBUzs7QUFnQ2pELE1BQU0sQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QtcGx1cyc7XG5cbmltcG9ydCBHcm91cGVkT3B0aW9uc0ZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9Hcm91cGVkT3B0aW9uc0ZpZWxkJztcblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8ZGl2PlxuXHRcdDxHcm91cGVkT3B0aW9uc0ZpZWxkIGxhYmVsPVwiT3B0aW9uIEdyb3Vwc1wiIC8+XG5cdDwvZGl2Pixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC1wbHVzJztcblxuY2xhc3MgR3JvdXBlZE9wdGlvbnNGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXM6IHtcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyB0aGlzLmhhbmRsZU9uQ2hhbmdlID0gdGhpcy5oYW5kbGVPbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIC8vIERvIHRoaXMsIG9yIHdpbGwgZ2V0IGEgXCJub3QgZGVmaW5lZFwiIGVycm9yLiBBbHNvXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgbXVsdGlWYWx1ZTogW3tcImxhYmVsXCI6IFwiR2VuaXVzXCIsIFwidmFsdWVcIjogXCJHZW5pdXNcIn1dLFxuICAgICAgb3B0aW9uczogWyB7IFwibGFiZWxcIjogXCJDb2xvdXJzXCIsIFwidmFsdWVcIjogXCJDb2xvdXJzXCIsIFwia2V5XCI6IDEyMiwgXCJvcHRpb25zXCI6IFsgeyBcImxhYmVsXCI6IFwiR3JlZW5cIiwgXCJ2YWx1ZVwiOiBcIkdyZWVuXCIsIFwia2V5XCI6IDIgfSwgeyBcImxhYmVsXCI6IFwiQmx1ZVwiLCBcInZhbHVlXCI6IFwiQmx1ZVwiLCBcImtleVwiOiAzIH0sIHsgXCJsYWJlbFwiOiBcIkJsYWhCbGFoXCIsIFwidmFsdWVcIjogXCJCbGFoQmxhaFwiLCBcImtleVwiOiA0IH0sIHsgXCJsYWJlbFwiOiBcIkRpc2VzdGFibGlzaG1lbnRlcmlhbmlzbVwiLCBcInZhbHVlXCI6IFwiRGlzZXN0YWJsaXNobWVudGVyaWFuaXNtXCIsIFwia2V5XCI6IDUgfSwgeyBcImxhYmVsXCI6IFwiTWFnZW50YU1hZ2VudGFcIiwgXCJ2YWx1ZVwiOiBcIk1hZ2VudGFNYWdlbnRhXCIsIFwia2V5XCI6IDYgfSwgeyBcImxhYmVsXCI6IFwiT3JhbmdlXCIsIFwidmFsdWVcIjogXCJPcmFuZ2VcIiwgXCJrZXlcIjogNyB9LCB7IFwibGFiZWxcIjogXCJUZWFsTWFnZW50YU1hZ2VudGFcIiwgXCJ2YWx1ZVwiOiBcIlRlYWxNYWdlbnRhTWFnZW50YVwiLCBcImtleVwiOiAyMCB9LCB7IFwibGFiZWxcIjogXCJWaW9sZXRcIiwgXCJ2YWx1ZVwiOiBcIlZpb2xldFwiLCBcImtleVwiOiAyMSB9LCBdIH0sIHsgXCJsYWJlbFwiOiBcIkZydWl0c1wiLCBcInZhbHVlXCI6IFwiRnJ1aXRzXCIsIFwia2V5XCI6IDE0MSwgXCJvcHRpb25zXCI6IFsgeyBcImxhYmVsXCI6IFwiQmFuYW5hXCIsIFwidmFsdWVcIjogXCJCYW5hbmFcIiwgXCJrZXlcIjogOCB9LCB7IFwibGFiZWxcIjogXCJBcHBsZVwiLCBcInZhbHVlXCI6IFwiQXBwbGVcIiwgXCJrZXlcIjogOSB9LCB7IFwibGFiZWxcIjogXCJPcmFuZ2VcIiwgXCJ2YWx1ZVwiOiBcIk9yYW5nZVwiLCBcImtleVwiOiAxMCB9LCB7IFwibGFiZWxcIjogXCJPcmFuZ2VcIiwgXCJ2YWx1ZVwiOiBcIk9yYW5nZVwiLCBcImtleVwiOiAxMSB9LCB7IFwibGFiZWxcIjogXCJUb21hdG9cIiwgXCJ2YWx1ZVwiOiBcIlRvbWF0b1wiLCBcImtleVwiOiAxMiB9LCB7IFwibGFiZWxcIjogXCJFZ2dwbGFudFwiLCBcInZhbHVlXCI6IFwiRWdncGxhbnRcIiwgXCJrZXlcIjogMTMgfSwgeyBcImxhYmVsXCI6IFwiQ2Fwc2ljdW1cIiwgXCJ2YWx1ZVwiOiBcIkNhcHNpY3VtXCIsIFwia2V5XCI6IDE0IH0sIF0sIH0sIHsgXCJsYWJlbFwiOiBcIlBsYW5ldHNcIiwgXCJ2YWx1ZVwiOiBcIlBsYW5ldHNcIiwgXCJrZXlcIjogMTMxLCBcIm9wdGlvbnNcIjogWyB7IFwibGFiZWxcIjogXCJFYXJ0aFwiLCBcInZhbHVlXCI6IFwiRWFydGhcIiwgXCJrZXlcIjogMTUgfSwgeyBcImxhYmVsXCI6IFwiTWFyc1wiLCBcInZhbHVlXCI6IFwiTWFyc1wiLCBcImtleVwiOiAxNiB9LCB7IFwibGFiZWxcIjogXCJWZW51c1wiLCBcInZhbHVlXCI6IFwiVmVudXNcIiwgXCJrZXlcIjogMTcgfSwgeyBcImxhYmVsXCI6IFwiTmVwdHVuZVwiLCBcInZhbHVlXCI6IFwiTmVwdHVuZVwiLCBcImtleVwiOiAxOCB9LCB7IFwibGFiZWxcIjogXCJTYXR1cm5cIiwgXCJ2YWx1ZVwiOiBcIlNhdHVyblwiLCBcImtleVwiOiAxOSB9LCB7IFwibGFiZWxcIjogXCJVcmFudXNcIiwgXCJ2YWx1ZVwiOiBcIlVyYW51c1wiLCBcImtleVwiOiAxOTAgfSBdIH0gXSxcbiAgICB9O1xuICB9XG4gIGhhbmRsZU9uQ2hhbmdlICh2YWx1ZSkge1xuICAgIC8vIGNvbnN0IHsgbXVsdGkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG11bHRpVmFsdWU6IHZhbHVlIH0pO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIG5ldycsIHZhbHVlKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBtdWx0aSwgbXVsdGlWYWx1ZSwgb3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0LkNyZWF0YWJsZVxuICAgICAgICAgIG11bHRpPXttdWx0aX1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXVsdGlWYWx1ZX1cbiAgICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBlZE9wdGlvbnNGaWVsZDtcbiJdfQ==
