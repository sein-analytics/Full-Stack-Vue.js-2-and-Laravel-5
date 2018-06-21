require('dotenv').config();
let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
	.styles([
		'node_modules/open-sans-all/css/open-sans.css',
       	'node_modules/font-awesome/css/font-awesome.css',
		'resources/assets/css/style.css'], 'public/css/styles.css')
	 .copy('node_modules/open-sans-all/fonts',  'public/fonts')
     .copy('node_modules/font-awesome/fonts',  'public/fonts')
     .copy('resources/assets/images', 'public/images')
     .browserSync({
     	proxy: process.env.APP_URL,
     	open: false
     })
	.options({
		extractVueStyles: 'public/css/vue-styles.css'
	})
;

//When we move to SFCs we need to add the options tag to the mix and tell Webpack what to do with the styles
//otherwise it will import the css into app.js as inline string

mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        }
    }
});