class ApiService {
    constructor(){
        this.baseURL = 'http://localhost:3000'
    }
    
    async fetchAirports() {
        let res = await fetch(this.baseURL + '/airports')
        let data = await res.json()
        return data
    }
}


