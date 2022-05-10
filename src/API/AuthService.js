
export default class AuthService {
    static async loginUser(login, pass) {
        let tt = ''
        try {
            const hostname = '/signin';
            const response = await fetch(hostname + '?username=' + login + '&password=' + pass, {
                crossDomain: true,
                method: 'POST',
                credentials: 'include'
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
            tt = await response.json();
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        } catch (e) {
            console.log(e);
        }
        console.log(tt);
        return tt;
    }

    static async getUserData() {
        let tt = ''
        try {
            const hostname = 'http://localhost:8089/alfa-mortgage/profile/get';
            const response = await fetch(hostname, {
                crossDomain: true,
                method: 'GET',
                credentials: 'include'
            });
            tt = await response.json();
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        } catch (e) {
            console.log(e);
        }
        console.log(tt);
        return tt;
    }
}