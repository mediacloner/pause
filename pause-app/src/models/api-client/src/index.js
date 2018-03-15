const axios = require('axios')
const url = require('url')

class ApiClient {
    constructor(protocol, host, port) {
        this.baseUrl = `${protocol}://${host}`

        if (port) this.baseUrl += `:${port}`

        this.baseUrl += '/api/'
    }

  
     login(username, password) {
        return this._call('post', 'login', { username, password })
    }
    
    listPosts() {
        return data(axios.get(url.resolve(this.baseUrl, 'list')))
    }

    listPostsByUser(id) {
        return data(axios.get(url.resolve(this.baseUrl, `list/${id}`)))
 
    }

    listPostsByGroup(arrObj) {
        return data(axios.post(url.resolve(this.baseUrl, 'task'), { arrObj })) // TODO: array
    }

    listPostsBySearch(word) {
        return data(axios.get(url.resolve(this.baseUrl, `search/${word}`)))
    }

    retrievePost (id) {
        return data(axios.get(url.resolve(this.baseUrl, `post/${id}`)))
    }

    createComment ( owner, comment) {
        return data(axios.post(url.resolve(this.baseUrl, 'comment'), { owner, comment })) 
    }

    createPost( title, shortDescription, fullDescription, owner, idPostTemplate, namePostTemplate, tag) {
        return data(axios.post(url.resolve(this.baseUrl, 'post'), { title, shortDescription, fullDescription, owner, idPostTemplate, namePostTemplate, tag }))
    }

    createUser ( username, name, surname, email, password, city, country, about) {
        return data(axios.post(url.resolve(this.baseUrl, 'user'), { username, name, surname, email, password, city, country, about }))
    }

    deleteComment ( id, idUser ){
        return this._call('delete', { idUser })
        return data(axios.delete(url.resolve(this.baseUrl, `comment/${id}`), {idUser}))
    }

}


function data(resp) {
    return resp.then(res => res.data)
}

module.exports = ApiClient