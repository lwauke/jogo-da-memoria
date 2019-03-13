const container = document.querySelector('.container');

const arr = [
    {id: 1, imagePath: "images/feliz.jpeg"},
    {id: 2, imagePath: "images/nervoso.jpeg"},
    {id: 3, imagePath: "images/surpreso.jpeg"},
    {id: 4, imagePath: "images/risonho.jpeg"},
];

function randomIndex() {
    return Math.ceil(Math.random() * 4) - 1;
}

function generateCard(obj) {
    const {id, imagePath} = obj;

    return `<div class="card" data-game="1" data-status="0" data-id="${id}">
        <div class="back"></div>
        <img src="${imagePath}" alt="">
    </div>`;
};

function randomGenerate() {
    if (!randomGenerate.cache) randomGenerate.cache = [];

    const index = randomIndex();

    const full = (randomGenerate.cache.filter(n => n === index) || {}).length === 2;


    if (full) {
        return randomGenerate() 
    } else {
        randomGenerate.cache.push(index);
        return generateCard(arr[index]);
    } 
}

let counter = 0;

while(counter < arr.length * 2) {
    container.innerHTML += randomGenerate();
    counter++;
}

const cards = document.querySelectorAll('.card')

cards.forEach(function(element) {
    element.addEventListener('click', function(event) {
        const target = event.currentTarget;

        const activeCard = [].find.call(
            cards, 
            ({dataset: d}) => parseInt(d.status) && parseInt(d.game)
        );

        const equal = activeCard === target;

        target.dataset.status = "1";

        if(activeCard) {
            if(target.dataset.id === activeCard.dataset.id && !equal) {
                activeCard.dataset.game = "out";
                target.dataset.game = "out";
            } else {
                setTimeout(function() {
                    activeCard.dataset.status = 0;
                    target.dataset.status = 0;
                }, 1000)
            }
        }
    })
})