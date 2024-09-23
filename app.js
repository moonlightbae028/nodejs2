const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes/route');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router); 
app.use(express.static('public'));

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
