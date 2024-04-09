const NoteModel = require('../models/notes')

const notesControllers = {}

// GET ALL NOTES
notesControllers.getNotes = async (request, response) => {
  const notes = await NoteModel.find();
  response.json(notes)
}

// GET BY NOTE ID
notesControllers.getNote = async (request, response) => {
  //console.log(request.params)
  const note = await NoteModel.findById(request.params.id);
  response.json(note)
}

// CREATED NOTES
notesControllers.createNotes = async (request, response) => {
  //console.log(request.body)
  const { titulo, descripcion, date } = request.body;
  const createNote = new NoteModel({
    titulo: titulo,
    descripcion, descripcion,
    date: date
  });
  await createNote.save();
  response.json({message: 'Nota guardada'})
}

// UPDATE NOTE
notesControllers.updateNotes = async (request, response) => {
  //console.log(request.params.id, request.body);
  const { titulo, descripcion, date } = request.body;  
  await NoteModel.findByIdAndUpdate(request.params.id, {
    titulo: titulo,
    descripcion: descripcion,
    date: date
  })
  response.json({message: 'Nota actualizada'})
}

// DELETE NOTE
notesControllers.deleteNotes = async (request, response) => {
  await NoteModel.findByIdAndDelete(request.params.id)
  response.json({message: 'Nota eliminada'})
}

module.exports = notesControllers;