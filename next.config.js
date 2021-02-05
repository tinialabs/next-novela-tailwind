const { withPlugins } = require('next-compose-plugins');

// next.config.js
module.exports = withPlugins(
  [
    require('@twstyled/next'),
    require('next-svg-inline-loader'),
    require('next-favicon-loader'),
    require('next-image-meta-loader'),
  ],
  {
    future: { webpack5: true },
    webpack: (config, { defaultLoaders }) => {
      return config
    }
  }
)