// const { mdLinks } = require('./read');

// const route = '../markdown-links/';
// const route = 'testing.md';

// mdLinks(route, false);

// try
const getDataFromConsole = () => {
  let validate;
  const route = process.argv[2];
  if(process.argv.length>=4){
    validate = true;
  }else{
    validate = false;
  }
  // console.log(validate);
  // console.log(route);
  return [route, validate];
};
getDataFromConsole();