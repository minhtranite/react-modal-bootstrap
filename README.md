# React Modal Bootstrap

Modal component for React with bootstrap style.

[<img src="./screen-shot.png" style="width: 100%;" />](http://vn38minhtran.github.io/react-modal-bootstrap)

## Installation

```
npm install --save react-modal-bootstrap
```

## Usage

### JS

```js
var Modal = require('react-modal-bootstrap');
var ModalClose = require('react-modal-bootstrap/lib/ModalClose');

getInitialState: function () {
  return {
    isOpen: false
  };
},
openModal: function () {
  this.setState({
    isOpen: true
  });
},
hideModal: function () {
  this.setState({
    isOpen: false
  });
}

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

### CSS

**Webpack:**

```js
require('react-modal-bootstrap/lib/modal.css');
```

**Without Webpack:**

```html
<link rel="stylesheet" type="text/css" href="path/to/react-modal-bootstrap/lib/modal.css">
```

**Note:** Don't add `transform` property to `.modal-dialog`.

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | bool   | false |             |
| backdrop | bool | true | Close when click on backdrop |
| keyboard | bool | true | Close when press ESC |
| size | string | '' | 'modal-lg' or 'modal-ms' |
| onRequestHide | function | function(){}| Callback when modal request hide |

## Example
View [demo](http://vn38minhtran.github.io/react-modal-bootstrap) or example folder.