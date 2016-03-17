"use strict";
var test = require("tape");
var extendResults = require("./");

test("Returns empty object when no functions exist", function (t) {
	var extender = extendResults([]);

	var result = extender("Test");

	var expected = {};

	t.same(result, expected, "Result was an empty object");

	t.end();
});

test("Returns new object even if there were no mutations", function (t) {
	var originalObject = {};

	function test() {
		return originalObject;
	}

	var extender = extendResults([test]);

	var result = extender("Test");

	var expected = originalObject;

	t.not(result, expected, "Result was an empty object");

	t.end();
});

test("Returns resulting object from function", function (t) {
	function test(value) {
		return {
			test: value
		};
	}

	var extender = extendResults([test]);

	var result = extender("Test");

	var expected = {
		test: "Test"
	};

	t.same(result, expected, "Result contained `test: 'Test'`");

	t.end();
});

test("Merges results from multiple functions", function (t) {
	function test1(value) {
		return {
			test1: value
		};
	}

	function test2(value) {
		return {
			test2: value
		};
	}

	var extender = extendResults([test1, test2]);

	var result = extender("Test");

	var expected = {
		test1: "Test",
		test2: "Test"
	};

	t.same(result, expected, "Result contained properties from both functions");

	t.end();
});

test("Merged results overwrite old ones in later functions", function (t) {
	function test1(value) {
		return {
			test: value
		};
	}

	function test2(value) {
		return {
			test: value + value
		};
	}

	var extender = extendResults([test1, test2]);

	var result = extender("Test");

	var expected = {
		test: "TestTest"
	};

	t.same(result, expected, "Result contained property from second function");

	t.end();
});
