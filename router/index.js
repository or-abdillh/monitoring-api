'use strict'

const home = require('../app/controllers/indexController.js')
const activity = require('../app/controllers/activityController.js')

module.exports = app => {

	app.route('/').get( home.index )

	app.route('/activity')
		.get( activity.index ) // Get all activities
		.post( activity.create ) // Create new activity include image upload
		.delete( activity.destroy ) // remove activity ffrom database
		.put( activity.update ) // Update data activity

	app.route('/activity/:id').get( activity.search )
}
