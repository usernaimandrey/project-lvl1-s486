install: install-deps

start:
	npx babel-node 'src/bin/shlyapnikovbrain-games' 

install-deps:
	npm install

lint:
	npx eslint .


