const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

// https://cli.vuejs.org/config
module.exports = {
  publicPath: 'pedra-papel-tesoura-lagarto-spock',
	lintOnSave: false,

	chainWebpack: (config) => {
		if (isProduction) {
			const vueTypesShimPath = path.resolve(__dirname, 'node_modules/vue-types/es/shim.js');
			config.resolve.alias.set('vue-types', vueTypesShimPath);
		}

		config
			.plugin('html')
			.tap((args) => {
				// eslint-disable-next-line no-param-reassign
				args[0].title = 'Pedra, Papel, Tesoura, Lagarto e Spock';
				return args;
			});
	},

	css: {
		loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/styles/variables.scss";
        `,
      },
		},
	},
};
