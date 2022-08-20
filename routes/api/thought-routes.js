const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');
// const { route } = require('./user-routes');

// GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// GET one, PUT, and DELETE at /api/thoughts/<userId>
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// POST and DELETE at /api/thoughts/:thoughtId/reactions
router 
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;