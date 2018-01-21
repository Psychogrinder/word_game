var wordList = ['apple', 'apricot', 'pear'];
var imageContainer = document.getElementById('image-container');
var wordsContainer = document.getElementById('words-container');
var gameObjects = [];
var currentObject;

function generateSpan(word, container) {
  var newCard = document.createElement('span');
  newCard.className = 'word-card';
  var text = document.createTextNode(word);
  newCard.appendChild(text);
  container.appendChild(newCard);
}

function generateImage(image, container) {
  var newImage = document.createElement('img');
  newImage.src = image;
  container.appendChild(newImage);
}

function getRandomElement(arr) {
  var randomItem = arr[Math.floor(Math.random()*arr.length)];
  return randomItem;
}

function startGame() {
  for (var i = 0; i < wordList.length; i++) {
    gameObjects.push({
      text: wordList[i],
      image: './img/' + wordList[i] + '.jpg'
    });
  }
  currentObject = getRandomElement(gameObjects);
  generateImage(currentObject.image, imageContainer);
  for (var j = 0; j < wordList.length; j++) {
    generateSpan(wordList[j], wordsContainer);
  }
}

function checkAnswer(event) {
  if (event.target.className == 'word-card') {
    var correctAnswer = currentObject.text;
    var userAnswer = event.target.innerHTML;
    if (userAnswer == correctAnswer) {
      alert("correct!");
    } else {
      alert("you lose!")
    }
  }
}

startGame();
