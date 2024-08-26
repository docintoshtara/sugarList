require('dotenv').config()
const express = require('express');
const suger = require('./routes/suger.routes');
const user = require('./routes/userinfo.routes')

const app = express();
const PORT = process.env.PORT || 8000;
require('./db/db')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use('/api/v1', suger);
app.use('/api/v1', user);
app.listen(PORT, () => {
    console.log(`connected on ${PORT}`);
});