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
    listPostsByGroup(id) {
        return data(axios.get(url.resolve(this.baseUrl, `listgroup/${id}`))) 
    }
    search(word) {
        return data(axios.get(url.resolve(this.baseUrl, `search/${word}`)))
    }
  

    retrievePost (id) {
        return data(axios.get(url.resolve(this.baseUrl, `post/${id}`)))
    }
    retrieveUser (id) {
        return data(axios.get(url.resolve(this.baseUrl, `user/${id}`)))
    }



    createComment ( id, userId, comment) {  // id == post
        return data(axios.post(url.resolve(this.baseUrl, `comment/${id}`), {
            userId, comment
         })) 
    }

    createPost(  title, shortDescription, fullDescription, owner,idPostTemplate,namePostTemplate,tag, URLpath, time) {
        return data(axios.post(url.resolve(this.baseUrl, 'post'), {  title,shortDescription,fullDescription,owner,idPostTemplate,namePostTemplate,tag, URLpath, time }))
    }

    createUser ( name, surname, email, username, password, city, country, about, timelineTitle ) {
        return data(axios.post(url.resolve(this.baseUrl, 'user'), { name, surname, email, username, password, city, country, about, timelineTitle  }))
    }

    deleteComment ( id ){
        return data(axios.delete(url.resolve(this.baseUrl, `comment/${id}`)))
    }

}


function data(resp) {
    return resp.then(res => res.data)
}

module.exports = ApiClient