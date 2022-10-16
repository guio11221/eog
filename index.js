require('dotenv').config() // gerencia as variavel de ambiente .env
const app          = require('./confg/app') // conffiguração do express
const PORTA        = process.env.PORTA || 3000 || 5000 || 8080 || 3333 // PORTA 
// muda o nome do arquivo  exemple_env para  .env
const fileUpload = require('express-fileupload');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors')

// COR NO CONSOLE
var red, blue, verde;
red   = '\u001b[31m';
blue  = '\u001b[34m';
verde = '\033[1;32m'



app.get('/home', cors(), (req,res) =>{res.render('portigolio.ejs')})





  
  app.listen(PORTA, () =>{
    var dtNow = new Date;

    console.log(red,'=====================================');
    console.log('    Servidor rodando: ' + dtNow.getHours() + ":" + dtNow.getMinutes() + ":" + dtNow.getSeconds());
    console.log(` ${blue}    Criador: Guii_Santos`)
    console.log('=====================================',verde); 
    
    // http://localhost:3000/
  })
