const { checkRoute } = require('./mdFileCheckFunction');
const { getLinkAndDescription, readFile, getValidation } = require('./readLinks');
const chalk = require('chalk');

const mdLinks = (route, validate) => {
  // Checking that the directory has .md files or is an .md file
  route = checkRoute(route);
  // console.log(file);
  // console.log(file.length);
  for (let i = 0; i < route.length; i++) {
    const showdown = require('showdown');
    const converter = new showdown.Converter();
    const html = converter.makeHtml(readFile(route[i]));
    const lines = html.split('\n');
    const links = [];
    let counter = 0;
    lines.forEach((line) => {
      if (line.includes('href')) {
        links[counter] = getLinkAndDescription(line, route[i]);
        console.log(line);
        console.log(getLinkAndDescription(line, route[i]));
        counter++;
      }
    });
    if (validate) {
      getValidation(links);
    } else {
      console.log(
        chalk.bgBlue(
          '------------------------------------------------------------'
        )
      );
      for (let i = 0; i < links.length; i++) {
        console.log(`${chalk.white('File: ')} ${chalk.blue(links[i].file)}`);
        console.log(`${chalk.white('url: ')} ${chalk.blue(links[i].link)}`);
        console.log(
          `${chalk.white('description: ')} ${chalk.blue(links[i].descrition)}`
        );
        console.log(
          chalk.bgBlue(
            '------------------------------------------------------------'
          )
        );
      }
    }
  }
};
exports.mdLinks = mdLinks;