export default class Http {
    static server = 'http://172.19.0.3:5000/api';

    static async login(formVal) {
        const URL = Http.server + '/login?user=' + formVal.user + '&pwd=' + formVal.pwd;
        const response = await fetch(URL);
        return await response.json();
    }
    static async consulta(num){
        const URL = Http.server + '/consulta?num=' + num;
        const response = await fetch(URL);
        const res = await response.json();
        return res;
    }
}