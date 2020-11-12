import webpack from 'webpack';
import path from 'path';
import sass from 'node-sass';
import nodeSassUtils from 'node-sass-utils';
import theme from './preact/common/theme';

const sassUtils = nodeSassUtils(sass);

export default {
  webpack(config, env, helpers, options) {

    // if (!env.ssr) {
    //   config.module.rules.pop();
    // }

    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'preact', 'components'),
      common: path.resolve(__dirname, 'preact', 'common'),
      hooks: path.resolve(__dirname, 'preact', 'hooks'),
      routes: path.resolve(__dirname, 'preact', 'routes'),
      styles: path.resolve(__dirname, 'preact', 'styles'),
    };

    config.module.rules[2].use[0].options.options.sassOptions.functions = {
      ...config.module.rules[2].use[0].options.options.sassOptions.functions,
      'theme($keys)': function(keys) {
        keys = keys.getValue().split(".");
        let result = theme;

        let i;
        for (i = 0; i < keys.length; i++) {
          result = result[keys[i]];
        }
        result = sassUtils.castToSass(result);
        return result;
      },
    };
  },
};
