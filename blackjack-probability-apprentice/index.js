/* eslint-disable no-lonely-if */
const { playBlackJack, playBlackJackStar } = require('./playBlackJack');
const { shuflleCard } = require('./dealCard');
const { displayResult } = require('./printResult')


function playGames(times) {
  const arr = [];
  const arr1 = [];
  for (let k = 0; k < times; k += 1) {
    const deckOfCard = shuflleCard();
    arr.push(playMultipleGames(deckOfCard));
    arr1.push(playMultipleStarGames(deckOfCard));
  }
  displayResult(arr, '4card')
  console.log('------////-------------------------------------//=------')
  displayResult(arr1, '3card')

}

function playMultipleGames(deckOfCard) {
  let value = playBlackJack(1, deckOfCard);
  for (let i = 0; i < value.length; i += 1) {
    return value[i]
  }
}

function playMultipleStarGames(deckOfCard) {
  let value = playBlackJackStar(1, deckOfCard);
  for (let i = 0; i < value.length; i += 1) {
    return value[i];
  }
}


playGames(100);