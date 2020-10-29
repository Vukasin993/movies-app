import { HttpService } from './HttpService'

class AuthService extends HttpService {
    
    login(email, password) {
         return this.axios.post('http://localhost:8000/api/login', {email, password}),
         console.log('AuthService')
    }

    register(user) {
        return this.axios.post('http://localhost:8000/api/register', user),
        console.log(user.name)
    }
    //get user
    
}
export const authService = new AuthService()