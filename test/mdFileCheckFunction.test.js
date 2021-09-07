const { checkRoute } = require('../mdFileCheckFunction');
const { isThisDirectory } = require('../mdFileCheckFunction');
const { isThisFile } = require('../mdFileCheckFunction');
const { readDirectory } = require('../mdFileCheckFunction');

const route0 = '../markdown-links/';
const route1 = '../markdown-linkss/';
const route2 = ['testing.md'];
const route3 = 'readLinks.js';
const ansRoute0 = [
  'forTests.md',
  'README.md',
  'README_Project.md',
  'testing.md',
];
const ansReadDirectory = [
  '.editorconfig',
  '.eslintrc',
  '.git',
  '.gitignore',
  'cli.js',
  'coverage',
  'Diagrama_Flujo_md_links.png',
  'forTests.md',
  'index.js',
  'mdFileCheckFunction.js',
  'mdLinks.js',
  'node_modules',
  'package-lock.json',
  'package.json',
  'readFromConsole.js',
  'readLinks.js',
  'README.md',
  'README_Project.md',
  'test',
  'testing.md',
];
const ansReadDirectoryError = 'ENOENT';
// --------------------------------------------------------------
test('¿is this a directory?', () => {
  expect(isThisDirectory(route0)).toBe(true);
});

test('¿is this a file?', () => {
  expect(isThisFile('testing.md')).toBe(true);
});

test('readDirectory function reading a directory', () => {
  expect(readDirectory(route0)).toEqual(ansReadDirectory);
});

test('readDirectory function reading a directory: Error', () => {
  expect(readDirectory(route1)).toEqual(ansReadDirectoryError);
});

test('checkRoute function properly reads bad route', () => {
  expect(checkRoute(route1)).toBe('La ruta no existe');
});

test('checkRoute function properly reads file not md', () => {
  expect(checkRoute(route3)).toBe('Archivo no es .md');
});

test('checkRoute function properly reads route directory', () => {
  expect(checkRoute(route0)).toEqual(ansRoute0);
});

test('checkRoute function properly reads route file', () => {
  expect(checkRoute('testing.md')).toEqual(route2);
});
