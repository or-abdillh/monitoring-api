'use srict'

const response = require('../../helpers/response.js')

const IndexController = {

	index (req, res) {
		response.success("Example response from your server", res)
	}
}

module.exports = IndexController
