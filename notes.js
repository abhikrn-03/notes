const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "My notes..";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote){
        notes.push({
        title: title,
        body: body
    });
    saveNotes(notes);
    console.log(chalk.black.bgGreen('New Note Added!'));
    } else {
        console.log(chalk.bgRed('Note Title Taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const remainingNotes = notes.filter((note) => note.title!==title);
    if (notes.length === remainingNotes.length){
        console.log(chalk.bgRed('Note Not Found!'));
    } else {
        console.log(chalk.black.bgGreen('Note Removed!'));
    }
    saveNotes(remainingNotes);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('My Notes:'));
    notes.forEach((note) => {
        return console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const reqNote = notes.find((note) => note.title === title);
    if (reqNote){
        console.log(chalk.blue.inverse(reqNote.title));
        console.log(reqNote.body);
    } else {
        console.log(chalk.red.inverse('Note Not Found!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}