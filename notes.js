const fs = require("fs")
const chalk = require("chalk")


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json")
    const JSONstring = dataBuffer.toString()
    const notes = JSON.parse(JSONstring)
    return notes
  }
  catch (e) {
    return []
  }
}

const saveNotes = notes => fs.writeFileSync("notes.json", JSON.stringify(notes))


const newNote = (notes, title) => notes.every(element => element.title != title)

const getNote = () => {

}
const addNote = (title, body) => {

  debugger
  
  const notes = loadNotes()
  if (notes.length) {
    if (!newNote(notes, title)) {
      console.log(chalk.bgRed.black("note with same title already exists"))
      return
    }
  }
  debugger
  notes.push({ title: title, body: body })
  saveNotes(notes)
  console.log(chalk.bgGreen.black("note has been added successfully"))
}
const removeNote = (title) => {
  const notes = loadNotes()
  if (notes.length === 0) {
    const noticeMsg = chalk.black.bgYellow(`Note list is empty!!`)
    console.log(noticeMsg)
    return
  }
  const newNotes = notes.filter(note => note.title != title)

  if (newNotes.length === notes.length) {
    const failureMsg = chalk.black.bgRed(`Note with title "${title}" couldn't be found!!`)
    console.log(failureMsg)
    return
  }
  saveNotes(newNotes)
  const successMsg = chalk.black.bgGreen(`Note with title "${title}" has been removed successfully`)
  console.log(successMsg)
}

const listNotes = () => {
  const notes = loadNotes()
  if (notes.length === 0) {
    console.log(chalk.bgYellow.black("There are no notes to list!"))
    return
  }
  console.log(chalk.bgGreen.black(`Your notes\n`))
  notes.forEach(note => console.log(note.title, '\n'))
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)
  if (typeof note === "undefined") {
    console.log(chalk.bgRed.black("Note was not found! "))
    return
  }
  console.log(chalk.bgGreen.black(note.title))
  console.log(note.body)
}

module.exports = { getNote, addNote, removeNote, listNotes, readNote }