const express = require('express')
const app = express()
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');
const session = require('express-session');
const fileUpload = require('express-fileUpload');
const bodyParser = require('body-parser');
const cors = require('cors')

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '../views'));
app.use(logger('dev')); // Por rota no console
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors())


app.use(session({
  secret: 'KEYBORD_CAT-SESSION',
  cookie: {
      maxAge: 60000
  }
}));

// salvar img na db
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, 'tmp')
}));
// CASO DE ERRORR

// body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use((err, req, res, next) => {
    res.status(400).send(err.message)
  })


module.exports = app //Esportando uma variável "APP"