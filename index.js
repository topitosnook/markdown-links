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



const directory = isThisDirectory(route);
// const file = isThisFile(path);

if (directory) {
  const filesInDirectory = readDirectory(route);
  // console.log(filesInDirectory);
  let newPath;
  // let mdFiles;
  for (i = 0; i < filesInDirectory.length; i++) {
    newPath = path.resolve(route, filesInDirectory[i]);
    // console.log(newPath);
    const aux = checkMdExtention(newPath);
    if(aux === '.md'){
      // mdFiles += newPath;
      console.log(filesInDirectory[i]);
      // console.log(newPath);
      // fs.readFile(filesInDirectory[0], "utf-8", function (err, data) {
      //   if (err) {
      //     console.log("Error", err);
      //   } else {
      //     console.log(data);
      //   }
      // });
    }
    // console.log(mdFiles);
  }
} 


