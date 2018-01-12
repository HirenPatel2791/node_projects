console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
var titleOption = {
describe: 'Title of Note',
demand: true,
alias: 't'
};
var bodyOption = {
  describe: 'Body of Note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add','Add a new note',{
    title:titleOption,
    body:bodyOption
  })
  .command('list', 'List all Notes')
  .command('read', 'Read a Note',{
    title:titleOption
  })
  .command('remove', 'Remove a Note',{
    title:titleOption
  })
  .help()
  .argv;
var command = argv._[0];
console.log("Command:", command);
console.log("Yargs",argv);

if (command === 'add') {
  var note = notes.addNote(argv.title,argv.body);
  if (note) {
    console.log('Note created.');
    notes.logNote(note);
  }else {
      console.log('Note title taken!');
  }
}else if (command === 'list') {
  var allNotes=notes.getAll();
  console.log('Printing ${allNotes.length} note(s).');
  allNotes.forEach((note) => notes.logNote(note));
}else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note Found.');
    notes.logNote(note);
  }else {
      console.log('Note Not Found!');
  }
}else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message  = noteRemoved ? 'Note Was Removed.' : 'Note Not Found';
  console.log(message);
}else {
  console.log('Command not recognized');
}
