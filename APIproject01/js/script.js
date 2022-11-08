const container = document.querySelector('.container')
const url = 'https://source.unsplash.com/random/'
const linesNumbers = 5

for (let i = 0; i < linesNumbers * 3; i++) {
    const img = document.createElement("img")
    img.src = `${url}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize(){
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 300
}