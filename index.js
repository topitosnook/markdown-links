const { mdLinks } = require('./mdLinks');
const { getDataFromConsole } = require('./readFromConsole');
// const route = '../markdown-links/';
// const route = 'testing.md';
// mdLinks(route, false);
const data = getDataFromConsole();
mdLinks(data[0], data[1]);