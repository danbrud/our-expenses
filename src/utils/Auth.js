import axios from 'axios'
import jwt_decode from "jwt-decode"

class Auth {
    constructor() {
        this.authenticated = false
        this.checkAuthentication()
    }

    checkAuthentication() {
        if (localStorage.token) {
            let authValue = true
            const decoded = this.decodeToken()
            const currentTime = Date.now() / 1000

            if (decoded.exp < currentTime) { authValue = false }
            
            this.setAuthToken(authValue)
            this.authenticated = authValue
        }
    }

    decodeToken() {
        const token = localStorage.token
        const decoded = jwt_decode(token)
        return decoded
    }

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        this.setAuthToken(false)
        this.authenticated = false
    }

    login(token) {
        localStorage.setItem('token', token)
        this.setAuthToken(token)
        this.authenticated = true
    }

    setAuthToken(token) {
        if (token) {
            axios.defaults.headers.common['Authorization'] = token
        } else {
            delete axios.defaults.headers.common['Authorization']
        }
    }


}

export default Auth