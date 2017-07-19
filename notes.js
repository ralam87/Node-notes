console.log('testing notes.js')

const fs = require('fs')

const fetchNotes = () => {
  try {
    let noteString = fs.readFileSync('notes-data.json')
    return notes = JSON.parse(noteString)
  } catch (err) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}

const addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }

  var duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = () => {
  return fetchNotes()
}

const getNote = (title) => {
  var notes = fetchNotes()

  return notes.filter((note) => note.title === title)
}

const removeNote = (title) => {
  var notes = fetchNotes()
  var removedNotes = notes.filter((note) => note.title !== title)
  saveNotes(removedNotes)

  return notes.length !== removedNotes.length
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}