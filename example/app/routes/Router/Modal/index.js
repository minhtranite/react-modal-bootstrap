export default {
  path: 'modal',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/Router/Modal'));
    }, 'page-router-modal');
  },
  getChildRoutes(location, callback) {
    require.ensure([], () => {
      callback(null, []);
    }, 'page-router-modal');
  }
};
