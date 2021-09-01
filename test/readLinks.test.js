const {
  readFile,
  subString,
  getLinkAndDescription,
  getValidation,
} = require('../readLinks');

const link =
  '<li>[ ] Instalar y usar módulos. (<a href="https://www.npmjs.com/">npm</a>)</li>';
const ansLink = {
  descrition: 'npm',
  link: 'https://www.npmjs.com/',
  file: 'forTests.md',
};
test('getLink', () => {
  expect(getLinkAndDescription()).toBe(true);
});
