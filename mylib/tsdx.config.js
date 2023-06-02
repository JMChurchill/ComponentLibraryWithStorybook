const path = require('path');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        onlyModules: true,
        autoModules: false,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        // extract: !!options.writeMeta,
        extract: path.resolve('dist/aard-pack.cjs.production.min.css'),
        minimize: true,
      })
    );
    return config;
  },
};
