// 4 cases with validate and stats
// Both true - both false

const checkRoute = require('./mdFileCheckFunction');
const route = '../SCL017-md-link/';

// Checking that the directory has .md files or is an .md file
const file = checkRoute(route);
console.log(file);
