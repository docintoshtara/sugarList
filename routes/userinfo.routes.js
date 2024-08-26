const express = require('express');
const userinfo = new express();
const { add,get } = require('../controller/Userinfo')

userinfo.post('/user', add);
userinfo.get('/user', get);

module.exports = userinfo;