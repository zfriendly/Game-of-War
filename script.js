let cardDeck = []
const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", 'Queen', 'King', 'Ace']
const cardSuits = ['♠', '♥️', '♣️', '♦️']
const cardValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

makeDeck = () => {
 let fullDeck = cardSuits.map(suit => (
     cardNumbers.map((num, i) => ({
         card: `${num} ${suit}`,
         value: cardValues[i]
        })
     )
 )
 )
 console.log(fullDeck)
}

makeDeck()