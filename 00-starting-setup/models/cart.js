const Sequelize=require('sequelize')
const sequelize=require('../util/database')


module.exports=sequelize.define('cart',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    }
})