var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

console.log(chalk.magenta.bgCyan('THIS CLASHES!'));


const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);


console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
console.log(chalk`{bold.hex('#57b7b4') Hello!}`);
