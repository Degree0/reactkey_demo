(function evaluate(require, module, exports, process, setImmediate, global, afterAll, afterEach, beforeAll, beforeEach, describe, it, test, expect, jest, __dirname, __filename) {"use strict";

var _createClass = function () { function defineProperties(target, props) { var _loopIt3 = 0; for (var i = 0; i < props.length; i++) { if (_loopIt3++ > 10001) { global.infiniteLoopError = new RangeError('Potential infinite loop: exceeded ' + 10001 + ' iterations. You can disable this check by creating a sandbox.config.json file.'); throw global.infiniteLoopError; } var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactSimpleKeyboard = require("react-simple-keyboard");

var _reactSimpleKeyboard2 = _interopRequireDefault(_reactSimpleKeyboard);

require("react-simple-keyboard/build/css/index.css");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  var _loopIt2 = 0;

  _inherits(App, _Component);

  function App() {
    var _loopIt = 0,
        _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      if (_loopIt2++ > 10001) {
        global.infiniteLoopError = new RangeError('Potential infinite loop: exceeded ' + 10001 + ' iterations. You can disable this check by creating a sandbox.config.json file.');
        throw global.infiniteLoopError;
      }

      if (_loopIt++ > 10001) {
        global.infiniteLoopError = new RangeError('Potential infinite loop: exceeded ' + 10001 + ' iterations. You can disable this check by creating a sandbox.config.json file.');
        throw global.infiniteLoopError;
      }

      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      layoutName: "default",
      input: ""
    }, _this.onChange = function (input) {
      _this.setState({
        input: input
      });
      console.log("Input changed", input);
    }, _this.onKeyPress = function (button) {
      console.log("Button pressed", button);

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") _this.handleShift();
    }, _this.handleShift = function () {
      var layoutName = _this.state.layoutName;

      _this.setState({
        layoutName: layoutName === "default" ? "shift" : "default"
      });
    }, _this.onChangeInput = function (event) {
      var input = event.target.value;
      _this.setState({
        input: input
      }, function () {
        _this.keyboard.setInput(input);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("input", {
          value: this.state.input,
          placeholder: "Tap on the virtual keyboard to start",
          onChange: function onChange(e) {
            return _this2.onChangeInput(e);
          }
        }),
        _react2.default.createElement(_reactSimpleKeyboard2.default, {
          ref: function ref(r) {
            return _this2.keyboard = r;
          },
          layoutName: this.state.layoutName,
          onChange: function onChange(input) {
            return _this2.onChange(input);
          },
          onKeyPress: function onKeyPress(button) {
            return _this2.onKeyPress(button);
          }
        })
      );
    }
  }]);

  return App;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJsYXlvdXROYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uS2V5UHJlc3MiLCJidXR0b24iLCJoYW5kbGVTaGlmdCIsIm9uQ2hhbmdlSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwia2V5Ym9hcmQiLCJzZXRJbnB1dCIsImUiLCJyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0xBQ0pDLEssR0FBUTtBQUNOQyxrQkFBWSxTQUROO0FBRU5DLGFBQU87QUFGRCxLLFFBS1JDLFEsR0FBVyxpQkFBUztBQUNsQixZQUFLQyxRQUFMLENBQWM7QUFDWkYsZUFBT0E7QUFESyxPQUFkO0FBR0FHLGNBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSixLQUE3QjtBQUNELEssUUFFREssVSxHQUFhLGtCQUFVO0FBQ3JCRixjQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJFLE1BQTlCOztBQUVBOzs7QUFHQSxVQUFJQSxXQUFXLFNBQVgsSUFBd0JBLFdBQVcsUUFBdkMsRUFBaUQsTUFBS0MsV0FBTDtBQUNsRCxLLFFBRURBLFcsR0FBYyxZQUFNO0FBQ2xCLFVBQUlSLGFBQWEsTUFBS0QsS0FBTCxDQUFXQyxVQUE1Qjs7QUFFQSxZQUFLRyxRQUFMLENBQWM7QUFDWkgsb0JBQVlBLGVBQWUsU0FBZixHQUEyQixPQUEzQixHQUFxQztBQURyQyxPQUFkO0FBR0QsSyxRQUVEUyxhLEdBQWdCLGlCQUFTO0FBQ3ZCLFVBQUlSLFFBQVFTLE1BQU1DLE1BQU4sQ0FBYUMsS0FBekI7QUFDQSxZQUFLVCxRQUFMLENBQ0U7QUFDRUYsZUFBT0E7QUFEVCxPQURGLEVBSUUsWUFBTTtBQUNKLGNBQUtZLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QmIsS0FBdkI7QUFDRCxPQU5IO0FBUUQsSzs7Ozs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsaUJBQU8sS0FBS0YsS0FBTCxDQUFXRSxLQURwQjtBQUVFLHVCQUFhLHNDQUZmO0FBR0Usb0JBQVU7QUFBQSxtQkFBSyxPQUFLUSxhQUFMLENBQW1CTSxDQUFuQixDQUFMO0FBQUE7QUFIWixVQURGO0FBTUU7QUFDRSxlQUFLO0FBQUEsbUJBQU0sT0FBS0YsUUFBTCxHQUFnQkcsQ0FBdEI7QUFBQSxXQURQO0FBRUUsc0JBQVksS0FBS2pCLEtBQUwsQ0FBV0MsVUFGekI7QUFHRSxvQkFBVTtBQUFBLG1CQUFTLE9BQUtFLFFBQUwsQ0FBY0QsS0FBZCxDQUFUO0FBQUEsV0FIWjtBQUlFLHNCQUFZO0FBQUEsbUJBQVUsT0FBS0ssVUFBTCxDQUFnQkMsTUFBaEIsQ0FBVjtBQUFBO0FBSmQ7QUFORixPQURGO0FBZUQ7Ozs7OztBQUdILHNCQUFPLDhCQUFDLEdBQUQsT0FBUCxFQUFnQlUsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFoQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwicmVhY3Qtc2ltcGxlLWtleWJvYXJkXCI7XG5pbXBvcnQgXCJyZWFjdC1zaW1wbGUta2V5Ym9hcmQvYnVpbGQvY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbGF5b3V0TmFtZTogXCJkZWZhdWx0XCIsXG4gICAgaW5wdXQ6IFwiXCJcbiAgfTtcblxuICBvbkNoYW5nZSA9IGlucHV0ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OiBpbnB1dFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiSW5wdXQgY2hhbmdlZFwiLCBpbnB1dCk7XG4gIH07XG5cbiAgb25LZXlQcmVzcyA9IGJ1dHRvbiA9PiB7XG4gICAgY29uc29sZS5sb2coXCJCdXR0b24gcHJlc3NlZFwiLCBidXR0b24pO1xuXG4gICAgLyoqXG4gICAgICogSWYgeW91IHdhbnQgdG8gaGFuZGxlIHRoZSBzaGlmdCBhbmQgY2FwcyBsb2NrIGJ1dHRvbnNcbiAgICAgKi9cbiAgICBpZiAoYnV0dG9uID09PSBcIntzaGlmdH1cIiB8fCBidXR0b24gPT09IFwie2xvY2t9XCIpIHRoaXMuaGFuZGxlU2hpZnQoKTtcbiAgfTtcblxuICBoYW5kbGVTaGlmdCA9ICgpID0+IHtcbiAgICBsZXQgbGF5b3V0TmFtZSA9IHRoaXMuc3RhdGUubGF5b3V0TmFtZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGF5b3V0TmFtZTogbGF5b3V0TmFtZSA9PT0gXCJkZWZhdWx0XCIgPyBcInNoaWZ0XCIgOiBcImRlZmF1bHRcIlxuICAgIH0pO1xuICB9O1xuXG4gIG9uQ2hhbmdlSW5wdXQgPSBldmVudCA9PiB7XG4gICAgbGV0IGlucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGlucHV0OiBpbnB1dFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5rZXlib2FyZC5zZXRJbnB1dChpbnB1dCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlRhcCBvbiB0aGUgdmlydHVhbCBrZXlib2FyZCB0byBzdGFydFwifVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMub25DaGFuZ2VJbnB1dChlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEtleWJvYXJkXG4gICAgICAgICAgcmVmPXtyID0+ICh0aGlzLmtleWJvYXJkID0gcil9XG4gICAgICAgICAgbGF5b3V0TmFtZT17dGhpcy5zdGF0ZS5sYXlvdXROYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dCA9PiB0aGlzLm9uQ2hhbmdlKGlucHV0KX1cbiAgICAgICAgICBvbktleVByZXNzPXtidXR0b24gPT4gdGhpcy5vbktleVByZXNzKGJ1dHRvbil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuIl19
})