webpackHotUpdate(0,{

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(433);\n\nvar _redux = __webpack_require__(296);\n\nvar _types = __webpack_require__(314);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// TODO: a bit confused why we need this function\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\nvar appendMessages = function appendMessages(oldMessages, action) {\n    // text, origin = 'user', type = null, arg = null) => {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        case types.ADD_SERVER_MESSAGE:\n            console.log(\"SERVER!!!\", action);\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\nvar removeIndex = function removeIndex(arr, i) {\n    var first_half = arr.concat([]).slice(0, i);\n    var second_half = arr.concat([]).slice(i + 1, arr.length);\n    return first_half.concat(second_half);\n};\n\nvar blankCommand = { name: '', title: '', args: [], examples: [], command: '', explanation: '', testInput: '', preview: '', error: '' };\n\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, blankCommand);\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_CODE_EDITOR:\n            var new_state = {};\n            new_state[action.name] = action.value;\n            return _extends({}, state, new_state);\n        case types.UPDATE_COMMAND:\n            console.log(_extends({}, state, action.command));\n            return _extends({}, state, action.command);\n        case types.ADD_COMMAND_ARG:\n            return _extends({}, state, { args: state.args.concat([{ 'arg_name': '', 'arg_type': '', 'arg_string': '' }]) });\n        case types.RESET_COMMAND:\n            return _extends({}, state, blankCommand);\n        case types.ADD_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: state.examples.concat(['']) });\n        case types.UPDATE_COMMAND_EXAMPLE:\n            var newExamples = state.examples.concat([]);\n            newExamples[action.id] = action.text;\n            return _extends({}, state, { examples: newExamples });\n        case types.UPDATE_COMMAND_ARG:\n            var newArgs = state.args.concat([]);\n            newArgs[action.id] = action.values;\n            return _extends({}, state, { args: newArgs });\n        case types.DELETE_COMMAND_ARG:\n            return _extends({}, state, { args: removeIndex(state.args, action.id) });\n        case types.DELETE_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: removeIndex(state.examples, action.id) });\n        default:\n            return state;\n    }\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\n// combine all these reducers together\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJjb2RlX2VkaXQiLCJyZW1vdmVJbmRleCIsImFyciIsImkiLCJmaXJzdF9oYWxmIiwic2xpY2UiLCJzZWNvbmRfaGFsZiIsImJsYW5rQ29tbWFuZCIsIm5hbWUiLCJjb21tYW5kIiwiZXhwbGFuYXRpb24iLCJ0ZXN0SW5wdXQiLCJwcmV2aWV3IiwiZXJyb3IiLCJjb21tYW5kRWRpdFBhbmUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJuZXdfc3RhdGUiLCJVUERBVEVfQ09NTUFORCIsIkFERF9DT01NQU5EX0FSRyIsIlJFU0VUX0NPTU1BTkQiLCJBRERfQ09NTUFORF9FWEFNUExFIiwiVVBEQVRFX0NPTU1BTkRfRVhBTVBMRSIsIm5ld0V4YW1wbGVzIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwibmV3QXJncyIsInZhbHVlcyIsIkRFTEVURV9DT01NQU5EX0FSRyIsIkRFTEVURV9DT01NQU5EX0VYQU1QTEUiLCJpbnB1dEhpc3RvcnkiLCJuZXdJZCIsIkFERF9JTlBVVF9ISVNUT1JZIiwiY3VycklkIiwibWVzc2FnZSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsImRpcmVjdGlvbiIsInJvb3RSZWR1Y2VyIiwicm91dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsQzs7Ozs7O0FBRVo7QUFDQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLFVBQVVDLFNBQWQsRUFBeUI7QUFDckIsZUFBT0QsS0FBUDtBQUNIO0FBQ0QsV0FBTyxJQUFQO0FBQ0gsQ0FMRDs7QUFPQSxJQUFNRSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLFdBQUQsRUFBY0MsTUFBZCxFQUF5QjtBQUFFO0FBQzlDLFFBQU1DLGNBQWMsRUFBcEI7QUFDQSxRQUFJQyxhQUFhLENBQWpCO0FBQ0EsUUFBSUgsWUFBWUksTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUN4QkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CWCxFQUFFWSxHQUFGLENBQU1QLFdBQU4sRUFBbUIsVUFBU1EsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLEVBQUVDLEVBQVQ7QUFBYyxTQUEvQyxDQUFuQjtBQUNBTixxQkFBYVIsRUFBRWUsR0FB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RUFBK0I7QUFDM0Isb0JBQUlMLFFBQVN6RSxNQUFNUyxPQUFOLENBQWNuQixNQUFkLEdBQXVCLENBQXBDLEVBQXdDO0FBQ3BDbUYsNkJBQVMsQ0FBVDtBQUNIO0FBQ0osYUFKRCxNQUlPO0FBQ0gsb0JBQUlBLFNBQVMsQ0FBYixFQUFnQjtBQUNaQSw2QkFBUyxDQUFUO0FBQ0g7QUFDSjtBQUNELGdDQUFXekUsS0FBWCxJQUFrQixVQUFVeUUsS0FBNUI7QUFDSjtBQUNJLG1CQUFPekUsS0FBUDtBQXZCUjtBQXlCSCxDQTNCRDs7QUE2QkE7QUFDQSxJQUFNK0UsY0FBYyw0QkFBZ0I7QUFDaEN2RSw4QkFEZ0M7QUFFaENnQix3QkFGZ0M7QUFHaENFLDRCQUhnQztBQUloQzhDLDhCQUpnQztBQUtoQ2pDLDhCQUxnQztBQU1oQ1gsY0FOZ0M7QUFPaENNLGtDQVBnQztBQVFoQ08sZ0NBUmdDO0FBU2hDaUIsb0NBVGdDO0FBVWhDc0I7QUFWZ0MsQ0FBaEIsQ0FBcEI7O2tCQWFlRCxXIiwiZmlsZSI6IjUxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuLy8gVE9ETzogYSBiaXQgY29uZnVzZWQgd2h5IHdlIG5lZWQgdGhpcyBmdW5jdGlvblxuY29uc3QgdmFsdWVPck51bGwgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgYXBwZW5kTWVzc2FnZXMgPSAob2xkTWVzc2FnZXMsIGFjdGlvbikgPT4geyAvLyB0ZXh0LCBvcmlnaW4gPSAndXNlcicsIHR5cGUgPSBudWxsLCBhcmcgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1heCA9IDA7XG4gICAgaWYgKG9sZE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcCcsIF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgICAgIGN1cnJlbnRNYXggPSBfLm1heChfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG0gb2YgYWN0aW9uLnRleHQpIHtcbiAgICAgICAgY3VycmVudE1heCsrO1xuICAgICAgICBuZXdNZXNzYWdlcy5wdXNoKHsnb3JpZ2luJzogYWN0aW9uLm9yaWdpbiwgJ3RleHQnOiBtLCAnaWQnOiBjdXJyZW50TWF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiB2YWx1ZU9yTnVsbChhY3Rpb24uc3RhdGUpLCAnYXJnJzogdmFsdWVPck51bGwoYWN0aW9uLmFyZyl9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZE1lc3NhZ2VzLmNvbmNhdChuZXdNZXNzYWdlcyk7XG59O1xuXG5jb25zdCBhcHBlbmRNZXNzYWdlc0NvbnZvID0gKGNvbnZvLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBjb252bztcbiAgICByZXR1cm4geyAuLi5jb252bywgbWVzc2FnZXM6IGFwcGVuZE1lc3NhZ2VzKG1lc3NhZ2VzLCBhY3Rpb24pLCBhcmdzOiBhY3Rpb24uYXJnX21hcCB9O1xufTtcblxuY29uc3QgY29udmVyc2F0aW9uID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IDAsICdhcmdzJzoge30gfSwgJ3N0YXRlJzogJ1NUQVJUJ30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSwgY3VycmVudENvbnZvIH0gPSBzdGF0ZTtcbiAgICBsZXQgbmV3Q29udm87XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ISVNUT1JZOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8pO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmNvbnZlcnNhdGlvbi5oaXN0b3J5LCBjdXJyZW50Q29udm86IGFjdGlvbi5jb252ZXJzYXRpb24uY3VycmVudENvbnZvLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9NRVNTQUdFOlxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKSwgJ3N0YXRlJzogc3RhdGUuc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfU0VSVkVSX01FU1NBR0U6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFUlZFUiEhIVwiLCBhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi50ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0NvbnZvID0gYXBwZW5kTWVzc2FnZXNDb252byhjdXJyZW50Q29udm8sIGFjdGlvbik7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnN0YXRlID09PSAnU1RBUlQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFyZGNvZGluZyBzb21lIGxvZ2ljIGhlcmUgZm9yIHN5bmNpbmcgaGlzdG9yeSB3aXRoIHNlcnZlciBvbiBTVEFSVFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgYWxsb3dzIHNvbWUgY29tbWFuZHMgdG8gb3ZlcndyaXRlIGhpc3RvcnkgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICBsZXQgdGhlSWQgPSBhY3Rpb24uaGlzdG9yeS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbmV3Q29udm8gPSB7Li4ubmV3Q29udm8sIHRpdGxlOiBhY3Rpb24ubGFiZWwsIGlkOiB0aGVJZCB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IGFjdGlvbi5oaXN0b3J5LmNvbmNhdChbbmV3Q29udm9dKSwgJ2N1cnJlbnRDb252byc6IHsgJ21lc3NhZ2VzJzogW10sICd0aXRsZSc6IG51bGwsICdoaWRkZW4nOiBmYWxzZSwgJ2lkJzogbmV3Q29udm8uaWQgKyAxLCAnYXJncyc6IHt9IH0sIHN0YXRlOiAnU1RBUlQnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5LCBjdXJyZW50Q29udm86IG5ld0NvbnZvLCBzdGF0ZTogYWN0aW9uLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuSElERV9DT05WRVJTQVRJT046XG4gICAgICAgICAgICBjb25zdCBuZXdIaXN0b3J5ID0gXy5tYXAoaGlzdG9yeSwgY29udiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gey4uLmNvbnZ9O1xuICAgICAgICAgICAgICAgIGlmIChjb252LmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LmhpZGRlbiA9ICFvdXQuaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdDb252byA9IHsuLi5jdXJyZW50Q29udm99O1xuICAgICAgICAgICAgaWYgKG5ld0NvbnZvLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICBuZXdDb252by5oaWRkZW4gPSAhbmV3Q29udm8uaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogbmV3SGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IHN0YXRlLnN0YXRlfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCB2YXJpYWJsZXMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9WQVJJQUJMRVM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnZhcmlhYmxlcztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBwcmVkaWN0aW9ucyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BSRURJQ1RJT05TOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wcmVkaWN0aW9ucztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBkb2NzID0gKHN0YXRlID0ge3RpdGxlOiAnJywgZXhhbXBsZXM6IFtdLCBkZXNjcmlwdGlvbjogW10sIHNvdXJjZTonJ30sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfRE9DUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZG9jO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGZ1bmN0aW9uU2VhcmNoID0gKHN0YXRlID0ge3NlYXJjaDogJycsIHJlc3VsdHM6IFtdfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0ZVTkM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBzZWFyY2g6IGFjdGlvbi5zZWFyY2h9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX1JFU1VMVFM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCByZXN1bHRzOiBhY3Rpb24ucmVzdWx0c307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgY3VycmVudElucHV0ID0gKHN0YXRlID0geydpbnB1dCc6ICcnfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuU1RPUkVfQ1VSUkVOVF9JTlBVVDpcbiAgICAgIHJldHVybiB7J2lucHV0JzogYWN0aW9uLmN1cnJlbnRJbnB1dH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgbWluaW1pemVTdGF0ZSA9IChzdGF0ZT17J2RvY3MnOiB0cnVlLCAnY29kZV9lZGl0Jzp0cnVlfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuU0VUX0RPQ1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAnZG9jcyc6IGFjdGlvbi5kb2NzfTtcbiAgICBjYXNlIHR5cGVzLlNFVF9DT0RFX0VESVQ6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAnY29kZV9lZGl0JzogYWN0aW9uLmNvZGVfZWRpdH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlSW5kZXggPSAoYXJyLCBpKSA9PiB7XG4gIGxldCBmaXJzdF9oYWxmID0gYXJyLmNvbmNhdChbXSkuc2xpY2UoMCwgaSk7XG4gIGxldCBzZWNvbmRfaGFsZiA9IGFyci5jb25jYXQoW10pLnNsaWNlKGkrMSxhcnIubGVuZ3RoKTtcbiAgcmV0dXJuIGZpcnN0X2hhbGYuY29uY2F0KHNlY29uZF9oYWxmKTtcbn1cblxuY29uc3QgYmxhbmtDb21tYW5kID0ge25hbWU6ICcnLCB0aXRsZTogJycsIGFyZ3M6IFtdLCBleGFtcGxlczogW10sIGNvbW1hbmQ6ICcnLCBleHBsYW5hdGlvbjogJycsIHRlc3RJbnB1dDogJycsIHByZXZpZXc6JycsIGVycm9yOiAnJ307XG5cbmNvbnN0IGNvbW1hbmRFZGl0UGFuZSA9IChzdGF0ZT17Li4uYmxhbmtDb21tYW5kfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0NPREVfRURJVE9SOlxuICAgICAgbGV0IG5ld19zdGF0ZSA9IHt9O1xuICAgICAgbmV3X3N0YXRlW2FjdGlvbi5uYW1lXSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLm5ld19zdGF0ZX07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09NTUFORDpcbiAgICAgIGNvbnNvbGUubG9nKHsuLi5zdGF0ZSwgLi4uYWN0aW9uLmNvbW1hbmR9KTtcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5jb21tYW5kfTtcbiAgICBjYXNlIHR5cGVzLkFERF9DT01NQU5EX0FSRzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGFyZ3M6IHN0YXRlLmFyZ3MuY29uY2F0KFt7J2FyZ19uYW1lJzogJycsICdhcmdfdHlwZSc6ICcnLCAnYXJnX3N0cmluZyc6ICcnfV0pfTtcbiAgICBjYXNlIHR5cGVzLlJFU0VUX0NPTU1BTkQ6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5ibGFua0NvbW1hbmR9O1xuICAgIGNhc2UgdHlwZXMuQUREX0NPTU1BTkRfRVhBTVBMRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4YW1wbGVzOiBzdGF0ZS5leGFtcGxlcy5jb25jYXQoWycnXSl9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0NPTU1BTkRfRVhBTVBMRTpcbiAgICAgIGxldCBuZXdFeGFtcGxlcyA9IHN0YXRlLmV4YW1wbGVzLmNvbmNhdChbXSk7XG4gICAgICBuZXdFeGFtcGxlc1thY3Rpb24uaWRdID0gYWN0aW9uLnRleHQ7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBleGFtcGxlczogbmV3RXhhbXBsZXN9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0NPTU1BTkRfQVJHOlxuICAgICAgbGV0IG5ld0FyZ3MgPSBzdGF0ZS5hcmdzLmNvbmNhdChbXSk7XG4gICAgICBuZXdBcmdzW2FjdGlvbi5pZF0gPSBhY3Rpb24udmFsdWVzO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogbmV3QXJnc307XG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfQ09NTUFORF9BUkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBhcmdzOiByZW1vdmVJbmRleChzdGF0ZS5hcmdzLCBhY3Rpb24uaWQpfTtcbiAgICBjYXNlIHR5cGVzLkRFTEVURV9DT01NQU5EX0VYQU1QTEU6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBleGFtcGxlczogcmVtb3ZlSW5kZXgoc3RhdGUuZXhhbXBsZXMsIGFjdGlvbi5pZCl9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IGlucHV0SGlzdG9yeSA9IChzdGF0ZSA9IHsnaGlzdG9yeSc6IFtdLCAnY3VycklkJzogbnVsbCwgJ3Nob3dIaXN0b3J5JzogZmFsc2UgfSwgYWN0aW9uKSA9PiB7XG4gICAgbGV0IG5ld0lkO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfSU5QVVRfSElTVE9SWTpcbiAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkO1xuICAgICAgICAgICAgaWYgKHN0YXRlLmhpc3RvcnkubGVuZ3RoID09PSAwICYmIG5ld0lkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3SWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2hpc3RvcnknOiBbLi4uc3RhdGUuaGlzdG9yeSwgYWN0aW9uLm1lc3NhZ2VdLCAnY3VycklkJzogbmV3SWR9O1xuICAgICAgICBjYXNlIHR5cGVzLk1PVkVfSU5QVVRfSElTVE9SWTpcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkIHx8IDA7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdJZCA8IChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0lkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdjdXJySWQnOiBuZXdJZCB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbi8vIGNvbWJpbmUgYWxsIHRoZXNlIHJlZHVjZXJzIHRvZ2V0aGVyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY29udmVyc2F0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgICBwcmVkaWN0aW9ucyxcbiAgICBpbnB1dEhpc3RvcnksXG4gICAgY3VycmVudElucHV0LFxuICAgIGRvY3MsXG4gICAgZnVuY3Rpb25TZWFyY2gsXG4gICAgbWluaW1pemVTdGF0ZSxcbiAgICBjb21tYW5kRWRpdFBhbmUsXG4gICAgcm91dGluZ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JlZHVjZXJzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})