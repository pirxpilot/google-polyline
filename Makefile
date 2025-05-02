NODE_BIN=./node_modules/.bin
PROJECT=google-polyline

check: lint test

lint: | node_modules
	$(NODE_BIN)//biome ci

format: | node_modules
	$(NODE_BIN)//biome check --fix

test: | node_modules
	node --test $(TEST_OPTS)

test-cov: TEST_OPTS := --experimental-test-coverage
test-cov: test
	node --test

benchmark: | node_modules
	$(NODE_BIN)/matcha --reporter plain

node_modules: package.json
	yarn install
	touch $@

clean:
	rm -fr build

distclean: clean
	rm -fr node_modules

.PHONY: clean distclean format lint check test test-cov benchmark
