import React from 'react';
import Document from 'components/common/Document';
import {Link} from 'react-router';

class RouterPage extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    let {children} = this.props;
    return (
      <Document title="Router | React modal bootstrap" className="page-router">
        <div>
          <h1>Example with react router</h1>
          <Link className="btn btn-primary" to="/router/modal">
            Open Modal
          </Link>
          <div>{children}</div>
        </div>
      </Document>
    );
  }
}

export default RouterPage;

