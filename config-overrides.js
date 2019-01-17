const {
  addLessLoader,
  addBabelPlugin,
  override,
  fixBabelImports,
  useEslintRc,
} = require('customize-cra');
const rewireYAML = require('react-app-rewire-yaml');

module.exports = override(
  addBabelPlugin('babel-plugin-emotion'),
  fixBabelImports('babel-plugin-import', {
    libraryName: 'antd',
    style: true,
  }),
  useEslintRc(),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
      '@primary-color': '#9BC4CB',
      '@menu-bg': 'transparent',
      '@menu-dark-bg': 'transparent',
      '@menu-dark-item-active-bg': 'transparent',
    },
  }),
  rewireYAML,
);
