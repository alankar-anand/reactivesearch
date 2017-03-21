const path = require('path');
const webpack = require('webpack');
const CHOOSE_CONFIG = process.env.CHOOSE_CONFIG;

const default_config = {
	entry: {
		ecommerce_recipe: "./examples/ecommerce/app.js",
		airbnb_recipe: "./examples/airbnb/app.js",
		news_recipe: "./examples/news/app.js",
		app: "./app/app.js"
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/dist/",
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /node_modules\/JSONStream\/index\.js$/,
				loaders: ["shebang-loader", "babel-loader"]
			}
		],
		noParse: ['ws']
	},
	externals: ['ws']
};

const examples_config = {
	entry: {
		ecommerce_recipe: "./examples/ecommerce/app.js",
		airbnb_recipe: "./examples/airbnb/app.js",
		news_recipe: "./examples/news/app.js"
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/dist/",
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /node_modules\/JSONStream\/index\.js$/,
				loaders: ["shebang-loader", "babel-loader"]
			}
		],
		noParse: ['ws']
	},
	externals: ['ws']
};

const lib_config = {
	entry: {
		app: "./app/app.js"
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/dist/",
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /node_modules\/JSONStream\/index\.js$/,
				loaders: ["shebang-loader", "babel-loader"]
			}
		],
		noParse: ['ws']
	},
	externals: ['ws']
};

let final_config;
switch(CHOOSE_CONFIG) {
	case 'EXAMPLES':
		final_config = examples_config;
		break;
	case 'LIB':
		final_config = lib_config;
		break;
	default:
		final_config = default_config;
}

module.exports = final_config;
