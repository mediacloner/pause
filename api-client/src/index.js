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

    listPostsByUser(token) {
        return data(axios.get(url.resolve(this.baseUrl(), 'listbyuser'),{headers:{'Authorization':'Bearer ' + token}}))
 
    },

    listPostsByGroup(token) {
        return data(axios.get(url.resolve(this.baseUrl(), 'listgroup'),{headers:{'Authorization':'Bearer ' + token}})) 
    },

    listFollowingByUser(token) {
        return data(axios.get(url.resolve(this.baseUrl(), 'following'),{headers:{'Authorization':'Bearer ' + token}})) 
 
    },

    listPostsSpecificUser(id) {
        return data(axios.get(url.resolve(this.baseUrl(), `listpostuser/${id}`)))
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



  
    createPost(  title, shortDescription, fullDescription, token, idPostTemplate,namePostTemplate,tag, URLpath, time) {
        return data(axios.post(url.resolve(this.baseUrl(), 'post'), {  title,shortDescription,fullDescription,idPostTemplate,namePostTemplate,tag, URLpath, time },{headers:{'Authorization':'Bearer ' + token}} ))
    },


    createComment ( id, token, comment) {  // id == post
        return data(axios.post(url.resolve(this.baseUrl(), 'comment'), {id, comment},{headers:{'Authorization':'Bearer ' + token}})) 
    },


    login (username, password) {
        return data(axios.post(url.resolve(this.baseUrl(), 'login'), {  username, password}))
    },

    createUser ( name, surname, email, username, password, city, country, about, timelineTitle ) {
        return data(axios.post(url.resolve(this.baseUrl(), 'user'), { name, surname, email, username, password, city, country, about, timelineTitle  }))
    },

    deleteComment ( id ){ // id == post
        return data(axios.delete(url.resolve(this.baseUrl(), `comment/${id}`)))
    }

}


function data(resp) {
    return resp.then(res => res.data)
}

module.exports = apiClient