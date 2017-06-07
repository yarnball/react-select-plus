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
      multiValue: [{ "label": "Geniu", "value": "Genius" }],
      options: [{
        label: 'Primary Colors',
        options: [{
          label: 'Yellow',
          value: 'yellow'
        }, {
          label: 'Red',
          value: 'red'
        }, {
          label: 'Blue',
          value: 'blue'
        }]
      }, {
        label: 'Secondary Colors',
        options: [{
          label: 'Orange',
          value: 'orange'
        }, {
          label: 'Green',
          value: 'green'
        }]
      }]
    };
  }

  // .Select-option-group-label ~ .Select-option{
  //   display:-webkit-inline-box;
  // }

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

      return _react2['default'].createElement(_reactSelectPlus2['default'].TreeCreatable, {
        multi: true,
        showNewOptionAtTop: true,
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdXNlcjEvRGV2L0E1MS9UZW1wL1JlYWN0U2VsZWN0L2V4YW1wbGVzL3NyYy9hcHAuanMiLCIvVXNlcnMvdXNlcjEvRGV2L0E1MS9UZW1wL1JlYWN0U2VsZWN0L2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL0dyb3VwZWRPcHRpb25zRmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cUJDRWtCLE9BQU87Ozs7d0JBQ0osV0FBVzs7OzsrQkFDYixtQkFBbUI7Ozs7NkNBRU4sa0NBQWtDOzs7O0FBRWxFLHNCQUFTLE1BQU0sQ0FDZDs7O0NBQ0MsK0VBQXFCLEtBQUssRUFBQyxlQUFlLEdBQUc7Q0FDeEMsRUFDTixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7cUJDYmdCLE9BQU87Ozs7K0JBQ04sbUJBQW1COzs7O0lBRWhDLG1CQUFtQjtZQUFuQixtQkFBbUI7O0FBSVosV0FKUCxtQkFBbUIsQ0FJWCxLQUFLLEVBQUU7MEJBSmYsbUJBQW1COztBQUtyQiwrQkFMRSxtQkFBbUIsNkNBS2YsS0FBSyxFQUFFOzs7QUFHYixRQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsZ0JBQVUsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7QUFDbkQsYUFBTyxFQUFFLENBQUM7QUFDZCxhQUFLLEVBQUUsZ0JBQWdCO0FBQ3ZCLGVBQU8sRUFBRSxDQUFDO0FBQ1IsZUFBSyxFQUFFLFFBQVE7QUFDZixlQUFLLEVBQUUsUUFBUTtTQUNoQixFQUFFO0FBQ0QsZUFBSyxFQUFFLEtBQUs7QUFDWixlQUFLLEVBQUUsS0FBSztTQUNiLEVBQUU7QUFDRCxlQUFLLEVBQUUsTUFBTTtBQUNiLGVBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQztPQUNILEVBQUU7QUFDRCxhQUFLLEVBQUUsa0JBQWtCO0FBQ3pCLGVBQU8sRUFBRSxDQUFDO0FBQ1IsZUFBSyxFQUFFLFFBQVE7QUFDZixlQUFLLEVBQUUsUUFBUTtTQUNoQixFQUFFO0FBQ0QsZUFBSyxFQUFFLE9BQU87QUFDZCxlQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7T0FDSCxDQUFDO0tBQ0csQ0FBQztHQUNIOzs7Ozs7ZUFqQ0csbUJBQW1COztXQWtDUix3QkFBQyxLQUFLLEVBQUU7O0FBRXJCLFVBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNyQyxhQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUNsQzs7O1dBQ00sa0JBQUc7bUJBQytCLElBQUksQ0FBQyxLQUFLO1VBQXpDLEtBQUssVUFBTCxLQUFLO1VBQUUsVUFBVSxVQUFWLFVBQVU7VUFBRSxPQUFPLFVBQVAsT0FBTzs7QUFDbEMsYUFDSSxpQ0FBQyw2QkFBTyxhQUFhO0FBQ25CLGFBQUssRUFBRSxJQUFJLEFBQUM7QUFDWiwwQkFBa0IsRUFBRSxJQUFJLEFBQUM7QUFDekIsZUFBTyxFQUFFLE9BQU8sQUFBQztBQUNqQixnQkFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDO0FBQ3pDLGFBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQUFBQztRQUM3QixDQUNKO0tBQ0g7OztTQWxERyxtQkFBbUI7R0FBUyxtQkFBTSxTQUFTOztBQXlEakQsTUFBTSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC1wbHVzJztcblxuaW1wb3J0IEdyb3VwZWRPcHRpb25zRmllbGQgZnJvbSAnLi9jb21wb25lbnRzL0dyb3VwZWRPcHRpb25zRmllbGQnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxkaXY+XG5cdFx0PEdyb3VwZWRPcHRpb25zRmllbGQgbGFiZWw9XCJPcHRpb24gR3JvdXBzXCIgLz5cblx0PC9kaXY+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0LXBsdXMnO1xuXG5jbGFzcyBHcm91cGVkT3B0aW9uc0ZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlczoge1xuICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIHRoaXMuaGFuZGxlT25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgLy8gRG8gdGhpcywgb3Igd2lsbCBnZXQgYSBcIm5vdCBkZWZpbmVkXCIgZXJyb3IuIEFsc29cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbXVsdGlWYWx1ZTogW3tcImxhYmVsXCI6IFwiR2VuaXVcIiwgXCJ2YWx1ZVwiOiBcIkdlbml1c1wifV0sXG4gICAgICBvcHRpb25zOiBbe1xuICBsYWJlbDogJ1ByaW1hcnkgQ29sb3JzJyxcbiAgb3B0aW9uczogW3tcbiAgICBsYWJlbDogJ1llbGxvdycsXG4gICAgdmFsdWU6ICd5ZWxsb3cnXG4gIH0sIHtcbiAgICBsYWJlbDogJ1JlZCcsXG4gICAgdmFsdWU6ICdyZWQnXG4gIH0sIHtcbiAgICBsYWJlbDogJ0JsdWUnLFxuICAgIHZhbHVlOiAnYmx1ZSdcbiAgfV1cbn0sIHtcbiAgbGFiZWw6ICdTZWNvbmRhcnkgQ29sb3JzJyxcbiAgb3B0aW9uczogW3tcbiAgICBsYWJlbDogJ09yYW5nZScsXG4gICAgdmFsdWU6ICdvcmFuZ2UnXG4gIH0sIHtcbiAgICBsYWJlbDogJ0dyZWVuJyxcbiAgICB2YWx1ZTogJ2dyZWVuJ1xuICB9XVxufV0sXG4gICAgfTtcbiAgfVxuICBoYW5kbGVPbkNoYW5nZSAodmFsdWUpIHtcbiAgICAvLyBjb25zdCB7IG11bHRpIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtdWx0aVZhbHVlOiB2YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBuZXcnLCB2YWx1ZSlcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgbXVsdGksIG11bHRpVmFsdWUsIG9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdC5UcmVlQ3JlYXRhYmxlXG4gICAgICAgICAgbXVsdGk9e3RydWV9XG4gICAgICAgICAgc2hvd05ld09wdGlvbkF0VG9wPXt0cnVlfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tdWx0aVZhbHVlfVxuICAgICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuLy8gLlNlbGVjdC1vcHRpb24tZ3JvdXAtbGFiZWwgfiAuU2VsZWN0LW9wdGlvbntcbi8vICAgZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7XG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBlZE9wdGlvbnNGaWVsZDsiXX0=
