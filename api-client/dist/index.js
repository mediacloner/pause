'use strict';

require('dotenv').config();
var axios = require('axios');
var url = require('url');

var apiClient = {
    baseUrl: function baseUrl() {
        return this.protocol + '://' + this.host + '/api/';
    },

    //return `${this.protocol}://${this.host}:${this.port}/api/`
    listPosts: function listPosts() {
        return data(axios.get(url.resolve(this.baseUrl(), 'list')));
    },
    listPostsByUser: function listPostsByUser(token) {
        return data(axios.get(url.resolve(this.baseUrl(), 'listbyuser'), { headers: { 'Authorization': 'Bearer ' + token } }));
    },
    listPostsByGroup: function listPostsByGroup(token) {
        return data(axios.get(url.resolve(this.baseUrl(), 'listgroup'), { headers: { 'Authorization': 'Bearer ' + token } }));
    },
    listFollowingByUser: function listFollowingByUser(token) {
        return data(axios.get(url.resolve(this.baseUrl(), 'following'), { headers: { 'Authorization': 'Bearer ' + token } }));
    },
    listPostsSpecificUser: function listPostsSpecificUser(id) {
        return data(axios.get(url.resolve(this.baseUrl(), 'listpostuser/' + id)));
    },
    search: function search(word) {
        return data(axios.get(url.resolve(this.baseUrl(), 'search/' + word)));
    },
    addKudo: function addKudo(id) {
        return data(axios.put(url.resolve(this.baseUrl(), 'kudos/' + id)));
    },
    follow: function follow(id, userFollow) {
        return data(axios.post(url.resolve(this.baseUrl(), 'follow/' + id), { userFollow: userFollow }));
    },
    retrievePost: function retrievePost(id) {
        return data(axios.get(url.resolve(this.baseUrl(), 'post/' + id)));
    },
    retrieveUser: function retrieveUser(id) {
        return data(axios.get(url.resolve(this.baseUrl(), 'user/' + id)));
    },
    createPost: function createPost(title, shortDescription, fullDescription, token, idPostTemplate, namePostTemplate, tag, URLpath, time) {
        return data(axios.post(url.resolve(this.baseUrl(), 'post'), { title: title, shortDescription: shortDescription, fullDescription: fullDescription, idPostTemplate: idPostTemplate, namePostTemplate: namePostTemplate, tag: tag, URLpath: URLpath, time: time }, { headers: { 'Authorization': 'Bearer ' + token } }));
    },
    createComment: function createComment(id, token, comment) {
        // id == post
        return data(axios.post(url.resolve(this.baseUrl(), 'comment'), { id: id, comment: comment }, { headers: { 'Authorization': 'Bearer ' + token } }));
    },
    login: function login(username, password) {
        return data(axios.post(url.resolve(this.baseUrl(), 'login'), { username: username, password: password }));
    },
    createUser: function createUser(name, surname, email, username, password, city, country, about, timelineTitle) {
        return data(axios.post(url.resolve(this.baseUrl(), 'user'), { name: name, surname: surname, email: email, username: username, password: password, city: city, country: country, about: about, timelineTitle: timelineTitle }));
    },
    deleteComment: function deleteComment(id) {
        // id == post
        return data(axios.delete(url.resolve(this.baseUrl(), 'comment/' + id)));
    }
};

function data(resp) {
    return resp.then(function (res) {
        return res.data;
    });
}

module.exports = apiClient;
