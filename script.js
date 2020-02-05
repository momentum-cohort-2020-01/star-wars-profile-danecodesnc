fetch('https://swapi.co/api/starships/15')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        const newEl = document.createElement('h2')
        newEl.innerText = data.name
        dataSection.appendChild(newEl)
    })