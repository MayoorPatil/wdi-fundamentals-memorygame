var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var score = 0;

var checkForMatch = function (cardElement) {
  if (cardsInPlay.length === 2) {
    if ( cardsInPlay[0] === cardsInPlay[1]) {
      alert("You have found a match!");
      score = score + 1;
      document.getElementById('score').innerHTML = "<b>Score: " + score + "</b>";
    } else {
      alert("Sorry, try again.");
    }
  }
};

var flipCard = function () {
  var cardId = this.getAttribute("data-id");
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[this.getAttribute("data-id")].cardImage);
  checkForMatch(this);
};

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}
};

var resetBoard = function() {
  var cards = document.getElementsByTagName("img");
  for (var i = 0; i < cards.length; i++) {
    cards[i].setAttribute("src", "images/back.png");
  }
  cardsInPlay = [];
};
document.getElementsByTagName("button")[0].addEventListener("click", resetBoard);

createBoard();
