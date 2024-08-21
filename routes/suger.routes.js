const express = require('express');
const suger = new express();
const { add, get, edit, delete_ } = require('../controller/Suger')


suger.post('/sugar', add);
suger.get('/sugar', get);
suger.put('/sugar/:id', edit);
suger.delete('/sugar/:id', delete_);

module.exports = suger;