let starWarsCharacters


const container = document.createElement('div')

const dataSection = document.querySelector('')

const dataSection = data.querySelector('#starWarsCharacters')

fetch('https://swapi.co/api/people/1/')
    .then(response => response.json())
    .then(function(data) {
        starWarsCharacters = data
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
            'Name',
            'Height',
            'Mass',
            'Hair-color',
            'Skin-color',
            'Eye-color',
            'Birth-year',
            'Gender'

        )
        for (const repo of data) {
            const listItem = document.createElement('li')
            listItem.innerText = repo.name
            listItem.classList.add('Name', 'Height', 'Mass', 'Hair-color', 'Skin-color', 'Eye-color', 'Birth-year', 'Gender')
            repoList.appendChild(listItem)

        }
    })

function renderH2() {
    const h2EL = document.createElement('h2')
    h2El.innerTex = githubData.name
    dataSection.appendChild(h2El)
}