const { default: axios } = require('axios');
const fs = require('fs');

const readFile = (file) => {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    return err.code;
  }
};

const subString = (string, character, position) => {
  if (position == 'b') {
    return string.substring(string.indexOf(character) + 1);
  } else if (position == 'a') {
    return string.substring(0, string.indexOf(character));
  } else {
    return string;
  }
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
const getValidation = (link) => {
  return axios
    .get(link.link)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

exports.readFile = readFile;
exports.subString = subString;
exports.getLinkAndDescription = getLinkAndDescription;
exports.getValidation = getValidation;
