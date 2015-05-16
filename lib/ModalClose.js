"use strict";

var React = require("react");

var ModalClose = React.createClass({
  displayName: "ModalClose",

  propTypes: {
    onClick: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onClick: function onClick() {}
    };
  },
  render: function render() {
    return React.createElement(
      "button",
      { type: "button", className: "close", "aria-label": "Close",
        onClick: this.props.onClick },
      React.createElement(
        "span",
        { "aria-hidden": "true" },
        "×"
      )
    );
  }
});

module.exports = ModalClose;