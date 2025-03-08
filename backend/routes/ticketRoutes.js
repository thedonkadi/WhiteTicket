const express = require('express');
const { postTicket, getTicketsByLocation, getTicketsByMovie, getTicketsByUser } = require('../controllers/ticketController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, postTicket);
router.get('/location/:location', getTicketsByLocation);
router.get('/movie/:movieName', getTicketsByMovie);
router.get('/user', auth, getTicketsByUser); // New route for user tickets

module.exports = router;