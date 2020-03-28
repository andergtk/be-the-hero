const express = require('express');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const OngIncidentsController = require('./controllers/OngIncidentsController');

const router = express.Router();

router.post('/sessions', SessionController.create);

router.get('/ongs', OngController.index);
router.post('/ongs', OngController.create);

router.get('/ongs/:ong_id/incidents', OngIncidentsController.index);

router.get('/incidents', IncidentController.index);
router.post('/incidents', IncidentController.create);
router.delete('/incidents/:id', IncidentController.delete);

module.exports = router;