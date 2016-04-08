export default {
  path: 'router',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/Router'));
    }, 'page-router');
  },
  getChildRoutes(location, callback) {
    require.ensure([], () => {
      callback(null, [
        require('./Modal')
      ]);
    }, 'page-router');
  }
};
