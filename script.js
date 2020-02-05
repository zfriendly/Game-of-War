let cardDeck = [];
const cardNumbers = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "Jack",
  "Queen",
  "King",
  "Ace"
];
const cardSuits = ["♠", "♥️", "♣️", "♦️"];

let userDeck = [];
let computerDeck = [];
let spoilsOfWar = [];
// setPlayer = (name) => {
//     player1 = name
//     console.log("Welcome " + player1 + ". Type deal() to get started!")

// }
// console.log("Welcome to War, set your name by typing setPlayer(YOUR NAME in quotes)")
let player1 = prompt("What is your name?");

makeDeck = () => {
  let fullDeck = cardSuits.map(suit =>
    cardNumbers.map((num, i) => ({
      card: `${num} ${suit}`,
      value: i
    }))
  );
  return fullDeck[0].concat(fullDeck[1], fullDeck[2], fullDeck[3]);
};
cardDeck = makeDeck();

shuffleDeck = array => {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

deal = () => {
  const readyDeck = shuffleDeck(cardDeck);
  userDeck = readyDeck.slice(0, 26).map(i => i);
  computerDeck = readyDeck.slice(26, readyDeck.length).map(j => j);
  console.log("Ok! The cards are dealt. Let us begin!");
};

playCard = () => {
  let userCard = userDeck[0];
  let computerCard = computerDeck[0];
  if (userDeck.length === 0) {
    computerDeck.push(...spoilsOfWar);
    console.log(
      `${player1} has ${userDeck.length} cards. Computer has ${computerDeck.length} cards`
    );
    console.log("Game Over!");
  } else if (computerDeck.length === 0) {
    userDeck.push(...spoilsOfWar);
    console.log(
      `${player1} has ${userDeck.length} cards. Computer has ${computerDeck.length} cards`
    );
    console.log("Game Over!");
  } else if (userCard.value > computerCard.value) {
    console.log(
      `${player1} played ${userCard.card}, Computer played ${computerCard.card}.`
    );
    console.log(`${player1} won the hand.`);
    userDeck.push(computerCard);
    userDeck.push(userDeck.shift());
    computerDeck.shift();
    userDeck.push(...spoilsOfWar);
    spoilsOfWar = [];
    console.log(
      `${player1} has ${userDeck.length} cards. Computer has ${computerDeck.length} cards`
    );
  } else if (userCard.value < computerCard.value) {
    console.log(
      `${player1} played ${userCard.card}, Computer played ${computerCard.card}.`
    );
    console.log("The computer won the hand.");
    computerDeck.push(userCard);
    computerDeck.push(computerDeck.shift());
    userDeck.shift();
    computerDeck.push(...spoilsOfWar);
    spoilsOfWar = [];
    console.log(
      `${player1} has ${userDeck.length} cards. Computer has ${computerDeck.length} cards`
    );
  } else if (userCard.value === computerCard.value) {
    console.log(
      `${player1} played ${userCard.card}, Computer played ${computerCard.card}.`
    );
    console.log("We have a tie! I.....DE....CLARE.....WAR!");
    spoilsOfWar.push(userCard);
    spoilsOfWar.push(computerCard);
    userDeck.shift();
    computerDeck.shift();
    spoilsOfWar.push(...userDeck.slice(0, 3));
    spoilsOfWar.push(...computerDeck.slice(0, 3));
    userDeck.shift();
    userDeck.shift();
    userDeck.shift();
    computerDeck.shift();
    computerDeck.shift();
    computerDeck.shift();
    //    console.log(userDeck)
    //    console.log(computerDeck)
    //    console.log(spoilsOfWar)
    playCard();
  }
};
makeDeck();
shuffleDeck(cardDeck);
deal();
while (userDeck.length > 0 && computerDeck.length > 0) {
  playCard();
}
