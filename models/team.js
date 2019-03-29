module.exports = function (sequelize, DataTypes){
    return sequelize.define('team', {
        pokemon1: DataTypes.STRING,
        pokemon2: DataTypes.STRING,
        pokemon3: DataTypes.STRING,
        pokemon4: DataTypes.STRING,
        pokemon5: DataTypes.STRING,
        pokemon6: DataTypes.STRING,
        owner: DataTypes.INTEGER
    })
}