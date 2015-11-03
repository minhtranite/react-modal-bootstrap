import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Radium from 'radium';
import ObjectAssign from 'object-assign';

function findParentNode(parentClass, childObj) {
  let testObj = childObj.parentNode;
  while (testObj && (testObj.className === undefined || testObj.className.indexOf(parentClass) === -1)) {
    testObj = testObj.parentNode;
  }
  return testObj;
}

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

  componentDidMount = () => {
    let backDropEl = ReactDOM.findDOMNode(this.refs.backDrop);
    let dialogEl = ReactDOM.findDOMNode(this.refs.dialog);
    backDropEl.addEventListener('click', this.handleBackDropClick);
    dialogEl.addEventListener('focus', this.handleFocus);
    dialogEl.addEventListener('blur', this.handleBlur);
    document.addEventListener('keydown', this.handleKeyDown);
    this.handleBody();
    this.handleParent();
  };

  componentWillUnmount = () => {
    let backDropEl = ReactDOM.findDOMNode(this.refs.backDrop);
    let dialogEl = ReactDOM.findDOMNode(this.refs.dialog);
    backDropEl.removeEventListener('click', this.handleBackDropClick);
    dialogEl.removeEventListener('focus', this.handleFocus);
    dialogEl.removeEventListener('blur', this.handleBlur);
    document.removeEventListener('keydown', this.handleKeyDown);
  };

  componentDidUpdate = () => {
    this.handleBody();
    this.handleParent();
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

  handleParent = () => {
    let parentNode = findParentNode('modal-backdrop', ReactDOM.findDOMNode(this.refs.backDrop));
    if (parentNode) {
      if (this.props.isOpen) {
        parentNode.className += parentNode.className.length ? ' children-open' : 'children-open';
        parentNode.style.overflowY = 'hidden';
      } else {
        parentNode.className = parentNode.className.replace(/ ?children-open/, '');
        parentNode.style.overflowY = 'auto';
      }
    }
  };

  render() {
    let backDropClass = ClassNames({
      'modal-backdrop': true,
      'modal-backdrop-open': this.props.isOpen,
      'modal-backdrop-children-open': this.state.childrenOpen
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
      }
    }, this.props.backDropStyles);

    let dialogClass = ClassNames({
      'modal-dialog': true,
      'modal-dialog-open': this.props.isOpen
    }, this.props.size);

    let dialogStyles = ObjectAssign({
      base: {
        top: -600,
        transition: 'top 0.4s'
      },
      open: {
        top: 0
      }
    }, this.props.dialogStyles);

    return (
      <div className={backDropClass}
        style={[backDropStyles.base, this.props.isOpen && backDropStyles.open]}
        ref='backDrop'>
        <div className={dialogClass}
          style={[dialogStyles.base, this.props.isOpen && dialogStyles.open]}
          tabIndex='-1' ref='dialog'>
          <div className='modal-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
