module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },  webpack: (config, { isServer }) => {
    // ...other configurations

    config.module.rules.push({
      test: /\.json$/,
      loader: 'json-loader',
      type: 'javascript/auto',
    });

    return config;
  },
}
