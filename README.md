# Game-of-War Project Requirements
To play, each player reveals the top card in their stack. The player who played the card with the higher rank (Aces high) takes both cards and puts them at the bottom of their stack in an arbitrary order.

If there is a tie, then it's War! In the card game each player adds places the top three cards of their stack face down, and then each player reveals the top card again. Whoever wins out of the second reveal takes all of the cards, and if there is another tie the process repeats until there is a winner.

## Prerequisites

  * GitHub account
  * Knowledge of JavaScript for use in console
  * Understanding of for loops, while loops, and object-building in JavaScript

## My Process
1. Rubberducked the steps for the game, including:
   * Making a deck with card numbers, suits, and values
   * Implementing a shuffle function
   * Splitting the shuffled deck into two even player decks
   * Logic for comparing the card values
   * Pushing the winning cards into the correct deck
   * Building the spoilsOfWar (tie in card value) logic
   * Having the game run on a while loop
   * Ending the game correctly
2. Wrote the first few functions (createDeck, shuffleDeck, deal)
3. Built all of the if/else statements to compare card values
4. Built the spoilsOfWar (tie) function
5. Used console.logs to debug the game
6. Built the while loop to have the game run without any input
7. Added console logs using interpolation to display the cards played and who won each round.

## Deployed with:
I used GitHub to host my static site, which can be found [**HERE**](https://zfriendly.github.io/Game-of-War.io/).

## Attributions
Used [THIS](https://www.frankmitchell.org/2015/01/fisher-yates/) code to help understand and build the shuffle cards function (H/T [Frank Mitchell](https://www.frankmitchell.org))

## Contributing/Future Additions

Feel free to find me on [GitHub](https://github.com/zfriendly) if you're interested in contributing! I want to re-write the game using object-oriented programming.

## Screenshots


Gameplay function in action:
![Gameplay](https://i.imgur.com/6ExzeWK.png)

Name Input box (bonus feature):
![Name Input](https://i.imgur.com/ibuaRQA.png)

## Author
* [Zack Friendly](https://github.com/zfriendly)