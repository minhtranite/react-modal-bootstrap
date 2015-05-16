var React = require('react/addons');
var ClassNames = require('classnames');

var Modal = React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool.isRequired,
    backdrop: React.PropTypes.bool,
    keyboard: React.PropTypes.bool,
    onRequestHide: React.PropTypes.func,
    size: React.PropTypes.oneOf(['modal-lg', 'modal-sm', '']),
    children: React.PropTypes.node.isRequired
  },
  getDefaultProps: function () {
    return {
      isOpen: false,
      backdrop: true,
      keyboard: true,
      onRequestHide: function () {
      },
      size: ''
    };
  },
  componentDidMount: function () {
    React.findDOMNode(this.refs.backDrop).addEventListener('click', this.handleBackDropClick);
    React.findDOMNode(this.refs.dialog).addEventListener('focus', this.handleFocus);
    React.findDOMNode(this.refs.dialog).addEventListener('blur', this.handleBlur);
    document.addEventListener('keydown', this.handleKeyDown);
  },
  componentWillUnmount: function () {
    React.findDOMNode(this.refs.backDrop).removeEventListener('click', this.handleBackDropClick);
    React.findDOMNode(this.refs.dialog).removeEventListener('focus', this.handleFocus);
    React.findDOMNode(this.refs.dialog).removeEventListener('blur', this.handleBlur);
    document.removeEventListener('keydown', this.handleKeyDown);
  },
  componentDidUpdate: function () {
    this.handleBody();
  },
  requestHide: function () {
    this.props.onRequestHide();
  },
  handleBackDropClick: function (e) {
    if (e.target !== e.currentTarget) return;
    if (this.props.backdrop) {
      this.requestHide();
    }
  },
  handleFocus: function () {
    this.focus = true;
  },
  handleBlur: function () {
    this.focus = false;
  },
  handleKeyDown: function (e) {
    if (this.props.keyboard && this.focus && e.keyCode === 27) {
      this.requestHide();
    }
  },
  handleBody: function () {
    var modalsOpen = document.getElementsByClassName('modal-backdrop-open');
    if (modalsOpen.length < 1) {
      document.body.className = document.body.className.replace(/ ?modal-open/, '');
    } else {
      if (document.body.className.indexOf('modal-open') === -1) {
        document.body.className += document.body.className.length ? ' modal-open' : 'modal-open';
      }
    }
  },
  render: function () {
    var backDropClass = ClassNames({
      'modal-backdrop': true,
      'modal-backdrop-open': this.props.isOpen
    });
    var dialogClass = ClassNames({
      'modal-dialog': true,
      'modal-dialog-open': this.props.isOpen
    }, this.props.size);
    return (
      <div className='react-modal-wrapper'>
        <div className={backDropClass} ref='backDrop'>
          <div className={dialogClass} tabIndex='-1' ref='dialog'>
            <div className="modal-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Modal;
