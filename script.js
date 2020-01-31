let cardDeck = []
const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", 'Queen', 'King', 'Ace']
const cardSuits = ['♠', '♥️', '♣️', '♦️']
let player1 = ""
setPlayer = (name) => { 
    player1 = name 
    console.log("Welcome " + player1 + ". Let's get started!")
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

shuffleDeck(cardDeck)