const _ = require('lodash')
const rp = require('request-promise')

const controllers = require('./controller')

const apiPrefix = '/api/v1'

module.exports = [function (app) {
//   const config = app.config
  const router = app.router
  router.all(`${apiPrefix}/docs/getContent`, controllers.getDocContent)
},
]
    
