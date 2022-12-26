module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,css,js,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};