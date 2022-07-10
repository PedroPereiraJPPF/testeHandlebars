// handleabars serve para adicionar funcionalidades extras no html

const express = require('express')
var exphbs = require('express-handlebars')

const app = express()

// definir a pasta que contem as views 
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs.engine({defaultLayout : 'principal'}))
app.set('view engine', 'handlebars')

// Rotas
app.get('/', function (req, res) {
    res.render('inicio')
})

app.get('/sobre', function (req, res) {
    res.render('sobre')
})

app.listen(8081)



/*
var express = require('express')
var exphdb = require('express-handlebars')

const app = express();

app.set('views', __dirname + '/views');
app.engine('handlebars', exphdb.engine({defaultLayout : 'principal'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('inicio');
});
app.get('/sobre', (req, res) => {
    res.render('sobre')
})

app.listen(3000);
*/