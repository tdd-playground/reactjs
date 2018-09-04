module.exports = {
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'env', 'react'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
};
