const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/ticket.js_controller');

router.post("/", ticketController.ticket_create);




module.exports = router;