const commonjs = require( "@rollup/plugin-commonjs" );
const copy = require( "rollup-plugin-copy" );
const resolve = require( "@rollup/plugin-node-resolve" );
const env = require( "./src/extension.json" );

let extensionName = process.env.EXTENSION || env.name || "Example";

module.exports =
{
	input: "src/scripts/main.js",
	output: {
		file: `${extensionName}.novaextension/scripts/bundle.js`,
		format: "cjs"
	},
	plugins: [
		commonjs(),
		resolve(),
		copy({
			targets: [
				{ src: "src/extension.json", dest: `${extensionName}.novaextension/` },
				{ src: "src/*.md", dest: `${extensionName}.novaextension/` },
			]
		}),
	],
};
