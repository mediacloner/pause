require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

api.list()
    .then(res => {
        assert.equal(res.status, 'OK', 'results should be OK')

        assert(res.data && res.data.length > 0, 'should return data')
    })
    .catch(console.error)
