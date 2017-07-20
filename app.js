console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
let command = argv._[0]
console.log('Command: '+command.toLowerCase())
console.log('-------------')

if (command.toLowerCase() === 'add') {
  var note = notes.addNote(argv.title, argv.body)

  if (note) {
    notes.logNotes(note)
  } else {
    console.log('Note already exists')
  }

} else if (command.toLowerCase() === 'list') {
    var allNotes = notes.getAll()

    allNotes.forEach((note) => {
      notes.logNotes(note)
    })

  console.log('-----end of notes-----')

} else if (command.toLowerCase() === 'read') {
    var note = notes.getNote(argv.title)

    if (note) {
      notes.logNotes(note)
    } else {
      console.log('Note doesn\'t exist')
    }

} else if (command.toLowerCase() === 'remove') {
    var note = notes.removeNote(argv.title)
    console.log(note ? 'Note Removed' : 'Note not found')
}

  else {
    console.log('Command not recognised');
}
