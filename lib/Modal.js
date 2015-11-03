'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function findParentNode(parentClass, childObj) {
  var testObj = childObj.parentNode;
  while (testObj && (testObj.className === undefined || testObj.className.indexOf(parentClass) === -1)) {
    testObj = testObj.parentNode;
  }
  return testObj;
}

var Modal = (function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this = this;

    _classCallCheck(this, _Modal);

    _get(Object.getPrototypeOf(_Modal.prototype), 'constructor', this).apply(this, arguments);

    this.componentDidMount = function () {
      var backDropEl = _reactDom2['default'].findDOMNode(_this.refs.backDrop);
      var dialogEl = _reactDom2['default'].findDOMNode(_this.refs.dialog);
      backDropEl.addEventListener('click', _this.handleBackDropClick);
      dialogEl.addEventListener('focus', _this.handleFocus);
      dialogEl.addEventListener('blur', _this.handleBlur);
      document.addEventListener('keydown', _this.handleKeyDown);
      _this.handleBody();
      _this.handleParent();
    };

    this.componentWillUnmount = function () {
      var backDropEl = _reactDom2['default'].findDOMNode(_this.refs.backDrop);
      var dialogEl = _reactDom2['default'].findDOMNode(_this.refs.dialog);
      backDropEl.removeEventListener('click', _this.handleBackDropClick);
      dialogEl.removeEventListener('focus', _this.handleFocus);
      dialogEl.removeEventListener('blur', _this.handleBlur);
      document.removeEventListener('keydown', _this.handleKeyDown);
    };

    this.componentDidUpdate = function () {
      _this.handleBody();
      _this.handleParent();
    };

    this.requestHide = function () {
      if (_this.props.onRequestHide) {
        _this.props.onRequestHide();
      }
    };

    this.handleBackDropClick = function (e) {
      if (e.target !== e.currentTarget) return;
      if (_this.props.backdrop) {
        _this.requestHide();
      }
    };

    this.handleFocus = function () {
      _this.focus = true;
    };

    this.handleBlur = function () {
      _this.focus = false;
    };

    this.handleKeyDown = function (e) {
      if (_this.props.keyboard && _this.focus && e.keyCode === 27) {
        _this.requestHide();
      }
    };

    this.handleBody = function () {
      var modalsOpen = document.getElementsByClassName('modal-backdrop-open');
      if (modalsOpen.length < 1) {
        document.body.className = document.body.className.replace(/ ?modal-open/, '');
      } else {
        if (document.body.className.indexOf('modal-open') === -1) {
          document.body.className += document.body.className.length ? ' modal-open' : 'modal-open';
        }
      }
    };

    this.handleParent = function () {
      var parentNode = findParentNode('modal-backdrop', _reactDom2['default'].findDOMNode(_this.refs.backDrop));
      if (parentNode) {
        if (_this.props.isOpen) {
          parentNode.className += parentNode.className.length ? ' children-open' : 'children-open';
          parentNode.style.overflowY = 'hidden';
        } else {
          parentNode.className = parentNode.className.replace(/ ?children-open/, '');
          parentNode.style.overflowY = 'auto';
        }
      }
    };
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var backDropClass = (0, _classnames2['default'])({
        'modal-backdrop': true,
        'modal-backdrop-open': this.props.isOpen,
        'modal-backdrop-children-open': this.state.childrenOpen
      });

      var backDropStyles = (0, _objectAssign2['default'])({
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

      var dialogClass = (0, _classnames2['default'])({
        'modal-dialog': true,
        'modal-dialog-open': this.props.isOpen
      }, this.props.size);

      var dialogStyles = (0, _objectAssign2['default'])({
        base: {
          top: -600,
          transition: 'top 0.4s'
        },
        open: {
          top: 0
        }
      }, this.props.dialogStyles);

      return _react2['default'].createElement(
        'div',
        { className: backDropClass,
          style: [backDropStyles.base, this.props.isOpen && backDropStyles.open],
          ref: 'backDrop' },
        _react2['default'].createElement(
          'div',
          { className: dialogClass,
            style: [dialogStyles.base, this.props.isOpen && dialogStyles.open],
            tabIndex: '-1', ref: 'dialog' },
          _react2['default'].createElement(
            'div',
            { className: 'modal-content' },
            this.props.children
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      isOpen: _react2['default'].PropTypes.bool.isRequired,
      backdrop: _react2['default'].PropTypes.bool,
      keyboard: _react2['default'].PropTypes.bool,
      onRequestHide: _react2['default'].PropTypes.func,
      size: _react2['default'].PropTypes.oneOf(['modal-lg', 'modal-sm', '']),
      backDropStyles: _react2['default'].PropTypes.object,
      dialogStyles: _react2['default'].PropTypes.object,
      children: _react2['default'].PropTypes.node.isRequired
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      isOpen: false,
      backdrop: true,
      keyboard: true,
      size: '',
      backDropStyles: {},
      dialogStyles: {}
    },
    enumerable: true
  }]);

  var _Modal = Modal;
  Modal = (0, _radium2['default'])(Modal) || Modal;
  return Modal;
})(_react2['default'].Component);

exports['default'] = Modal;
module.exports = exports['default'];