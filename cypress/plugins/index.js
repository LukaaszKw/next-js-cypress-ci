import webpack from '@cypress/webpack-preprocessor';
const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};

export default (on) => {
  const options = {
    webpackOptions,
  };
  on('file:preprocessor', webpack(options));
};