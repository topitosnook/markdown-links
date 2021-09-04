const { checkRoute } = require('./mdFileCheckFunction');
const { getLinkAndDescription } = require('./readLinks');
const { readFile } = require('./readLinks');
const { getValidation } = require('./readLinks');
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
        // console.log(line);
        // console.log(getLinkAndDescription(line, route[i]));
        counter++;
      }
    });
    if (validate) {
      for (let i = 0; i < links.length; i++) {
        getValidation(links[i])
          .then((response) => {
            console.log(
              `${chalk.white('File: ')} ${chalk.green(links[i].file)}`
            );
            console.log(
              `${chalk.white('url: ')} ${chalk.green(links[i].link)}`
            );
            console.log(
              `${chalk.white('description: ')} ${chalk.green(
                links[i].descrition
              )}`
            );
            console.log(
              `${chalk.white('status: ')} ${chalk.green(response.status)}`
            );
            console.log(
              `${chalk.white('status message: ')} ${chalk.green('OK')}`
            );
            console.log(
              chalk.bgBlue(
                '------------------------------------------------------------'
              )
            );
          })
          .catch((err) => {
            console.log(`${chalk.white('File: ')} ${chalk.red(links[i].file)}`);
            console.log(`${chalk.white('url: ')} ${chalk.red(links[i].link)}`);
            console.log(
              `${chalk.white('description: ')} ${chalk.red(
                links[i].descrition
              )}`
            );
            console.log(`${chalk.white('status: ')} ${chalk.red(err)}`);
            console.log(
              `${chalk.white('status message: ')} ${chalk.red('Fail')}`
            );
            console.log(
              chalk.bgBlue(
                '-----------------------------------------------------------'
              )
            );
          });
      }
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
