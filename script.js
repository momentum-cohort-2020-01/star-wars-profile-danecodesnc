let starWarsCharacters

const dataSection = data.querySelector('#starwars-data')

fetch('https://swapi.co/api/people/1/')
    .then(response => response.json())
    .then(function(data)) {
        githubData = data
        rednerH2()
        return data.repos_url
    })
.then(function(url) {
        return fetch(url)
    })
    .then(response => response.json())
    .then(function(data) {
        console.log(data)
        const repoList = document.createElement('ul')
        dataSection.appendChild(repoList)
        repoList.classList.add(
            //List of items that need to come up for Skywalker on page.
            'list',
            'pl0',
            'ml0',
            'center',
            'mw6',
            'ba',
            'b--light-silver',
            'br3'


        )
        for (const repo of data) {
            const listItem = document.createElement('li')
            listItem.innerText = repo.name
            listItem.classList.add('ph3', 'pv2', 'bb', 'b--light-silver')
            repoList.appendChild(listItem)

        }
    })

function renderH2() {
    const h2EL = document.createElement('h2')
    h2El.innerTex = githubData.name
    dataSection.appendChild(h2El)
}