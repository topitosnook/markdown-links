const {
  readFile,
  subString,
  getLinkAndDescription,
  getValidation
} = require('../readLinks');

const link =
  '<li>[ ] Instalar y usar módulos. (<a href="https://www.npmjs.com/">npm</a>)</li>';
const file = 'forTests.md';
const ansLink = {
  descrition: 'npm',
  link: 'https://www.npmjs.com/',
  file: 'forTests.md',
};
test('getLink', () => {
  expect(getLinkAndDescription(link, file)).toEqual(ansLink);
});

test('readFile', () => {
  expect(readFile('forTest.md')).toEqual('ENOENT');
});

test('subString', () => {
  expect(subString(link, '"')).toEqual(link);
});

test('Validation good Link ', () => {
  getValidation(ansLink).then((response) => {
    expect(response.status).toBe(200);
  }).catch((err) => {
    console.log(err); 
  });
});
