var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[1];
var cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//logic to check if two cards are played
if (cardsInPlay.length === 2) {
  if ( cardsInPlay[0] === cardsInPlay[1]) {
    alert("You have found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
