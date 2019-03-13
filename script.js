const cards = document.querySelectorAll('.card')

cards.forEach(function(element) {
    element.addEventListener('click', function(event) {
        const target = event.currentTarget;
        const activeCards = [].filter.call(cards, ({dataset: d}) => parseInt(d.status) && parseInt(d.game));

        target.dataset.status = "1";

        if(activeCards.length === 1) {
            if(target.dataset.id === activeCards[0].dataset.id) {
                activeCards[0].dataset.game = "out";
                target.dataset.game = "out";
            } else {
                setTimeout(function() {
                    activeCards[0].dataset.status = 0;
                    target.dataset.status = 0;
                }, 1000)
            }
        }
        
        console.log(activeCards)
    })
})