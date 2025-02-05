const {Router} = require('express');
const router = Router();

const { getNotes, createNotes, getNote, updateNotes, deleteNotes } = require('../controllers/notes.controllers');

router.route('/')
  .get(getNotes)
  .post(createNotes);


router.route('/:id')
  .get(getNote)
  .delete(deleteNotes)
  .put(updateNotes)

module.exports = router;