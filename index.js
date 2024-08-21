const express = require('express');
const suger = require('./routes/suger.routes');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT;
require('./db/db')
app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.use('/api/v1', suger);
app.listen(PORT, () => {
    console.log(`connected on ${PORT}`);
});