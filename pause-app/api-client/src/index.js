const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body) {
        const options = {
            method,
            uri: `${this._baseUrl()}/${path}`,
            json: true
        }

        if (body) options.body = body


        return rp(options)
    },

    login(username, password) {
        return this._call('post', 'login', { username, password })
    },
    
    listPosts() {
        return this._call('get', 'list')
    },

    listPostsByUser(id) {
        return this._call('get', `list/${id}`) 
 
    },

    listPostsByGroup(array) {
        return this._call('get', 'listgroup', array) // TODO: array
    },

    listPostsBySearch(word) {
        return this._call('get', `search/${word}`)
    },

    retrievePost (id) {
        return this._call('get', `list/${id}`)
    },

    createComment ( owner, comment) {
        return this._call('post', 'comment', { owner, comment }) 
    },

    createPost( title, shortDescription, fullDescription, owner, idPostTemplate, namePostTemplate, tag) {
        return this._call('post', 'post', { title, shortDescription, fullDescription, owner, idPostTemplate, namePostTemplate, tag }) // TODO: array
    },

    createUser ( username, name, surname, email, password, city, country, about) {
        return this._call('user', 'post', { username, name, surname, email, password, city, country, about }) // TODO: array
    },

    deleteComment ( id, idUser ){
        return this._call('delete', `comment/${id}`, { idUser })
    },

}

module.exports = api