const apiService = new ApiService()
let main = document.getElementById('main')
const container = document.querySelector('.container')

const init= () => {
    bindEventListeners()
}

function bindEventListeners() {
    document.getElementById('airports-nav').addEventListener('click', renderAirports)

    document.getElementById('airports-form').addEventListener('click', displayForm)

    document.getElementById('open').addEventListener('click', () => container.classList.add('show-nav'))

    document.getElementById('close').addEventListener('click', () => container.classList.remove('show-nav'))

    document.getElementById('airports-nav').addEventListener('click', () => container.classList.remove('show-nav'))

    document.getElementById('airports-form').addEventListener('click', () => container.classList.remove('show-nav'))

}

async function renderAirports() {
    // let main = document.getElementById('content')
    const airports = await apiService.fetchAirports()
    main.innerHTML = ""
    airports.map(airport => {
        const newAirport = new Airport(airport)
        main.innerHTML  += newAirport.render()
    })

}

function displayForm() {
    let main = document.getElementById('main')
    main.innerHTML = ""
    let html = `
        <form>
            <label>Airport Name:</label>
            <input type="text" id="name">
            <label>Airport Abreviation:</label>
            <input type="text" id="abreviation">
            <label>City:</label>
            <input type="text" id="city">
            <label>Sate:</label>
            <input type="text" id="state">
            <input type="submit">
        </form>
    `
    main.innerHTML = html
    document.querySelector('form').addEventListener('submit', createAirport)
}

function clearForm() {
    let main = document.querySelector('#airport-form')
    main.innerHTML = ""
}

function createAirport(e) {
    e.preventDefault()
    let main = document.getElementById('content')
    let airport = {
        name:  e.target.querySelector('#name').value,
        abreviation: e.target.querySelector('#abreviation').value,
        city: e.target.querySelector('#city').value,
        state: e.target.querySelector('#state').value
    }  

    let configObj =  {
        method: 'POST',
        body: JSON.stringify(airport),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    
    main.innerHTML = ""
    fetch(BASE_URL + '/airports', configObj)
    .then(res => res.json())
    .then(airport => {
        main.innerHTML += `
            <li>
                <a href="#"data-id="${airport.id}">${airport.name} - ${airport.city}, ${airport.state}</a>
            </li>
            `
        attachClicksToLinks()
        clearForm()
        }
    )
}


function attachClicksToLinks() {
    let airports = document.querySelectorAll('li a')
    airports.forEach(airport => {
        airport.addEventListener('click', displayAirport)
    })

}

function displayAirport(e) {
    console.log(e.target)
    let id = e.target.dataset.id
    let main = document.getElementById('content')
    main.innerHTML = ""
    fetch(BASE_URL + `/airports/${id}`)
    .then(res => res.json())
    .then(airport => {
        main.innerHTML = `
            <h3>${airport.name}</h3>
            <h4>${airport.city}, ${airport.state}</h4>
            <button id='delete-airport' data-id="${airport.id}">Delete</button>
            <hr>
            <br>
        `
        document.getElementById('delete-airport').addEventListener('click', removeAirport)
    })
}

function removeAirport(e) {
    let configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        } 
    }
    fetch(BASE_URL + `/airports/${e.target.dataset.id}`, configObj)
    .then(() => {
        console.log('deleting')
        getAirports()}
    )
    
}

init()