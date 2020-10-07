const chalk = require('chalk');
const note = require('./notes.js');

const note1 = note();
console.log(chalk.blue.bgRed.bold(note1));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));