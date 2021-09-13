const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.set('port', process.env.PORT || 8080);
app.use(cors({
    origin:'*'
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.use('/api', contactRoutes.routes);

app.listen(app.get('port'), () => {
    console.log('App listening on url http://localhost:' + app.get('port'));
  });
