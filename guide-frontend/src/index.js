const BASE_URL = 'http://localhost:3000'
const container = document.querySelector('.container')

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('airports-nav').addEventListener('click', getAirports)

    document.getElementById('airports-form').addEventListener('click', displayForm)

    document.getElementById('open').addEventListener('click', () => container.classList.add('show-nav'))

    document.getElementById('close').addEventListener('click', () => container.classList.remove('show-nav'))

    document.getElementById('airports-nav').addEventListener('click', () => container.classList.remove('show-nav'))

    document.getElementById('airports-form').addEventListener('click', () => container.classList.remove('show-nav'))


})

function getAirports() {
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + '/airports')
    .then(res => res.json())
    .then(airports => {
        airports.map(airport=> {
        main.innerHTML += `
            <li>
                <a href="#"data-id="${airport.id}">${airport.name} - ${airport.city}, ${airport.state}</a>
            </li>
            `
        })
        attachClicksToLinks()
})}

function displayForm() {
    let formDiv = document.querySelector('#airport-form')
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
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createAirport)
}

function clearForm() {
    let formDiv = document.querySelector('#airport-form')
    formDiv.innerHTML = ""
}

function createAirport(e) {
    e.preventDefault()

    console.log(e)
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
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + `/airports/${id}`)
    .then(res => res.json())
    .then(airport => {
        main.innerHTML = `
            <h3>${airport.name}</h3>
            <h4>${airport.city}, ${airport.state}</h4>
            <hr>
            <br>
        `
    })
}

// init()