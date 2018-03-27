const storage = {

    getToken(){
        return sessionStorage.getItem('token')
    },

    setToken(value){
        return sessionStorage.setItem('token', value)
    },

    removeToken(){
        return sessionStorage.removeItem('token')
    }
}

export default storage