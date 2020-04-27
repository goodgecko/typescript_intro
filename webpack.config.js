const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')
const PACKAGE = require('./package.json');
//const CopyPlugin = require('copy-webpack-plugin');

// Library output details
var FILE_NAME = "game";
var LIBRARY_NAME = PACKAGE.name;

// Build, source, etc paths
var PATHS = {
	entryPoint: path.resolve(__dirname, 'src/Index.ts'),
	dist: path.resolve(__dirname, 'dist/lib')
}

// Webpack config
module.exports = {
	mode: "production",
	entry: {
		[FILE_NAME]: [PATHS.entryPoint],
		[FILE_NAME + '.min']: [PATHS.entryPoint]
	},
	output: {
		path: PATHS.dist,
		filename: '[name].js',
		libraryTarget: 'umd',
		library: LIBRARY_NAME,
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	optimization: {
		minimize: true,
		minimizer: [new UglifyJsPlugin({
			include: /\.min\.js$/
		})]
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader',
			exclude: /node_modules/,
			query: {
				declaration: false,
			}
		}]
	},
	plugins: [
		new CheckerPlugin(),
        //new CopyPlugin([
        //    { from: 'node_modules/pixi.js/dist/pixi.min.js', to: PATHS.dist },
        //  ]),
	],
    externals: [
        // Thank you: https://www.proofbyexample.com/typescript-pixi-webpack.html
        {"pixi.js": "PIXI"},
    ]
}