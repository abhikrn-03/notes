const chalk = require('chalk');
const { describe, argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');

// Adding a note
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote
        console.log('Title: ' + chalk.blue(argv.title));
        console.log('Body: ' + chalk.blue(argv.body));
    }
});

// Removing a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
});

// Reading a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note');
    }
});


// Listing the notes
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes');
    }
});

yargs.parse();

