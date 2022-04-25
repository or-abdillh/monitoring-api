'use strict'

const DB = require('../config/db_config.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
	DB.name, DB.username, DB.password, {
		host: DB.host,
		dialect: 'mysql'
	}
)

const connect = async () => {
	try {
		await sequelize.authenticate()
		console.log('MYSQL Connection : no problem')
	} catch(err) { console.log("MYSQL Connection : \n", err) }
}

connect()

module.exports = sequelize
