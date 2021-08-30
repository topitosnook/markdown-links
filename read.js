const chalk = require("chalk");
const { default: axios } = require("axios");
const fs = require("fs");

const route = "testing.md";

const read = (file) => {
  try {
    return fs.readFileSync(file, "utf8");
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

const getLinkAndDescription = (text, file) => {
  const aux1 = '"'; // change to singlequotes
  const ans1 = subStr(text, aux1, "b");
  const ans2 = subStr(ans1, aux1, "a"); // get link

  const aux2 = ">";
  const ans3 = subStr(ans1, aux2, "b");
  const ans4 = subStr(ans3, "<", "a"); // get description

  return {
    descrition: ans4,
    link: ans2,
    file: file,
  };
};

// With showdown converter (npm install showdown)
const showdown = require("showdown");
const converter = new showdown.Converter();
const html = converter.makeHtml(read(route));
const lines = html.split("\n");
const links = [];
let counter = 0;
lines.forEach((line) => {
  if (line.includes("href")) {
    links[counter] = getLinkAndDescription(line, route);
    counter++;
  }
});

// validate
const getResponse = (links) => {
  for (let i = 0; i < links.length; i++) {
    axios
      .get(links[i].link)
      .then((response) => {
        // console.log(response.status);
        console.log(
          chalk.bgBlue(
            "------------------------------------------------------------"
          )
        );
        // console.log("numero:", i + 1);
        console.log(chalk.green("File:", links[i].file));
        console.log(chalk.green("url:", links[i].link));
        console.log(chalk.green("description:", links[i].descrition));
        console.log(chalk.green("status:", response.status));
        console.log(chalk.green("status message: OK"));
      })
      .catch((err) => {
        console.log(
          chalk.bgBlue(
            "-----------------------------------------------------------"
          )
        );
        if (err.response.status >= 400) {
          // console.log("numero:", i + 1);
          console.log(chalk.red("File:", links[i].file));
          console.log(chalk.red("url:", links[i].link));
          console.log(chalk.red("description:", links[i].descrition));
          console.log(chalk.red("status:", err.response.status));
          console.log(chalk.red("status message: Fail"));
        } else if (err.response.status >= 200 && err.response.status < 400) {
          console.log(chalk.red("File:", links[i].file));
          console.log(chalk.red("url:", links[i].link));
          console.log(chalk.red("description:", links[i].descrition));
          console.log(chalk.red("status:", err.response.status));
          console.log(chalk.red("status message: slow"));
        }
      });
  }
  console.log(
    chalk.bgBlue("-----------------------------------------------------------")
  );
  console.log(
    chalk.bgBlue("-----------------------------------------------------------")
  );

};

getResponse(links);

// const getResponse = (links) => {
//   for (let i = 0; i < links.length; i++) {
//     axios
//       .get(links[i].link)
//       .then((response) => {
//         // console.log("numero:", i + 1);
//         console.log(chalk.green("url:", links[i].link));
//         console.log(chalk.green("status:", response.status));
//       })
//       .catch((err) => {
//         console.log(chalk.red("url:", links[i].link));
//         console.log(chalk.red("status:", err.response.status));
//       });
//   }
// };
// getResponse(links);
