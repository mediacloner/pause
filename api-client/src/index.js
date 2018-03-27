require('dotenv').config()
const axios = require('axios')
const url = require('url')

const apiClient = {
    baseUrl(){
        return `${this.protocol}://${this.host}:${this.port}/api/`
    }, 
    
    listPosts () {
        return data(axios.get(url.resolve(this.baseUrl(), 'list')))
    },

    listPostsByUser(id) {
        return data(axios.get(url.resolve(this.baseUrl(), `list/${id}`)))
 
    },

    listFollowingByUser(id) {
        return data(axios.get(url.resolve(this.baseUrl(), `following/${id}`)))
 
    },
    listPostsByGroup(id) {
        return data(axios.get(url.resolve(this.baseUrl(), `listgroup/${id}`))) 
    },
    search(word) {
        return data(axios.get(url.resolve(this.baseUrl(), `search/${word}`)))
    },
  
    addKudo (id) {
        return data(axios.put(url.resolve(this.baseUrl(), `kudos/${id}`)))
    },
    retrievePost (id) {
        return data(axios.get(url.resolve(this.baseUrl(), `post/${id}`)))
    },
    retrieveUser (id) {
        return data(axios.get(url.resolve(this.baseUrl(), `user/${id}`)))
    },



    createComment ( id, userId, comment) {  // id == post
        return data(axios.post(url.resolve(this.baseUrl(), `comment/${id}`), {
            userId, comment
         })) 
    },

    createPost(  title, shortDescription, fullDescription, owner,idPostTemplate,namePostTemplate,tag, URLpath, time) {
        return data(axios.post(url.resolve(this.baseUrl(), 'post'), {  title,shortDescription,fullDescription,owner,idPostTemplate,namePostTemplate,tag, URLpath, time }))
    },

    login (username, password) {
        return data(axios.post(url.resolve(this.baseUrl(), 'login'), {  username, password}))
    },

    createUser ( name, surname, email, username, password, city, country, about, timelineTitle ) {
        return data(axios.post(url.resolve(this.baseUrl(), 'user'), { name, surname, email, username, password, city, country, about, timelineTitle  }))
    },

    deleteComment ( id ){
        return data(axios.delete(url.resolve(this.baseUrl(), `comment/${id}`)))
    }

}


function data(resp) {
    return resp.then(res => res.data)
}

module.exports = apiClient