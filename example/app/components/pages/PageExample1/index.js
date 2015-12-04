import React from 'react';
import Document from 'components/common/Document';
import {Link} from 'react-router';

class PageExample1 extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <Document title='Example1 | React modal bootstrap' className='page-ex-1'>
        <div>
          <h1>Example 1</h1>
          <Link className='btn btn-primary' to='/ex-1/modal'>
            Open Modal
          </Link>
          <div>{this.props.children}</div>
        </div>
      </Document>
    );
  }
}

export default PageExample1;

