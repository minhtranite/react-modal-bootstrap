'use strict';

var React = require('react/addons');
var ClassNames = require('classnames');

var Modal = React.createClass({
  displayName: 'Modal',

  propTypes: {
    isOpen: React.PropTypes.bool.isRequired,
    backdrop: React.PropTypes.bool,
    keyboard: React.PropTypes.bool,
    onRequestHide: React.PropTypes.func,
    size: React.PropTypes.oneOf(['modal-lg', 'modal-sm', '']),
    children: React.PropTypes.node.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      isOpen: false,
      backdrop: true,
      keyboard: true,
      onRequestHide: function onRequestHide() {},
      size: ''
    };
  },
  componentDidMount: function componentDidMount() {
    React.findDOMNode(this.refs.backDrop).addEventListener('click', this.handleBackDropClick);
    React.findDOMNode(this.refs.dialog).addEventListener('focus', this.handleFocus);
    React.findDOMNode(this.refs.dialog).addEventListener('blur', this.handleBlur);
    document.addEventListener('keydown', this.handleKeyDown);
  },
  componentWillUnmount: function componentWillUnmount() {
    React.findDOMNode(this.refs.backDrop).removeEventListener('click', this.handleBackDropClick);
    React.findDOMNode(this.refs.dialog).removeEventListener('focus', this.handleFocus);
    React.findDOMNode(this.refs.dialog).removeEventListener('blur', this.handleBlur);
    document.removeEventListener('keydown', this.handleKeyDown);
  },
  componentDidUpdate: function componentDidUpdate() {
    this.handleBody();
  },
  requestHide: function requestHide() {
    this.props.onRequestHide();
  },
  handleBackDropClick: function handleBackDropClick(e) {
    if (e.target !== e.currentTarget) return;
    if (this.props.backdrop) {
      this.requestHide();
    }
  },
  handleFocus: function handleFocus() {
    this.focus = true;
  },
  handleBlur: function handleBlur() {
    this.focus = false;
  },
  handleKeyDown: function handleKeyDown(e) {
    if (this.props.keyboard && this.focus && e.keyCode === 27) {
      this.requestHide();
    }
  },
  handleBody: function handleBody() {
    var modalsOpen = document.getElementsByClassName('modal-backdrop-open');
    if (modalsOpen.length < 1) {
      document.body.className = document.body.className.replace(/ ?modal-open/, '');
    } else {
      if (document.body.className.indexOf('modal-open') === -1) {
        document.body.className += document.body.className.length ? ' modal-open' : 'modal-open';
      }
    }
  },
  render: function render() {
    var backDropClass = ClassNames({
      'modal-backdrop': true,
      'modal-backdrop-open': this.props.isOpen
    });
    var dialogClass = ClassNames({
      'modal-dialog': true,
      'modal-dialog-open': this.props.isOpen
    }, this.props.size);
    return React.createElement(
      'div',
      { className: 'react-modal-wrapper' },
      React.createElement(
        'div',
        { className: backDropClass, ref: 'backDrop' },
        React.createElement(
          'div',
          { className: dialogClass, tabIndex: '-1', ref: 'dialog' },
          React.createElement(
            'div',
            { className: 'modal-content' },
            this.props.children
          )
        )
      )
    );
  }
});

module.exports = Modal;