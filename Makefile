NODE_BIN=./node_modules/.bin
PROJECT=google-polyline

check: lint test

lint:
	$(NODE_BIN)/biome ci

format:
	$(NODE_BIN)/biome check --fix

test:
	node --test $(TEST_OPTS)

test-cov: TEST_OPTS := --experimental-test-coverage
test-cov: test
	node --test

benchmark:
	$(NODE_BIN)/matcha --reporter plain

clean:
	rm -fr build

distclean: clean
	rm -fr node_modules

.PHONY: clean distclean format lint check test test-cov benchmark
