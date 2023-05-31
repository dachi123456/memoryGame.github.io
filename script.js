const fruitArr = [
    {name: 'apple', img: 'assets/apple.png' },
    {name: 'bananas', img: 'assets/bananas.png' },
    {name: 'grapes', img: 'assets/grapes.png' },
    {name: 'orange', img: 'assets/orange.png' },
    {name: 'pineapple', img: 'assets/pineapple.png' },
    {name: 'strawberry', img: 'assets/strawberry.png' },
    {name: 'apple', img: 'assets/apple.png' },
    {name: 'bananas', img: 'assets/bananas.png' },
    {name: 'grapes', img: 'assets/grapes.png' },
    {name: 'orange', img: 'assets/orange.png' },
    {name: 'pineapple', img: 'assets/pineapple.png' },
    {name: 'strawberry', img: 'assets/strawberry.png' },
    
]

let res= fruitArr.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
let chosenCard = []
let chosenCardIds = []
const cardsWon = []

function createBoard(){
    for(let i = 0; i < 12; i++ ){
        const card = document.createElement('img')
        card.setAttribute('src','./assets/bg.jpg')
        card.addEventListener('click', flipCard)
        card.style.width = '5rem'
        card.style.height = '6rem'
        card.setAttribute('data-id',i)
        grid.append(card)
    }
}
createBoard()
const score = document.querySelector('.score')
    score.textContent = 0
function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = chosenCardIds[0]
    const optionTwoId = chosenCardIds[1]

    if(optionOneId == optionTwoId){
        alert('u have clicked to same image')
    }

    
    if(chosenCard[0] == chosenCard[1]){
        alert(' MATCHED. PLEASE CONTINUE')
        cards[optionOneId].setAttribute('src','assets/white.webp')
        cards[optionTwoId].setAttribute('src','assets/white.webp')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(chosenCard)
        score.textContent++
    }else{
        cards[optionOneId].setAttribute('src','assets/bg.jpg')
        cards[optionTwoId].setAttribute('src','assets/bg.jpg')
    }
    chosenCard = []
    chosenCardIds = []
    if(cardsWon.length === fruitArr.length / 2){
        alert('YOU WON . RESTART THE PAGE')
    }

     if(chosenCard[0] != chosenCard[1]){
        cards[chosenCardIds[0]].setAttribute('src','assets/bg.jpg')
        cards[chosenCardIds[1]].setAttribute('src','assets/bg.jpg')
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    chosenCardIds.push(cardId)
    chosenCard.push(fruitArr[cardId].name)
    this.setAttribute('src',fruitArr[cardId].img)
    if(chosenCard.length === 2){
        setTimeout(checkMatch,500);
}
}
