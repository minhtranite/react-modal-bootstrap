export default {
  path: 'ex-1',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/PageExample1'));
    }, 'page-ex-1');
  },
  getChildRoutes(location, callback) {
    require.ensure([], () => {
      callback(null, [
        require('./Modal')
      ]);
    }, 'page-ex-1');
  }
};
