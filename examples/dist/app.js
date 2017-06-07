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
      multiValue: [],
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

      return _react2['default'].createElement(_reactSelectPlus2['default'].Creatable, {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdXNlcjEvRGV2L0E1MS9UZW1wL1JlYWN0U2VsZWN0L2V4YW1wbGVzL3NyYy9hcHAuanMiLCIvVXNlcnMvdXNlcjEvRGV2L0E1MS9UZW1wL1JlYWN0U2VsZWN0L2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL0dyb3VwZWRPcHRpb25zRmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cUJDRWtCLE9BQU87Ozs7d0JBQ0osV0FBVzs7OzsrQkFDYixtQkFBbUI7Ozs7NkNBRU4sa0NBQWtDOzs7O0FBRWxFLHNCQUFTLE1BQU0sQ0FDZDs7O0NBQ0MsK0VBQXFCLEtBQUssRUFBQyxlQUFlLEdBQUc7Q0FDeEMsRUFDTixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7cUJDYmdCLE9BQU87Ozs7K0JBQ04sbUJBQW1COzs7O0lBRWhDLG1CQUFtQjtZQUFuQixtQkFBbUI7O0FBSVosV0FKUCxtQkFBbUIsQ0FJWCxLQUFLLEVBQUU7MEJBSmYsbUJBQW1COztBQUtyQiwrQkFMRSxtQkFBbUIsNkNBS2YsS0FBSyxFQUFFOzs7QUFHYixRQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsZ0JBQVUsRUFBRSxFQUFFO0FBQ2QsYUFBTyxFQUFFLENBQUM7QUFDZCxhQUFLLEVBQUUsZ0JBQWdCO0FBQ3ZCLGVBQU8sRUFBRSxDQUFDO0FBQ1IsZUFBSyxFQUFFLFFBQVE7QUFDZixlQUFLLEVBQUUsUUFBUTtTQUNoQixFQUFFO0FBQ0QsZUFBSyxFQUFFLEtBQUs7QUFDWixlQUFLLEVBQUUsS0FBSztTQUNiLEVBQUU7QUFDRCxlQUFLLEVBQUUsTUFBTTtBQUNiLGVBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQztPQUNILEVBQUU7QUFDRCxhQUFLLEVBQUUsa0JBQWtCO0FBQ3pCLGVBQU8sRUFBRSxDQUFDO0FBQ1IsZUFBSyxFQUFFLFFBQVE7QUFDZixlQUFLLEVBQUUsUUFBUTtTQUNoQixFQUFFO0FBQ0QsZUFBSyxFQUFFLE9BQU87QUFDZCxlQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7T0FDSCxDQUFDO0tBQ0csQ0FBQztHQUNIOzs7Ozs7ZUFqQ0csbUJBQW1COztXQWtDUix3QkFBQyxLQUFLLEVBQUU7O0FBRXJCLFVBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNyQyxhQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUNsQzs7O1dBQ00sa0JBQUc7bUJBQytCLElBQUksQ0FBQyxLQUFLO1VBQXpDLEtBQUssVUFBTCxLQUFLO1VBQUUsVUFBVSxVQUFWLFVBQVU7VUFBRSxPQUFPLFVBQVAsT0FBTzs7QUFDbEMsYUFDSSxpQ0FBQyw2QkFBTyxTQUFTO0FBQ2YsYUFBSyxFQUFFLElBQUksQUFBQztBQUNaLDBCQUFrQixFQUFFLElBQUksQUFBQztBQUN6QixlQUFPLEVBQUUsT0FBTyxBQUFDO0FBQ2pCLGdCQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7QUFDekMsYUFBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDO1FBQzdCLENBQ0o7S0FDSDs7O1NBbERHLG1CQUFtQjtHQUFTLG1CQUFNLFNBQVM7O0FBeURqRCxNQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0LXBsdXMnO1xuXG5pbXBvcnQgR3JvdXBlZE9wdGlvbnNGaWVsZCBmcm9tICcuL2NvbXBvbmVudHMvR3JvdXBlZE9wdGlvbnNGaWVsZCc7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PGRpdj5cblx0XHQ8R3JvdXBlZE9wdGlvbnNGaWVsZCBsYWJlbD1cIk9wdGlvbiBHcm91cHNcIiAvPlxuXHQ8L2Rpdj4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QtcGx1cyc7XG5cbmNsYXNzIEdyb3VwZWRPcHRpb25zRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzOiB7XG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVPbkNoYW5nZSA9IHRoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAvLyBEbyB0aGlzLCBvciB3aWxsIGdldCBhIFwibm90IGRlZmluZWRcIiBlcnJvci4gQWxzb1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtdWx0aVZhbHVlOiBbXSxcbiAgICAgIG9wdGlvbnM6IFt7XG4gIGxhYmVsOiAnUHJpbWFyeSBDb2xvcnMnLFxuICBvcHRpb25zOiBbe1xuICAgIGxhYmVsOiAnWWVsbG93JyxcbiAgICB2YWx1ZTogJ3llbGxvdydcbiAgfSwge1xuICAgIGxhYmVsOiAnUmVkJyxcbiAgICB2YWx1ZTogJ3JlZCdcbiAgfSwge1xuICAgIGxhYmVsOiAnQmx1ZScsXG4gICAgdmFsdWU6ICdibHVlJ1xuICB9XVxufSwge1xuICBsYWJlbDogJ1NlY29uZGFyeSBDb2xvcnMnLFxuICBvcHRpb25zOiBbe1xuICAgIGxhYmVsOiAnT3JhbmdlJyxcbiAgICB2YWx1ZTogJ29yYW5nZSdcbiAgfSwge1xuICAgIGxhYmVsOiAnR3JlZW4nLFxuICAgIHZhbHVlOiAnZ3JlZW4nXG4gIH1dXG59XSxcbiAgICB9O1xuICB9XG4gIGhhbmRsZU9uQ2hhbmdlICh2YWx1ZSkge1xuICAgIC8vIGNvbnN0IHsgbXVsdGkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG11bHRpVmFsdWU6IHZhbHVlIH0pO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIG5ldycsIHZhbHVlKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBtdWx0aSwgbXVsdGlWYWx1ZSwgb3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0LkNyZWF0YWJsZVxuICAgICAgICAgIG11bHRpPXt0cnVlfVxuICAgICAgICAgIHNob3dOZXdPcHRpb25BdFRvcD17dHJ1ZX1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXVsdGlWYWx1ZX1cbiAgICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbi8vIC5TZWxlY3Qtb3B0aW9uLWdyb3VwLWxhYmVsIH4gLlNlbGVjdC1vcHRpb257XG4vLyAgIGRpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O1xuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwZWRPcHRpb25zRmllbGQ7Il19
