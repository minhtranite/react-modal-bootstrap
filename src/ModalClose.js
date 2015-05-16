var React = require('react');

var ModalClose = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      onClick: function () {
      }
    };
  },
  render: function () {
    return (
      <button type="button" className="close" aria-label="Close"
        onClick={this.props.onClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    );
  }
});

module.exports = ModalClose;
