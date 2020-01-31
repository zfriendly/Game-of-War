let cardDeck = []
const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", 'Queen', 'King', 'Ace']
const cardSuits = ['♠', '♥️', '♣️', '♦️']
let player1 = ""
let userDeck = []
let computerDeck = []
let spoilsOfWar = [] 
setPlayer = (name) => { 
    player1 = name 
    console.log("Welcome " + player1 + ". Type deal() to get started!")
    
}
console.log("Welcome to War, set your name by typing setPlayer(YOUR NAME in quotes)")


makeDeck = () => {
 let fullDeck = cardSuits.map(suit => (
     cardNumbers.map((num, i) => ({
         card: `${num} ${suit}`,
         value: i
        })
     )
 )
 )
return fullDeck[0].concat(fullDeck[1], fullDeck[2], fullDeck[3])
}
cardDeck = makeDeck()

shuffleDeck = (array) => {
    var i = 0
    var j = 0
    var temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
   return array
}


deal = () => {
    const readyDeck = shuffleDeck(cardDeck)
   userDeck = readyDeck.slice(0, 26).map(i => i)
   computerDeck = readyDeck.slice(26, readyDeck.length).map(j => j)
   console.log('Ok! The cards are dealt. Let us begin!')
}

playCard = () => {
    let userCard = userDeck[0]
    let computerCard = computerDeck[0]
    if (userCard.value > computerCard.value) {
        userDeck.push(computerCard)
        computerDeck.shift()
        userDeck.push(...spoilsOfWar)
    }
    if (userCard.value < computerCard.value) {
        computerDeck.push(userCard)
        userDeck.shift()
        computerDeck.push(...spoilsOfWar)
    }
    if (userCard.value === computerCard.value) {
       console.log("You tied, idiot")
       warCards = (userDeck, computerDeck) =>
       spoilsOfWar.push(userCard)
       spoilsOfWar.push(computerCard)
       spoilsOfWar.splice(userDeck.splice(0, 3))
       spoilsOfWar.splice(computerDeck.splice(0, 3))
       playCard();
       console.log(spoilsOfWar)
}
}