'use strict'

const home = require('../app/controllers/indexController.js')

module.exports = app => {

	app.route('/').get( home.index )
}
