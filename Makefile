install: install-deps

start:
	npx babel-node 'src/bin/shlyapnikovbrain-games' 10

install-deps:
	npm install

lint:
	npx eslint


