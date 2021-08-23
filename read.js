const fs = require("fs");

const route = "./testing.md";

const read = () => {
  try {
    return fs.readFileSync(route, "utf8");
  } catch (err) {
    return err;
  }
};

// console.log(read());

// With lineReader library (npm install line-reader) and showdown converter (npm install showdown)
const lineReader = require("line-reader");
const { listeners } = require('process');
const showdown = require("showdown");
const converter = new showdown.Converter();
const html = converter.makeHtml(read()); 
const lines  = html.split('\n');
let links = [];
let counter = 0;
lines.forEach(line => {
  // console.log(element);
  if(line.includes('href')){
    // console.log(line);
    links[counter] = line;
    counter ++;
  }
});
console.log(links);

