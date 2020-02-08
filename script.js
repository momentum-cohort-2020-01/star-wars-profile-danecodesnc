let starWarsCharacter


// const container = document.createElement('div')

// const dataSection = document.querySelector('')

const dataSection = document.querySelector('#starWarsCharacter')



fetch('https://swapi.co/api/people/1/')
    .then(response => response.json())
    .then(function(data) {
        starWarsCharacter = data
        console.log(starWarsCharacter)
        renderImage()
        renderH2()
    })


.then(function() {
    let characteristicsList = document.createElement('ul')
    for (let characteristic of['height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender']) {
        let listItem = makeListItem(characteristic)
        characteristicsList.append(listItem)
    }



    // we looked at what could be generalized and made it into one function called makeListItem
    // let heightItem = document.createElement('li')
    // let massItem = document.createElement('li')
    // heightItem.innerText = "Height: " + data.height
    // massItem.innerText = "Mass: " + data.mass
    // characteristicsList.append(heightItem)
    // characteristicsList.append(massItem)
    dataSection.append(characteristicsList)
})

const img = document.createElement('img')
img.src = 'https://i.redd.it/2qmnb44sbt7z.jpg'
img.classList.add("br-100", "h3", "w3", "dib")
dataSection.appendChild(img)


function makeListItem(characteristic) {
    let listItem = document.createElement('li')
    listItem.innerText = characteristic + ": " + starWarsCharacter[characteristic]
    listItem.classList.add("f5", "fw4", "gray", "mt0")
    return listItem
}

function renderH2() {
    const h2El = document.createElement('h2')
    h2El.innerText = starWarsCharacter.name
    h2El.classList.add("f3", "mb2")
    dataSection.appendChild(h2El)
}

function renderImage() {

}