const { Router } = require('express');
const { getContactos, createContacto, updateContacto, deleteContacto } = require('../controllers/contactos.controller');

const router = Router();

router.get('/contactos', getContactos);
router.post('/contactos', createContacto);
router.put('/contactos/:Id', updateContacto);
router.delete('/contactos/:Id', deleteContacto);

module.exports = router;
