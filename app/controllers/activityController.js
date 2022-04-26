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
	},

	upload (file, res, callback) {
		// Customizing file
		let formatFile = file.name.split('.')
		formatFile = formatFile[ formatFile.length - 1 ]
		const fileName = `IMG-${ new Date().getTime() }.${ formatFile }` // IMG-1689047304955.jpg

		// Move file to /public
		file.mv('public/' + fileName, err => {
			if (err) response.internalServerError(err, res)
			else callback(fileName)
		})
	},

	create (req, res) {
		// if req.files is empty
		if (req.files === null) response.forbiden('property leaderPicture cannot empty', res)

		// Get form
		const { title, client, startAt, finishAt, leaderName, leaderEmail, progress } = req.body

		// Get image and upload
		const { leaderPicture } = req.files
		ActivityController.upload(leaderPicture, res, async fileName => {
			// Create new activity
			try {
				await Activity.create({
					title, client, startAt, finishAt, leaderName, leaderEmail, progress,
					leaderPicture: fileName
				})
				response.success('Success for create new activity', res)
			} catch(err) { response.internalServerError(err, res) }	
		})	
	}
}

module.exports = ActivityController
