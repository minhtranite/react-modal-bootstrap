export default {
  path: 'modal',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/PageExample1/Modal'));
    }, 'page-ex1-modal');
  }
};
