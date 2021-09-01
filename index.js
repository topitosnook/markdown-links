const { checkRoute } = require('./mdFileCheckFunction');
const route = '../markdown-links/';

// Checking that the directory has .md files or is an .md file
const file = checkRoute(route);
console.log(file);


// const fs = require('fs');

// const readDirectory = (route) => {
//   // Function that checks what is inside a directory
//   try {
//     return fs.readdirSync(route);
//   } catch (err) {
//     console.log(err);
//     return err.code;
//   }
// };
// const route1 = '../markdown-linkss/';
// readDirectory(route1);