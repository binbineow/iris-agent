webpackHotUpdate(0,{

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _RightPane = __webpack_require__(505);\n\nvar _RightPane2 = _interopRequireDefault(_RightPane);\n\nvar _CommandEdit = __webpack_require__(493);\n\nvar _CommandEdit2 = _interopRequireDefault(_CommandEdit);\n\nvar _reactSplitPane = __webpack_require__(292);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nvar _index = __webpack_require__(43);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// App defines the main application structure\n// routes will be rendered as \"children\"\n// TODO: only one route now, remove?\nvar App = function App(_ref) {\n  var children = _ref.children,\n      minimizeState = _ref.minimizeState;\n\n  var codeEditPaneSize = void 0;\n  if (minimizeState.code_edit === true) {\n    codeEditPaneSize = \"0%\";\n  } else {\n    codeEditPaneSize = \"50%\";\n  }\n  return _react2.default.createElement(\n    _reactSplitPane2.default,\n    { className: 'window', split: 'vertical', primary: 'second', defaultSize: '400', minSize: '400' },\n    _react2.default.createElement(\n      _reactSplitPane2.default,\n      { split: 'horizontal', primary: 'second', size: codeEditPaneSize, allowResize: true },\n      children,\n      _react2.default.createElement(_CommandEdit2.default, null)\n    ),\n    _react2.default.createElement(_RightPane2.default, null)\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    minimizeState: state.minimizeState\n  };\n};\n\nApp = (0, _reactRedux.connect)(mapStateToProps)(App);\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAuanM/MDU2ZiJdLCJuYW1lcyI6WyJBcHAiLCJjaGlsZHJlbiIsIm1pbmltaXplU3RhdGUiLCJjb2RlRWRpdFBhbmVTaXplIiwiY29kZV9lZGl0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxNQUFNLG1CQUFpQztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUN6QyxNQUFJQyx5QkFBSjtBQUNBLE1BQUlELGNBQWNFLFNBQWQsS0FBNEIsSUFBaEMsRUFBc0M7QUFBRUQsdUJBQW1CLElBQW5CO0FBQTBCLEdBQWxFLE1BQ0s7QUFBRUEsdUJBQW1CLEtBQW5CO0FBQTJCO0FBQ2xDLFNBQVE7QUFBQTtBQUFBLE1BQVcsV0FBVSxRQUFyQixFQUE4QixPQUFNLFVBQXBDLEVBQStDLFNBQVEsUUFBdkQsRUFBZ0UsYUFBWSxLQUE1RSxFQUFrRixTQUFRLEtBQTFGO0FBQ047QUFBQTtBQUFBLFFBQVcsT0FBTSxZQUFqQixFQUE4QixTQUFRLFFBQXRDLEVBQStDLE1BQU1BLGdCQUFyRCxFQUF1RSxhQUFhLElBQXBGO0FBQ0lGLGNBREo7QUFFRTtBQUZGLEtBRE07QUFLTjtBQUxNLEdBQVI7QUFPRCxDQVhEOztBQWFBLElBQU1JLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENKLG1CQUFlSSxNQUFNSjtBQURXLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQUYsTUFBTSx5QkFBUUssZUFBUixFQUF5QkwsR0FBekIsQ0FBTjs7a0JBRWVBLEciLCJmaWxlIjoiNDg5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmlnaHRQYW5lIGZyb20gJy4vUmlnaHRQYW5lJztcbmltcG9ydCBDb21tYW5kRWRpdCBmcm9tICcuL0NvbW1hbmRFZGl0JztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5pbXBvcnQgeyBzZXRDb2RlRWRpdCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG4vLyBBcHAgZGVmaW5lcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBzdHJ1Y3R1cmVcbi8vIHJvdXRlcyB3aWxsIGJlIHJlbmRlcmVkIGFzIFwiY2hpbGRyZW5cIlxuLy8gVE9ETzogb25seSBvbmUgcm91dGUgbm93LCByZW1vdmU/XG5sZXQgQXBwID0gKHsgY2hpbGRyZW4sIG1pbmltaXplU3RhdGUgfSkgPT4ge1xuICBsZXQgY29kZUVkaXRQYW5lU2l6ZTtcbiAgaWYgKG1pbmltaXplU3RhdGUuY29kZV9lZGl0ID09PSB0cnVlKSB7IGNvZGVFZGl0UGFuZVNpemUgPSBcIjAlXCI7IH1cbiAgZWxzZSB7IGNvZGVFZGl0UGFuZVNpemUgPSBcIjUwJVwiOyB9XG4gIHJldHVybiAoPFNwbGl0UGFuZSBjbGFzc05hbWU9XCJ3aW5kb3dcIiBzcGxpdD1cInZlcnRpY2FsXCIgcHJpbWFyeT1cInNlY29uZFwiIGRlZmF1bHRTaXplPVwiNDAwXCIgbWluU2l6ZT1cIjQwMFwiPlxuICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgcHJpbWFyeT1cInNlY29uZFwiIHNpemU9e2NvZGVFZGl0UGFuZVNpemV9IGFsbG93UmVzaXplPXt0cnVlfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPENvbW1hbmRFZGl0IC8+XG4gICAgPC9TcGxpdFBhbmU+XG4gICAgPFJpZ2h0UGFuZSAvPlxuICA8L1NwbGl0UGFuZT4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIG1pbmltaXplU3RhdGU6IHN0YXRlLm1pbmltaXplU3RhdGVcbn0pO1xuXG5BcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})