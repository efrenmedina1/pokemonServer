var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Team2 = sequelize.import('../models/team2');

router.get('/', function (req, res){
    let userid = req.user.id;

    Team2.findAll({where: {owner: userid}})
        .then(
            function findAllSuccess(data){
                res.json(data);
            },
            function findAllError(err){
                res.send(500, err.message);
            }
        )
})

router.post('/create', function (req, res){
    let poke1 = req.body.team2.pokemon1;
    let poke2 = req.body.team2.pokemon2;
    let poke3 = req.body.team2.pokemon3;
    let poke4 = req.body.team2.pokemon4;
    let poke5 = req.body.team2.pokemon5;
    let poke6 = req.body.team2.pokemon6;
    let owner = req.user.id;

    Team2
    .create({
        pokemon1: poke1,
        pokemon2: poke2,
        pokemon3: poke3,
        pokemon4: poke4,
        pokemon5: poke5,
        pokemon6: poke6,
        owner: owner
    })
    .then(
        function createSuccess(team2data){
            res.json({
                team2data: team2data
            })
        },
        function createError(err){
            res.send(500, err.message);
        }
    )
})

router.get('/:id', function(req, res){
    let data = req.params.id;
    let userid = req.user.id;

    Team2
        .findOne({
            where: {id: data, owner: userid}
        }).then(
            function findOneSuccess(data){
                res.json(data);
            },
            function findOneError(err){
                res.send(500, err.message);
            }
        )
})

router.put('/:id', function(req, res){
    let updateId = req.params.id;
    let updatepoke1 = req.body.team2.pokemon1;
    let updatepoke2 = req.body.team2.pokemon2;
    let updatepoke3 = req.body.team2.pokemon3;
    let updatepoke4 = req.body.team2.pokemon4;
    let updatepoke5 = req.body.team2.pokemon5;
    let updatepoke6 = req.body.team2.pokemon6;
    let updateOwner = req.user.id;

    Team2
        .update({
            pokemon1: updatepoke1,
            pokemon2: updatepoke2,
            pokemon3: updatepoke3,
            pokemon4: updatepoke4,
            pokemon5: updatepoke5,
            pokemon6: updatepoke6,
            owner: updateOwner
        }, {where: {id: updateId}})
        .then(
            function updateSuccess(){
                res.json({
                    pokemon1: updatepoke1,
                    pokemon2: updatepoke2,
                    pokemon3: updatepoke3,
                    pokemon4: updatepoke4,
                    pokemon5: updatepoke5,
                    pokemon6: updatepoke6,
                    owner: updateOwner
                })
            }, 
            function updateError(err){
                res.send(500, err.message);
            }
        )
})

router.delete('/:id', function (req, res){
    let data = req.params.id;
    let userId = req.user.id;

    Team2 
        .destroy({
            where: {id: data, owner: userId}
        })
        .then(
            function deleteteam2Success(){
                res.send("you removed a team2");
            },
            function deleteteam2Error(err){
                res.send(500, err.message);
            }
        )
})

module.exports = router;