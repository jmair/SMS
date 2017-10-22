import AppGenerator from './AppGenerator.js';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';

export default AppGenerator({
  buildDirectory: '../src/',
  route: (app) => {
    const webpackCompiler = webpack(webpackConfig);
    const webpackInstance = webpackMiddleware(webpackCompiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    });
    app.use(webpackInstance);
    app.use(require('connect-history-api-fallback')());
    app.use(webpackInstance);
    app.use(require('webpack-hot-middleware')(webpackCompiler));
  },
});
