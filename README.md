# React Modal Bootstrap

Modal component for React with bootstrap style.

[<img src="./screen-shot.png" style="width: 100%;" />](http://vn38minhtran.github.io/react-modal-bootstrap)

## Installation

### NPM

```bash
npm install --save react-modal-bootstrap
```

### Bower
```bash
bower install --save react-modal-bootstrap
```

## Usage

### Dependencies

**Webpack:**

```js
require('path/to/bootstrap.css');
```

**Without Webpack:**

```html
<link rel="stylesheet" type="text/css" href="path/to/bootstrap.css">
```

### JS

```js
import {Modal, ModalClose} from 'react-modal-bootstrap';
...
state = {
  isOpen: false
};

openModal = () => {
  this.setState({
    isOpen: true
  });
};

hideModal = () => {
  this.setState({
    isOpen: false
  });
};
...
<Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
  <div className='modal-header'>
    <ModalClose onClick={this.hideModal}/>
    <h4 className='modal-title'>Modal title</h4>
  </div>
  <div className='modal-body'>
    <p>Ab ea ipsam iure perferendis! Ad debitis dolore excepturi
      explicabo hic incidunt placeat quasi repellendus soluta,
      vero. Autem delectus est laborum minus modi molestias
      natus provident, quidem rerum sint, voluptas!</p>
  </div>
  <div className='modal-footer'>
    <button className='btn btn-default' onClick={this.hideModal}>
      Close
    </button>
    <button className='btn btn-primary'>
      Save changes
    </button>
  </div>
</Modal>
```

### Styles

**Default:**

```js
backDropStyles = {
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
};

dialogStyles = {
  base: {
    top: -600,
    transition: 'top 0.4s'
  },
  open: {
    top: 0
  }
}
```

**Custom:**

You can set custom styles vie `backDropStyles`, `dialogStyles` prop.

### UMD

```html
<link rel="stylesheet" type="text/css" href="path/to/bootstrap.css">
<script src="path/to/react-modal-bootstrap/dist/react-modal-bootstrap.js"></script>
```

```js
...
var Modal = window.ReactModalBootstrap.Modal;
var ModalClose = window.ReactModalBootstrap.ModalClose;
...
```

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | bool   | false |             |
| backdrop | bool | true | Close when click on backdrop |
| keyboard | bool | true | Close when press ESC |
| size | string | '' | 'modal-lg' or 'modal-ms' |
| onRequestHide | function | function(){}| Callback when modal request hide |
| backDropStyles | object | {} | Styles object ([Radium](https://github.com/FormidableLabs/radium)) |
| dialogStyles | object | {} | Styles object ([Radium](https://github.com/FormidableLabs/radium)) |

## Example
View [demo](http://vn38minhtran.github.io/react-modal-bootstrap) or example folder.
