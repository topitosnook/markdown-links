const { readFile, subString, getLinkAndDescription, getValidation } = require('../readLinks');

const link = '<li>[ ] Instalar y usar módulos. (<a href="https://www.npmjs.com/">npm</a>)</li>';
const file = 'forTests.md';
const ansLink = {
  descrition: 'npm',
  link: 'https://www.npmjs.com/',
  file: 'forTests.md',
};
test('Function getLink use', () => {
  expect(getLinkAndDescription(link, file)).toEqual(ansLink);
});

test('Function to read file fail', () => {
  expect(readFile('forTest.md')).toEqual('ENOENT');
});

test('function subString use', () => {
  expect(subString(link, '"')).toEqual(link);
});

test('Validation good Link ', () => {
  getValidation(ansLink).then((response) => {
    expect(response.status).toBe(200);
  });
});
