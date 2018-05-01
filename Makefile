TESTS = test/unit/*.js
REPORTER = spec
test: clean
	@npm install
	@./node_modules/pegjs/bin/pegjs -o ./base/nquery.js peg/nquery.pegjs
	@./node_modules/mocha/bin/mocha  $(TESTS) --reporter spec

clean:

.PHONY: test
