"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var modals = [];

var Store = {
  createModal: function createModal() {
    var isOpen = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    modals.push(isOpen);
    return modals.length - 1;
  },
  getState: function getState(index) {
    if (modals.indexOf(index) === -1) {
      return false;
    }
    return modals[index];
  },
  setState: function setState(index, value) {
    modals[index] = value;
  }
};

exports["default"] = Store;
module.exports = exports["default"];