import webpack from 'webpack';

import paths from './paths';
import rules from './rules';

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chinkFilename: '[name].js',
  },
  module: {
    rules,
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 450000,
    maxEntrypointSize: 850000,
    assetFilter: assetFilename => {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    devServer: {
      contentBase: paths.outputPath,
      compress: true,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
};
