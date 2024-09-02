const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true, // Ensure all routes fallback to index.html
    port: 3000,
  },
  output: {
    publicPath: 'auto', // Ensures correct public path for dynamic imports
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        microfrontend1: 'microfrontend1@https://micro-app-ebon.vercel.app/remoteEntry.js', // URL to the microfrontend
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-redux": { singleton: true },
      },
      exposes: {
        './store': './src/redux/store', // Expose the Redux store
        './counterSlice': './src/redux/counterSlice', // Expose the Redux store
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for the generated HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules from being processed
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for JavaScript and React
            },
          },
        ],
      },
      {
        test: /\.css$/i, // Process CSS files
        use: ['style-loader', 'css-loader'], // Loaders for handling CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Add necessary extensions for resolving modules
  },
};
