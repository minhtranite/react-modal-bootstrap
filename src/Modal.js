import React from 'react';
import ClassNames from 'classnames';
import Radium from 'radium';
import Store from './Store.js';
import ObjectAssign from 'object-assign';

@Radium class Modal extends React.Component {
  static propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    backdrop: React.PropTypes.bool,
    keyboard: React.PropTypes.bool,
    onRequestHide: React.PropTypes.func,
    size: React.PropTypes.oneOf(['modal-lg', 'modal-sm', '']),
    backDropStyles: React.PropTypes.object,
    dialogStyles: React.PropTypes.object,
    children: React.PropTypes.node.isRequired
  };

  static defaultProps = {
    isOpen: false,
    backdrop: true,
    keyboard: true,
    size: '',
    backDropStyles: {},
    dialogStyles: {}
  };

  state = {
    storeIndex: Store.createModal(this.props.isOpen)
  };

  componentWillReceiveProps = (nextProps) => {
    Store.setState(this.state.storeIndex, nextProps.isOpen);
  };

  componentDidMount = () => {
    React.findDOMNode(this.refs.backDrop).addEventListener('click', this.handleBackDropClick);
    React.findDOMNode(this.refs.dialog).addEventListener('focus', this.handleFocus);
    React.findDOMNode(this.refs.dialog).addEventListener('blur', this.handleBlur);
    document.addEventListener('keydown', this.handleKeyDown);
    this.handleBody();
  };

  componentWillUnmount = () => {
    React.findDOMNode(this.refs.backDrop).removeEventListener('click', this.handleBackDropClick);
    React.findDOMNode(this.refs.dialog).removeEventListener('focus', this.handleFocus);
    React.findDOMNode(this.refs.dialog).removeEventListener('blur', this.handleBlur);
    document.removeEventListener('keydown', this.handleKeyDown);
  };

  componentDidUpdate = () => {
    this.handleBody();
  };

  requestHide = () => {
    if (this.props.onRequestHide) {
      this.props.onRequestHide();
    }
  };

  handleBackDropClick = (e) => {
    if (e.target !== e.currentTarget) return;
    if (this.props.backdrop) {
      this.requestHide();
    }
  };

  handleFocus = ()=> {
    this.focus = true;
  };

  handleBlur = () => {
    this.focus = false;
  };

  handleKeyDown = (e) => {
    if (this.props.keyboard && this.focus && e.keyCode === 27) {
      this.requestHide();
    }
  };

  handleBody = () => {
    let modalsOpen = document.getElementsByClassName('modal-backdrop-open');
    if (modalsOpen.length < 1) {
      document.body.className = document.body.className.replace(/ ?modal-open/, '');
    } else {
      if (document.body.className.indexOf('modal-open') === -1) {
        document.body.className += document.body.className.length ? ' modal-open' : 'modal-open';
      }
    }
  };

  render() {
    let childrenOpen = Store.getState(this.state.storeIndex + 1);
    let backDropClass = ClassNames({
      'modal-backdrop': true,
      'modal-backdrop-open': this.props.isOpen,
      'modal-backdrop-children-open': childrenOpen
    });
    let backDropStyles = ObjectAssign({
      base: {
        background: 'rgba(0, 0, 0, .7)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'all 0.4s',
        overflowX: 'hidden',
        overflowY: 'auto'
      },
      open: {
        opacity: 1,
        visibility: 'visible'
      },
      childrenOpen: {
        overflowY: 'hidden'
      }
    }, this.props.backDropStyles);
    let dialogClass = ClassNames({
      'modal-dialog': true,
      'modal-dialog-open': this.props.isOpen
    }, this.props.size);
    let dialogStyles = ObjectAssign({
      base: {
        top: -600,
        transition: 'all 0.4s'
      },
      open: {
        top: 0
      }
    }, this.props.dialogStyles);
    return (
      <div className='react-modal-wrapper'>
        <div className={backDropClass}
          style={[backDropStyles.base, this.props.isOpen && backDropStyles.open, childrenOpen && backDropStyles.childrenOpen]}
          ref='backDrop'>
          <div className={dialogClass}
            style={[dialogStyles.base, this.props.isOpen && dialogStyles.open]}
            tabIndex='-1' ref='dialog'>
            <div className="modal-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
