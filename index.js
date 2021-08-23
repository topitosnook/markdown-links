const fs = require('fs');
const path = require('path');

const route = '../SCL017-md-link/';

const isThisDirectory = (path) => {
  // Function that checks if the path is a directory
  try {
    const stat = fs.lstatSync(path);
    return stat.isDirectory();
  } catch (err) {
    return false;
  }
}

const isThisFile = (path) => {
  // Function that checks that the path is a file
  try {
    const stat = fs.lstatSync(path);
    return stat.isFile();
  } catch (err) {
    return false;
  }
}

const readDirectory = (path) => {
  // Function that checks what is inside a directory
  try {
    return fs.readdirSync(path);
  } catch (err) {
    return err;
  } 
}

const checkMdExtention = (filePath) => {
  const pathFile = path.parse(filePath);
  return pathFile.ext;
}
