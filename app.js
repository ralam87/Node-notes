console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const titleOptions = {
  describe: 'The title of the note',
  demand: true,
  alias : 't'
}

const bodyOptions = {
  describe: 'The body of the note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all existing notes')
  .command('read', 'Read a note', {
    title: titleOptions
  }).
  command('remove', 'Remove an exisitng note', {
    title : titleOptions
  })
  .help()
  .argv
let command = argv._[0].toLowerCase()

console.log('Command: '+ command)
console.log('-------------')

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)

  note ? notes.logNotes(note) : console.log('Note already exists')

} else if (command === 'list') {
    var allNotes = notes.getAll()

    allNotes.forEach((note) => {
      notes.logNotes(note)
    })
  console.log('-----end of notes-----')

} else if (command === 'read') {
    var note = notes.getNote(argv.title)

    note ? notes.logNotes(note) : console.log('Note doesn\'t exist')

} else if (command === 'remove') {
    var note = notes.removeNote(argv.title)
    console.log(note ? 'Note Removed' : 'Note not found')
}

  else {
    console.log('Command not recognised');
}
