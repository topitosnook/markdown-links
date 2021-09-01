const { checkRoute } = require('../mdFileCheckFunction');
const { isThisDirectory } = require('../mdFileCheckFunction');
const { isThisFile } = require('../mdFileCheckFunction');
const {readDirectory} = require('../mdFileCheckFunction');

const route0 = '../markdown-links/';
const route1 = '../markdown-linkss/';
const route2 = 'testing.md';
const route3 = 'read.js';
const ansRoute0 = [ 'notes.md', 'README.md', 'README_Project.md', 'testing.md' ];
const ansReadDirectory = [
  '.editorconfig',
  '.eslintrc',
  '.git',
  '.gitignore',
  'coverage',
  'index.js',
  'mdFileCheckFunction.js',
  'node_modules',
  'notes.md',
  'package-lock.json',
  'package.json',
  'read.js',
  'README.md',
  'README_Project.md',
  'test',
  'test-link.js',
  'testing.md',
];
const ansReadDirectoryError = 'ENOENT';

test('¿is this a directory?', () => {
  expect(isThisDirectory(route0)).toBe(true);
});

test('¿is this a file?', () => {
  expect(isThisFile(route2)).toBe(true);
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
test('checkRoute function properly reads route directory', () => {
  expect(checkRoute(route2)).toEqual(route2);
});

