require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

let token

beforeEach(done => {
    api.login('u', 'p')
        .then(res => {
            assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

            assert(res.data && res.data.token, 'should return data token')

            token = res.data.token

            done()
        })
        .catch(done)
})

describe('api', () => {
    !true && it('should login', done => {
        api.login('u', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                assert(res.data && res.data.token, 'should return data token')

                done()
            })
            .catch(done)
    })

    !true && it('should register', done => {
        api.register(token, 'n', 's', 'e', 'u2', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                assert(res.data && res.data.id, 'should return data id')

                done()
            })
            .catch(done)
    })

    !true && it('should list', done => {
        api.list(token)
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                assert(res.data && res.data.length > 0, 'should return data array')

                // TODO delete all

                done()
            })
            .catch(done)
    })

    true && it('should delete', done => {
        api.register(token, 'n', 's', 'e', 'u22', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                return api.remove(token, res.data.id, 'u22', 'p')
            })
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                done()
            })
            .catch(done)
    })

    !true && it('should retrieve', done => {
        api.register(token, 'n', 's', 'e', 'u5', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                return api.retrieve(token, res.data.id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                const user = res.data

                assert(user, 'should return data user')

                assert.equal(user.name, 'n')
                assert.equal(user.surname, 's')
                assert.equal(user.email, 'e')
                assert.equal(user.username, 'u5')

                done()
            })
            .catch(done)
    })

    !true && it('should update', done => {
        api.register(token, 'n', 's', 'e', 'u8', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                return api.update(token, res.data.id, 'n', 's', 'e', 'u9', 'p', 'u8', 'p')
            })
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                done()
            })
            .catch(done)
    })
})