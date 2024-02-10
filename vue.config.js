const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  configureWebpack: {
    optimization: {
      minimizer: [
        // Configure Terser Plugin
        new TerserPlugin({
          // Add any Terser options you need
          // For example, to disable Terser's mangle option:
          terserOptions: {
            mangle: false,
          },
        }),
      ],
    },
  },
};
