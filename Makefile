NODE_BIN=./node_modules/.bin
PROJECT=google-polyline

check: lint test

lint: | node_modules
	$(NODE_BIN)/jshint index.js lib test benchmark

test: | node_modules
	$(NODE_BIN)/mocha --ui tdd test

benchmark: | node_modules
	$(NODE_BIN)/matcha --reporter plain

node_modules: package.json
	npm install && touch $@

clean:
	rm -fr build

distclean: clean
	rm -fr node_modules

.PHONY: clean distclean lint check test benchmark
