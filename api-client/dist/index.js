'use strict';

require('dotenv').config();
var axios = require('axios');
var url = require('url');

var apiClient = {
    baseUrl: function baseUrl() {
       /*  console.log('this->', undefined); */
        return 'http://localhost:5000/api/'; //`${this.protocol}://${this.host}:${this.port}/api/`
    },
    //  baseUrl: `http://localhost:5000/api/`,
    //baseUrl: `${this.protocol}://${this.host}:${this.port}/api/`,

    /* baseUrl: "https://cryptic-bayou-64395.herokuapp.com/api/", */

    /*  
       login(username, password) {
           return this._call('post', 'login', { username, password })
       } */

    listPosts: function listPosts() {
        return data(axios.get(url.resolve(undefined.baseUrl(), 'list')));
    },

    listPostsByUser: function listPostsByUser(id) {
        return data(axios.get(url.resolve(this.baseUrl(), 'list/' + id)));
    },
    listFollowingByUser: function listFollowingByUser(id) {
        return data(axios.get(url.resolve(this.baseUrl(), 'following/' + id)));
    },
    listPostsByGroup: function listPostsByGroup(id) {
        return data(axios.get(url.resolve(this.baseUrl(), 'listgroup/' + id)));
    },
    search: function search(word) {
        return data(axios.get(url.resolve(this.baseUrl(), 'search/' + word)));
    },
    addKudo: function addKudo(id) {
        return data(axios.put(url.resolve(this.baseUrl(), 'kudos/' + id)));
    },
    retrievePost: function retrievePost(id) {
        return data(axios.get(url.resolve(this.baseUrl(), 'post/' + id)));
    },
    retrieveUser: function retrieveUser(id) {
        return data(axios.get(url.resolve(this.baseUrl(), 'user/' + id)));
    },
    createComment: function createComment(id, userId, comment) {
        // id == post
        return data(axios.post(url.resolve(this.baseUrl(), 'comment/' + id), {
            userId: userId, comment: comment
        }));
    },
    createPost: function createPost(title, shortDescription, fullDescription, owner, idPostTemplate, namePostTemplate, tag, URLpath, time) {
        return data(axios.post(url.resolve(this.baseUrl(), 'post'), { title: title, shortDescription: shortDescription, fullDescription: fullDescription, owner: owner, idPostTemplate: idPostTemplate, namePostTemplate: namePostTemplate, tag: tag, URLpath: URLpath, time: time }));
    },
    createUser: function createUser(name, surname, email, username, password, city, country, about, timelineTitle) {
        return data(axios.post(url.resolve(this.baseUrl(), 'user'), { name: name, surname: surname, email: email, username: username, password: password, city: city, country: country, about: about, timelineTitle: timelineTitle }));
    },
    deleteComment: function deleteComment(id) {
        return data(axios.delete(url.resolve(this.baseUrl(), 'comment/' + id)));
    }
};

function data(resp) {
    return resp.then(function (res) {
        return res.data;
    });
}

module.exports = apiClient;
