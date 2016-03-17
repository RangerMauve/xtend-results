"use strict";
var xtend = require("xtend");

module.exports = extendResults;

function extendResults(functions) {
	return function () {
		var args = arguments;
		var self = this;
		return functions.reduce(function (results, fn) {
			return xtend(results, fn.apply(self, args));
		}, {});
	};
}
