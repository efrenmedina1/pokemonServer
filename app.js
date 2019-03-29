require('dotenv').config();

var express = require('express');
var app = express();
var user = require('./controllers/userController');
var poke = require('./controllers/pokeController');
var poke2 = require('./controllers/pokeController2');
var poke3 = require('./controllers/pokeController3');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use('/account', user);

app.use(require('./middleware/validate-session'));
app.use('/team', poke);
app.use('/team2', poke2);
app.use('/team3', poke3);
    

app.listen(process.env.PORT, function(){
    console.log('I wanna be the best, like no one ever was');
})