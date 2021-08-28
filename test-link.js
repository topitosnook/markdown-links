/* eslint-disable */ 
// Prueba sobre los links
function subStr(string, character, position) {
  if (position == "b") return string.substring(string.indexOf(character) + 1);
  else if (position == "a")
    return string.substring(0, string.indexOf(character));
  else return string;
}

const text =
  '<li>[ ] <a href="https://www.youtube.com/watch?v=lPPgY3HLlhQ">Recursión.</a></li>';

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
  
console.log(getLinkAndDescription(text));
