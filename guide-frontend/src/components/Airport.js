class Airport {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.abreviation = data.abreviation
        this.city = data.city
    }

    render() {
        return `
         <li>
            <a href="#" data-id="${this.id}">${this.name}</a>
        </li>
        `
    }
}

