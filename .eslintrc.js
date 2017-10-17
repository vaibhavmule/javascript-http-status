module.exports = {
	"parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
	"root": true,
	"env": {
		"es6": true,
		"node": true,
		"browser": true,
		"mocha": true
	},
    "extends": "airbnb-base"
};