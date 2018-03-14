const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body, token) {
        const options = {
            method,
            uri: `${this._baseUrl()}/${path}`,
            json: true
        }

        if (body) options.body = body

        if (token) options.headers = { authorization: `Bearer ${token}` }

        return rp(options)
    },

    login(username, password) {
        return this._call('post', 'login', { username, password })
    },

    list(token) {
        return this._call('get', 'users', undefined, token)
    },

    register(token, name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password }, token)
    },

    remove(token, id, username, password) {
        return this._call('delete', `user/${id}`, { username, password }, token)
    },

    retrieve(token, id) {
        return this._call('get', `user/${id}`, undefined, token)
    },

    update(token, id, name, surname, email, newUsername, newPassword, username, password) {
        return this._call('put', `user/${id}`, { name, surname, email, newUsername, newPassword, username, password }, token)
    }
}

module.exports = api