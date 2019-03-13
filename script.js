const cards = document.querySelectorAll('.card')

cards.forEach(function(element) {
    element.addEventListener('click', function(event) {
        const alvo = event.currentTarget
        alvo.dataset.status = "on"
        console.log(alvo)
    })
})