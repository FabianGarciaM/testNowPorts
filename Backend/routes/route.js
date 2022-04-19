const express = require('express');
const api = express.Router();
const usrctrl = require("../controllers/UserCtrl");

api.get('/testdev', usrctrl.testdev);

api.post('/login', usrctrl.login);
api.post('/user', usrctrl.user);
api.post('/contacts', usrctrl.contacts);
api.get('/contacts', usrctrl.getcontact)
api.get('/contactsforid/:id', usrctrl.getcontactsforid);
api.post("/dcontact", usrctrl.deletecontacts);
api.post('/upcontacts', usrctrl.updatecontacts)




module.exports = api;