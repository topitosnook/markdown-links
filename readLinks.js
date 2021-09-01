const chalk = require('chalk');
const { default: axios } = require('axios');
const fs = require('fs');

const readFile = (file) => {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    return err;
  }
};

const subString = (string, character, position) => {
  if (position == 'b') return string.substring(string.indexOf(character) + 1);
  else if (position == 'a')
    return string.substring(0, string.indexOf(character));
  else return string;
};

const getLinkAndDescription = (text, file) => {
  const aux1 = '"'; // change to singlequotes
  const ans1 = subString(text, aux1, 'b');
  const ans2 = subString(ans1, aux1, 'a'); // get link

  const aux2 = '>';
  const ans3 = subString(ans1, aux2, 'b');
  const ans4 = subString(ans3, '<', 'a'); // get description

  return {
    descrition: ans4,
    link: ans2,
    file: file,
  };
};

// validate
const getValidation = (links) => {
  console.log(
    chalk.bgBlue('------------------------------------------------------------')
  );
  for (let i = 0; i < links.length; i++) {
    axios
      .get(links[i].link)
      .then((response) => {
        console.log(`${chalk.white('File: ')} ${chalk.green(links[i].file)}`);
        console.log(`${chalk.white('url: ')} ${chalk.green(links[i].link)}`);
        console.log(
          `${chalk.white('description: ')} ${chalk.green(links[i].descrition)}`
        );
        console.log(
          `${chalk.white('status: ')} ${chalk.green(response.status)}`
        );
        console.log(`${chalk.white('status message: ')} ${chalk.green('OK')}`);
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
          `${chalk.white('description: ')} ${chalk.red(links[i].descrition)}`
        );
        console.log(`${chalk.white('status: ')} ${chalk.red(err)}`);
        console.log(`${chalk.white('status message: ')} ${chalk.red('Fail')}`);
        console.log(
          chalk.bgBlue(
            '-----------------------------------------------------------'
          )
        );
      });
  }
};

exports.readFile = readFile;
exports.subString = subString;
exports.getLinkAndDescription = getLinkAndDescription;
exports.getValidation = getValidation;

