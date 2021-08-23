const fs = require("fs");

const route = "./testing.md";

const read = () => {
  try {
    return fs.readFileSync(route, "utf8");
  } catch (err) {
    return err;
  }
};
function subStr(string, character, position) {
  if (position == "b") return string.substring(string.indexOf(character) + 1);
  else if (position == "a")
    return string.substring(0, string.indexOf(character));
  else return string;
}
const getLinkAndDescription = (text) => {
  const aux1 = '"';
  const ans1 = subStr(text, aux1, "b");
  const ans2 = subStr(ans1, aux1, "a"); // get link
  
  const aux2 = ">";
  const ans3 = subStr(ans1, aux2, "b");
  const ans4 = subStr(ans3, "<", "a"); // get description

  return {
    description: ans4,
    link: ans2
  };
}
// console.log(read());

// With lineReader library (npm install line-reader) and showdown converter (npm install showdown)
const lineReader = require("line-reader");
const { listeners } = require("process");
const showdown = require("showdown");
const converter = new showdown.Converter();
const html = converter.makeHtml(read());
const lines = html.split("\n");
let links = [];
let counter = 0;
lines.forEach((line) => {
  // console.log(element);
  if (line.includes("href")) {
    console.log(getLinkAndDescription(line));
    
    links[counter] = line;
    counter++;
  }
});
// console.log(links);
