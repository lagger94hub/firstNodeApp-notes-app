// const validator = require("validator");
// console.log(validator.isEmail("rami@kooko.com"));
// console.log(validator.isURL("ttps://stackoverflow.com/questions10972176find-the-version-of-an-installed-npm-package"));


// const greenSuccess = chalk.bold.green.inverse("success");
// console.log(greenSuccess);

const yargs = require("yargs"); // npm packages 
const chalk = require("chalk");  
const operation = require("./notes"); // our modules 

// customize yargs versions
yargs.version("1.1.0");

//create add command 

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {  // to specify the arguments that the commands takes
    title: {
      describe: "note title",
      demandOption: true, // the optionality of the argument
      type: "string"   // specify the type of the arguemnt
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    operation.addNote(argv.title, argv.body)
  } 
})

//Create remove command 
yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }
  },
  describe: "remove a note",
  handler: function(argv) {
    operation.removeNote(argv.title)
  } 
})

//Create read command 

yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "read a note",
      demandOption: true,
      type: "string"
    }
  },
  describe: "read a note",
  handler(argv) {
    operation.readNote(argv.title)
  }
})

// Create a command to list notes
yargs.command({
  command: "list",
  describe: "list a note",
  handler() {
    operation.listNotes()
  }
})


 yargs.parse() // or we can use console.log(yargs.argv) that will tell the yargs to do it's thing


