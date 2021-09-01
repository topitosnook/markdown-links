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
// getDataFromConsole();
exports.getDataFromConsole = getDataFromConsole;