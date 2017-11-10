webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Actions are typed objects passed to the redux reducer that manages state transformations\n// TODO: potentially break this file into multiple files, one for each reducer action-set\n\nexports.addMessage = addMessage;\nexports.hideConversation = hideConversation;\nexports.updateCodeEditor = updateCodeEditor;\nexports.updateCommand = updateCommand;\nexports.addExample = addExample;\nexports.deleteCommandExample = deleteCommandExample;\nexports.updateCommandExample = updateCommandExample;\nexports.addCommandArg = addCommandArg;\nexports.updateCommandArg = updateCommandArg;\nexports.deleteCommandArg = deleteCommandArg;\nexports.resetCommand = resetCommand;\nexports.storeCurrentInput = storeCurrentInput;\nexports.storeClassIndex = storeClassIndex;\nexports.clearClassIndex = clearClassIndex;\nexports.setDocs = setDocs;\nexports.setCodeEdit = setCodeEdit;\nexports.updateDocEvent = updateDocEvent;\nexports.updateFunc = updateFunc;\nexports.updateResults = updateResults;\nexports.addInputHistory = addInputHistory;\nexports.moveInputHistory = moveInputHistory;\nexports.updatePredictions = updatePredictions;\nexports.updateVariables = updateVariables;\nexports.toggleVariableAttributes = toggleVariableAttributes;\n\nvar _types = __webpack_require__(320);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// The conversation reducer governs display of main conversational window\n// This window contains multiple conversations, where each conversation is defined by a top-level command call\n\n// Add a message to the current conversation\nfunction addMessage(message) {\n    return _extends({\n        type: types.ADD_MESSAGE\n    }, message);\n}\n\n// Toggle whether a conversation is visible in the chat history\nfunction hideConversation(id) {\n    return {\n        type: types.HIDE_CONVERSATION,\n        id: id\n    };\n}\n\n// -----------------------------------------------\n\n// The commandEditPane reducer governs state for the commmand editing GUI\n\n// Update any field (name) of the command editor with a new value (value)\n// TODO: documentation of command editor state structure outside of reducer?\nfunction updateCodeEditor(name, value) {\n    return {\n        type: types.UPDATE_CODE_EDITOR,\n        value: value,\n        name: name\n    };\n}\n\n// Update the command source field\n// TODO: is this redundant with UpdateCodeEditor\nfunction updateCommand(command) {\n    return {\n        type: types.UPDATE_COMMAND,\n        command: command\n    };\n}\n\n// Append a new example field to the current command editor data\nfunction addExample() {\n    return {\n        type: types.ADD_COMMAND_EXAMPLE\n    };\n}\n\n// Delete a command example by its id (position in example list)\nfunction deleteCommandExample(id) {\n    return {\n        type: types.DELETE_COMMAND_EXAMPLE,\n        id: id\n    };\n}\n\n// Update a command example by its id\nfunction updateCommandExample(id, text) {\n    return {\n        type: types.UPDATE_COMMAND_EXAMPLE,\n        id: id,\n        text: text\n    };\n}\n\n// Append a new argument field to the current command editor data\nfunction addCommandArg() {\n    return {\n        type: types.ADD_COMMAND_ARG\n    };\n}\n\n// Update a command argument by its id (position in list of argument)\n// TODO: make contents of values more explicit\nfunction updateCommandArg(id, values) {\n    return {\n        type: types.UPDATE_COMMAND_ARG,\n        id: id,\n        values: values\n    };\n}\n\n// Delete a command argument by its id\nfunction deleteCommandArg(id) {\n    return {\n        type: types.DELETE_COMMAND_ARG,\n        id: id\n    };\n}\n\n// Clear the command edit pane\nfunction resetCommand() {\n    return {\n        type: types.RESET_COMMAND\n    };\n}\n\n// -----------------------------------------------\n\n// The currentInput reducer keeps track of the user input on the main conversational pane\n\n// Save a new value to the current user input\nfunction storeCurrentInput(input) {\n    return {\n        type: types.STORE_CURRENT_INPUT,\n        currentInput: input\n    };\n}\n\nfunction storeClassIndex(id) {\n    return {\n        type: types.STORE_CLASS_INDEX,\n        class_index: id\n    };\n}\n\nfunction clearClassIndex(id) {\n    return {\n        type: types.CLEAR_CLASS_INDEX\n    };\n}\n\n// -----------------------------------------------\n\n// The minimizeState reducer governs which panes are displayed in the GUI\n\n// Set visibility of docs window\n// TODO: pull out .docs to make explicit, also rename (it is a bool )\nfunction setDocs(message) {\n    return _extends({\n        type: types.SET_DOCS\n    }, message);\n}\n\n// Set visibility of command editor window\n// TODO: pull out .code_edit to make explicit, also rename (it is a bool value)\nfunction setCodeEdit(message) {\n    return _extends({\n        type: types.SET_CODE_EDIT\n    }, message);\n}\n\n// -----------------------------------------------\n\n// The docs reducer governs state for the documentation display window\n\n// Update the docs window with new text\n// TODO: pull out .doc to make explicit, and possible destructure that object as well\nfunction updateDocEvent(message) {\n    return _extends({\n        type: types.UPDATE_DOCS\n    }, message);\n}\n\n// -----------------------------------------------\n\n// The functionSearch reducer governs state for the function search component\n\n// Update the query given changes in user input text\n// TODO: rename and pull out .search to make explicit\nfunction updateFunc(message) {\n    return _extends({\n        type: types.UPDATE_FUNC\n    }, message);\n}\n\n// Update the search box with a list of results\n// TODO: pull out .results to make explicit\nfunction updateResults(message) {\n    return {\n        type: types.UPDATE_RESULTS,\n        results: message\n    };\n}\n\n// -----------------------------------------------\n\n// The inputHistory reducer governs state for the up-arrow, down-arrow command history log\n\n// Add a new message/command to the inputHistory\nfunction addInputHistory(message) {\n    return _extends({\n        type: types.ADD_INPUT_HISTORY\n    }, message);\n}\n// Move the input history in one direction or another (repopulating query box)\n// TODO: message contains .direction, make this explicit\nfunction moveInputHistory(message) {\n    return _extends({\n        type: types.MOVE_INPUT_HISTORY\n    }, message);\n}\n\n// -----------------------------------------------\n\n// the predictions reducer governs the hints that appear above the main user input\n\n// update with new set of hints\nfunction updatePredictions(predictions) {\n    return {\n        type: types.UPDATE_PREDICTIONS,\n        predictions: predictions\n    };\n}\n\n// -----------------------------------------------\n\n// the variables reducer governs the variables that appear right sidebar\n\n// update with new set of hints\nfunction updateVariables(variables) {\n    return {\n        type: types.UPDATE_VARIABLES,\n        variables: variables\n    };\n}\n\nfunction toggleVariableAttributes(index) {\n    return {\n        type: types.UPDATE_VARIABLES,\n        index: index\n    };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9pbmRleC5qcz8xMjM2Il0sIm5hbWVzIjpbImFkZE1lc3NhZ2UiLCJoaWRlQ29udmVyc2F0aW9uIiwidXBkYXRlQ29kZUVkaXRvciIsInVwZGF0ZUNvbW1hbmQiLCJhZGRFeGFtcGxlIiwiZGVsZXRlQ29tbWFuZEV4YW1wbGUiLCJ1cGRhdGVDb21tYW5kRXhhbXBsZSIsImFkZENvbW1hbmRBcmciLCJ1cGRhdGVDb21tYW5kQXJnIiwiZGVsZXRlQ29tbWFuZEFyZyIsInJlc2V0Q29tbWFuZCIsInN0b3JlQ3VycmVudElucHV0Iiwic3RvcmVDbGFzc0luZGV4IiwiY2xlYXJDbGFzc0luZGV4Iiwic2V0RG9jcyIsInNldENvZGVFZGl0IiwidXBkYXRlRG9jRXZlbnQiLCJ1cGRhdGVGdW5jIiwidXBkYXRlUmVzdWx0cyIsImFkZElucHV0SGlzdG9yeSIsIm1vdmVJbnB1dEhpc3RvcnkiLCJ1cGRhdGVQcmVkaWN0aW9ucyIsInVwZGF0ZVZhcmlhYmxlcyIsInRvZ2dsZVZhcmlhYmxlQXR0cmlidXRlcyIsInR5cGVzIiwibWVzc2FnZSIsInR5cGUiLCJBRERfTUVTU0FHRSIsImlkIiwiSElERV9DT05WRVJTQVRJT04iLCJuYW1lIiwidmFsdWUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJjb21tYW5kIiwiVVBEQVRFX0NPTU1BTkQiLCJBRERfQ09NTUFORF9FWEFNUExFIiwiREVMRVRFX0NPTU1BTkRfRVhBTVBMRSIsInRleHQiLCJVUERBVEVfQ09NTUFORF9FWEFNUExFIiwiQUREX0NPTU1BTkRfQVJHIiwidmFsdWVzIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwiREVMRVRFX0NPTU1BTkRfQVJHIiwiUkVTRVRfQ09NTUFORCIsImlucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsImN1cnJlbnRJbnB1dCIsIlNUT1JFX0NMQVNTX0lOREVYIiwiY2xhc3NfaW5kZXgiLCJDTEVBUl9DTEFTU19JTkRFWCIsIlNFVF9ET0NTIiwiU0VUX0NPREVfRURJVCIsIlVQREFURV9ET0NTIiwiVVBEQVRFX0ZVTkMiLCJVUERBVEVfUkVTVUxUUyIsInJlc3VsdHMiLCJBRERfSU5QVVRfSElTVE9SWSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsInByZWRpY3Rpb25zIiwiVVBEQVRFX1BSRURJQ1RJT05TIiwidmFyaWFibGVzIiwiVVBEQVRFX1ZBUklBQkxFUyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7a1FBQUE7QUFDQTs7UUFTZ0JBLFUsR0FBQUEsVTtRQVFBQyxnQixHQUFBQSxnQjtRQWFBQyxnQixHQUFBQSxnQjtRQVVBQyxhLEdBQUFBLGE7UUFRQUMsVSxHQUFBQSxVO1FBT0FDLG9CLEdBQUFBLG9CO1FBUUFDLG9CLEdBQUFBLG9CO1FBU0FDLGEsR0FBQUEsYTtRQVFBQyxnQixHQUFBQSxnQjtRQVNBQyxnQixHQUFBQSxnQjtRQVFBQyxZLEdBQUFBLFk7UUFXQUMsaUIsR0FBQUEsaUI7UUFPQUMsZSxHQUFBQSxlO1FBT0FDLGUsR0FBQUEsZTtRQVlBQyxPLEdBQUFBLE87UUFTQUMsVyxHQUFBQSxXO1FBYUFDLGMsR0FBQUEsYztRQWFBQyxVLEdBQUFBLFU7UUFTQUMsYSxHQUFBQSxhO1FBWUFDLGUsR0FBQUEsZTtRQVFBQyxnQixHQUFBQSxnQjtRQVlBQyxpQixHQUFBQSxpQjtRQVlBQyxlLEdBQUFBLGU7UUFPQUMsd0IsR0FBQUEsd0I7O0FBbk9oQjs7SUFBWUMsSzs7OztBQUdaO0FBQ0E7O0FBRUE7QUFDTyxTQUFTeEIsVUFBVCxDQUFvQnlCLE9BQXBCLEVBQTZCO0FBQ2hDO0FBQ0lDLGNBQU1GLE1BQU1HO0FBRGhCLE9BRU9GLE9BRlA7QUFJSDs7QUFFRDtBQUNPLFNBQVN4QixnQkFBVCxDQUEwQjJCLEVBQTFCLEVBQThCO0FBQ2pDLFdBQU87QUFDSEYsY0FBTUYsTUFBTUssaUJBRFQ7QUFFSEQ7QUFGRyxLQUFQO0FBSUg7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNPLFNBQVMxQixnQkFBVCxDQUEwQjRCLElBQTFCLEVBQWdD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T0FFTy9CLE9BRlA7QUFJSDtBQUNEO0FBQ0E7QUFDTyxTQUFTTCxnQkFBVCxDQUEwQkssT0FBMUIsRUFBbUM7QUFDdEM7QUFDSUMsY0FBTUYsTUFBTWlDO0FBRGhCLE9BRU9oQyxPQUZQO0FBSUg7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDTyxTQUFTSixpQkFBVCxDQUEyQnFDLFdBQTNCLEVBQXdDO0FBQzNDLFdBQU87QUFDSGhDLGNBQU1GLE1BQU1tQyxrQkFEVDtBQUVIRCxxQkFBYUE7QUFGVixLQUFQO0FBSUg7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDTyxTQUFTcEMsZUFBVCxDQUF5QnNDLFNBQXpCLEVBQW9DO0FBQ3ZDLFdBQU87QUFDSGxDLGNBQU1GLE1BQU1xQyxnQkFEVDtBQUVIRCxtQkFBV0E7QUFGUixLQUFQO0FBSUg7O0FBRU0sU0FBU3JDLHdCQUFULENBQWtDdUMsS0FBbEMsRUFBeUM7QUFDNUMsV0FBTztBQUNIcEMsY0FBTUYsTUFBTXFDLGdCQURUO0FBRUhDLGVBQU9BO0FBRkosS0FBUDtBQUlIIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWN0aW9ucyBhcmUgdHlwZWQgb2JqZWN0cyBwYXNzZWQgdG8gdGhlIHJlZHV4IHJlZHVjZXIgdGhhdCBtYW5hZ2VzIHN0YXRlIHRyYW5zZm9ybWF0aW9uc1xuLy8gVE9ETzogcG90ZW50aWFsbHkgYnJlYWsgdGhpcyBmaWxlIGludG8gbXVsdGlwbGUgZmlsZXMsIG9uZSBmb3IgZWFjaCByZWR1Y2VyIGFjdGlvbi1zZXRcblxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cblxuLy8gVGhlIGNvbnZlcnNhdGlvbiByZWR1Y2VyIGdvdmVybnMgZGlzcGxheSBvZiBtYWluIGNvbnZlcnNhdGlvbmFsIHdpbmRvd1xuLy8gVGhpcyB3aW5kb3cgY29udGFpbnMgbXVsdGlwbGUgY29udmVyc2F0aW9ucywgd2hlcmUgZWFjaCBjb252ZXJzYXRpb24gaXMgZGVmaW5lZCBieSBhIHRvcC1sZXZlbCBjb21tYW5kIGNhbGxcblxuLy8gQWRkIGEgbWVzc2FnZSB0byB0aGUgY3VycmVudCBjb252ZXJzYXRpb25cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BRERfTUVTU0FHRSxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbi8vIFRvZ2dsZSB3aGV0aGVyIGEgY29udmVyc2F0aW9uIGlzIHZpc2libGUgaW4gdGhlIGNoYXQgaGlzdG9yeVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVDb252ZXJzYXRpb24oaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ISURFX0NPTlZFUlNBVElPTixcbiAgICAgICAgaWRcbiAgICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGUgY29tbWFuZEVkaXRQYW5lIHJlZHVjZXIgZ292ZXJucyBzdGF0ZSBmb3IgdGhlIGNvbW1tYW5kIGVkaXRpbmcgR1VJXG5cbi8vIFVwZGF0ZSBhbnkgZmllbGQgKG5hbWUpIG9mIHRoZSBjb21tYW5kIGVkaXRvciB3aXRoIGEgbmV3IHZhbHVlICh2YWx1ZSlcbi8vIFRPRE86IGRvY3VtZW50YXRpb24gb2YgY29tbWFuZCBlZGl0b3Igc3RhdGUgc3RydWN0dXJlIG91dHNpZGUgb2YgcmVkdWNlcj9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb2RlRWRpdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0NPREVfRURJVE9SLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICB9O1xufVxuXG4vLyBVcGRhdGUgdGhlIGNvbW1hbmQgc291cmNlIGZpZWxkXG4vLyBUT0RPOiBpcyB0aGlzIHJlZHVuZGFudCB3aXRoIFVwZGF0ZUNvZGVFZGl0b3JcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb21tYW5kKGNvbW1hbmQpe1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlVQREFURV9DT01NQU5ELFxuICAgIGNvbW1hbmQ6IGNvbW1hbmRcbiAgfVxufVxuXG4vLyBBcHBlbmQgYSBuZXcgZXhhbXBsZSBmaWVsZCB0byB0aGUgY3VycmVudCBjb21tYW5kIGVkaXRvciBkYXRhXG5leHBvcnQgZnVuY3Rpb24gYWRkRXhhbXBsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ09NTUFORF9FWEFNUExFLFxuICAgIH07XG59XG5cbi8vIERlbGV0ZSBhIGNvbW1hbmQgZXhhbXBsZSBieSBpdHMgaWQgKHBvc2l0aW9uIGluIGV4YW1wbGUgbGlzdClcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb21tYW5kRXhhbXBsZShpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DT01NQU5EX0VYQU1QTEUsXG4gICAgICAgIGlkLFxuICAgIH07XG59XG5cbi8vIFVwZGF0ZSBhIGNvbW1hbmQgZXhhbXBsZSBieSBpdHMgaWRcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb21tYW5kRXhhbXBsZShpZCwgdGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9DT01NQU5EX0VYQU1QTEUsXG4gICAgICAgIGlkLFxuICAgICAgICB0ZXh0LFxuICAgIH07XG59XG5cbi8vIEFwcGVuZCBhIG5ldyBhcmd1bWVudCBmaWVsZCB0byB0aGUgY3VycmVudCBjb21tYW5kIGVkaXRvciBkYXRhXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29tbWFuZEFyZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ09NTUFORF9BUkcsXG4gICAgfTtcbn1cblxuLy8gVXBkYXRlIGEgY29tbWFuZCBhcmd1bWVudCBieSBpdHMgaWQgKHBvc2l0aW9uIGluIGxpc3Qgb2YgYXJndW1lbnQpXG4vLyBUT0RPOiBtYWtlIGNvbnRlbnRzIG9mIHZhbHVlcyBtb3JlIGV4cGxpY2l0XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29tbWFuZEFyZyhpZCwgdmFsdWVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0NPTU1BTkRfQVJHLFxuICAgICAgICBpZCxcbiAgICAgICAgdmFsdWVzOnZhbHVlc1xuICAgIH07XG59XG5cbi8vIERlbGV0ZSBhIGNvbW1hbmQgYXJndW1lbnQgYnkgaXRzIGlkXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tbWFuZEFyZyhpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DT01NQU5EX0FSRyxcbiAgICAgICAgaWQsXG4gICAgfTtcbn1cblxuLy8gQ2xlYXIgdGhlIGNvbW1hbmQgZWRpdCBwYW5lXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDb21tYW5kKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlJFU0VUX0NPTU1BTkQsXG4gICAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhlIGN1cnJlbnRJbnB1dCByZWR1Y2VyIGtlZXBzIHRyYWNrIG9mIHRoZSB1c2VyIGlucHV0IG9uIHRoZSBtYWluIGNvbnZlcnNhdGlvbmFsIHBhbmVcblxuLy8gU2F2ZSBhIG5ldyB2YWx1ZSB0byB0aGUgY3VycmVudCB1c2VyIGlucHV0XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5TVE9SRV9DVVJSRU5UX0lOUFVULFxuICAgICAgICBjdXJyZW50SW5wdXQ6IGlucHV0XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlQ2xhc3NJbmRleChpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlNUT1JFX0NMQVNTX0lOREVYLFxuICAgICAgICBjbGFzc19pbmRleDogaWRcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDbGFzc0luZGV4KGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQ0xFQVJfQ0xBU1NfSU5ERVgsXG4gICAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhlIG1pbmltaXplU3RhdGUgcmVkdWNlciBnb3Zlcm5zIHdoaWNoIHBhbmVzIGFyZSBkaXNwbGF5ZWQgaW4gdGhlIEdVSVxuXG4vLyBTZXQgdmlzaWJpbGl0eSBvZiBkb2NzIHdpbmRvd1xuLy8gVE9ETzogcHVsbCBvdXQgLmRvY3MgdG8gbWFrZSBleHBsaWNpdCwgYWxzbyByZW5hbWUgKGl0IGlzIGEgYm9vbCApXG5leHBvcnQgZnVuY3Rpb24gc2V0RG9jcyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuU0VUX0RPQ1MsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG4vLyBTZXQgdmlzaWJpbGl0eSBvZiBjb21tYW5kIGVkaXRvciB3aW5kb3dcbi8vIFRPRE86IHB1bGwgb3V0IC5jb2RlX2VkaXQgdG8gbWFrZSBleHBsaWNpdCwgYWxzbyByZW5hbWUgKGl0IGlzIGEgYm9vbCB2YWx1ZSlcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb2RlRWRpdChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuU0VUX0NPREVfRURJVCxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBkb2NzIHJlZHVjZXIgZ292ZXJucyBzdGF0ZSBmb3IgdGhlIGRvY3VtZW50YXRpb24gZGlzcGxheSB3aW5kb3dcblxuLy8gVXBkYXRlIHRoZSBkb2NzIHdpbmRvdyB3aXRoIG5ldyB0ZXh0XG4vLyBUT0RPOiBwdWxsIG91dCAuZG9jIHRvIG1ha2UgZXhwbGljaXQsIGFuZCBwb3NzaWJsZSBkZXN0cnVjdHVyZSB0aGF0IG9iamVjdCBhcyB3ZWxsXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRG9jRXZlbnQobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9ET0NTLFxuICAgICAgICAuLi5tZXNzYWdlXG4gICAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhlIGZ1bmN0aW9uU2VhcmNoIHJlZHVjZXIgZ292ZXJucyBzdGF0ZSBmb3IgdGhlIGZ1bmN0aW9uIHNlYXJjaCBjb21wb25lbnRcblxuLy8gVXBkYXRlIHRoZSBxdWVyeSBnaXZlbiBjaGFuZ2VzIGluIHVzZXIgaW5wdXQgdGV4dFxuLy8gVE9ETzogcmVuYW1lIGFuZCBwdWxsIG91dCAuc2VhcmNoIHRvIG1ha2UgZXhwbGljaXRcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGdW5jKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfRlVOQyxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbi8vIFVwZGF0ZSB0aGUgc2VhcmNoIGJveCB3aXRoIGEgbGlzdCBvZiByZXN1bHRzXG4vLyBUT0RPOiBwdWxsIG91dCAucmVzdWx0cyB0byBtYWtlIGV4cGxpY2l0XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVzdWx0cyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX1JFU1VMVFMsXG4gICAgICAgIHJlc3VsdHM6IG1lc3NhZ2VcbiAgICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGUgaW5wdXRIaXN0b3J5IHJlZHVjZXIgZ292ZXJucyBzdGF0ZSBmb3IgdGhlIHVwLWFycm93LCBkb3duLWFycm93IGNvbW1hbmQgaGlzdG9yeSBsb2dcblxuLy8gQWRkIGEgbmV3IG1lc3NhZ2UvY29tbWFuZCB0byB0aGUgaW5wdXRIaXN0b3J5XG5leHBvcnQgZnVuY3Rpb24gYWRkSW5wdXRIaXN0b3J5KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BRERfSU5QVVRfSElTVE9SWSxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG4vLyBNb3ZlIHRoZSBpbnB1dCBoaXN0b3J5IGluIG9uZSBkaXJlY3Rpb24gb3IgYW5vdGhlciAocmVwb3B1bGF0aW5nIHF1ZXJ5IGJveClcbi8vIFRPRE86IG1lc3NhZ2UgY29udGFpbnMgLmRpcmVjdGlvbiwgbWFrZSB0aGlzIGV4cGxpY2l0XG5leHBvcnQgZnVuY3Rpb24gbW92ZUlucHV0SGlzdG9yeShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTU9WRV9JTlBVVF9ISVNUT1JZLFxuICAgICAgICAuLi5tZXNzYWdlXG4gICAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdGhlIHByZWRpY3Rpb25zIHJlZHVjZXIgZ292ZXJucyB0aGUgaGludHMgdGhhdCBhcHBlYXIgYWJvdmUgdGhlIG1haW4gdXNlciBpbnB1dFxuXG4vLyB1cGRhdGUgd2l0aCBuZXcgc2V0IG9mIGhpbnRzXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJlZGljdGlvbnMocHJlZGljdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUFJFRElDVElPTlMsXG4gICAgICAgIHByZWRpY3Rpb25zOiBwcmVkaWN0aW9uc1xuICAgIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRoZSB2YXJpYWJsZXMgcmVkdWNlciBnb3Zlcm5zIHRoZSB2YXJpYWJsZXMgdGhhdCBhcHBlYXIgcmlnaHQgc2lkZWJhclxuXG4vLyB1cGRhdGUgd2l0aCBuZXcgc2V0IG9mIGhpbnRzXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9WQVJJQUJMRVMsXG4gICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVZhcmlhYmxlQXR0cmlidXRlcyhpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9WQVJJQUJMRVMsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYWN0aW9ucy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})