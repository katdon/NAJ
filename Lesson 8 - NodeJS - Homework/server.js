const express = require('express');
const api =  require('./api');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.set('config',{});
app.use('/api/', api);

app.post('/', (req, res) => {

})
app.listen(8080, () => console.log('Server started on port 8080'));
