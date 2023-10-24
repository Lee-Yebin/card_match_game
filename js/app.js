document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
        {
            name: 'card1',
            img: './images/card_1.png'
        },
        {
            name: 'card1',
            img: './images/card_1.png'
        },
        {
            name: 'card2',
            img: './images/card_2.png'
        },
        {
            name: 'card2',
            img: './images/card_2.png'
        },
        {
            name: 'card3',
            img: './images/card_3.png'
        },
        {
            name: 'card3',
            img: './images/card_3.png'
        },
        {
            name: 'card4',
            img: './images/card_4.png'
        },
        {
            name: 'card4',
            img: './images/card_4.png'
        },
        {
            name: 'card5',
            img: './images/card_5.png'
        },
        {
            name: 'card5',
            img: './images/card_5.png'
        },
        {
            name: 'card6',
            img: './images/card_6.png'
        },
        {
            name: 'card6',
            img: './images/card_6.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', './images/create_board.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('.grid > img');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('+1점 :)');
            cards[optionOneId].setAttribute('src', './images/white.png');
            cards[optionTwoId].setAttribute('src', './images/white.png');
            cardsWon.push(cardsChosen);
            console.log(optionOneId);
            console.log(optionTwoId);
            cards[optionOneId].style.pointerEvents = 'none';
            cards[optionTwoId].style.pointerEvents = 'none';
        } else {
            cards[optionOneId].setAttribute('src', './images/create_board.png');
            cards[optionTwoId].setAttribute('src', './images/create_board.png');
            console.log(optionOneId);
            console.log(optionTwoId);
            alert('땡! 다시 찾아보기 XD');
        }
        cardsChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = '와!! 다 찾았다!! 게임 끝!';
        }
    }
    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    createBoard();
});