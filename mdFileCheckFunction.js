/* eslint-disable */ 
const fs = require("fs");
const path = require("path");

const isThisDirectory = (route) => {
  // Function that checks if the path is a directory
  try {
    const stat = fs.lstatSync(route);
    return stat.isDirectory();
  } catch (err) {
    return false;
  }
};

const isThisFile = (route) => {
  // Function that checks that the path is a file
  try {
    const stat = fs.lstatSync(route);
    return stat.isFile();
  } catch (err) {
    return false;
  }
};

const readDirectory = (route) => {
  // Function that checks what is inside a directory
  try {
    return fs.readdirSync(route);
  } catch (err) {
    return err;
  }
};


const checkMdExtention = (filePath) => {
  // Functions that checks on the md extention of the files
  const pathFile = path.parse(filePath);
  return pathFile.ext;
};

const checkRoute = (route) => {
  let mdFiles = [];
  let counter = 0;
  if (isThisDirectory(route)) {
    const allFiles = readDirectory(route);
    // console.log(allFiles);
    for (i = 0; i < allFiles.length; i++) {
      const newPath = path.resolve(route, allFiles[i]);
      const checkMD = checkMdExtention(newPath);
      if (checkMD === ".md") {
        mdFiles[counter] = allFiles[i];
        counter++;
      }
    }
    // console.log(mdFiles);
  } else if (isThisFile(route)) {
    const newPath = path.resolve(route, route);
    const checkMD = checkMdExtention(newPath);
    if (checkMD === ".md"){
      mdFiles = route;
    } else {
      mdFiles = 'Archivo no es .md'
    }
    
    // console.log(newPath);
  } else {
    mdFiles = 'La ruta no existe';
    // console.log('la ruta no existe')
  }
  return mdFiles;
};

module.exports = checkRoute;
