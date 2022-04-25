'use strict'

const sequelize = require('../../config/sequelize.js')
const { DataTypes } = require('sequelize')
const Activity = require('../models/activity.js')(sequelize, DataTypes)
const response = require('../../helpers/response.js')

const ActivityController = {

	async index (req, res) {
		try {
			const activities = await Activity.findAll({ attributes: { exclude: [ 'createdAt', 'updatedAt' ] } })
			response.success(activities, res)
		} catch(err) { response.internalServerError(err, res) }
	}
}

module.exports = ActivityController
