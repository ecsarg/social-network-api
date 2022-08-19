const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

// GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// GET one, PUT, and DELETE at /api/thoughts/<userId>
router
    .route('/:userId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// POST at /api/thoughts/:thoughtId/reactions
router 
    .route('/:userId/:thoughtId')
    .post(addReaction);

// DELETE at /api/thoughts/:thoughtId/reactions
router
    route('/:userId/:thoughtId:/reactionId')
    .delete(removeReaction);

module.exports = router;