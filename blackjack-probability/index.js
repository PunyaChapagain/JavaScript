const { allDealCard, shuflleCard } = require('./dealCard');
const basicStrategy = require('./basicStrategy');

function playBlackJack(numberOfPlayer, deck) {
  const card = shuflleCard(deck);
  console.log(card.slice(8, 15));
  const dealCard = allDealCard(numberOfPlayer, card);
  console.log(dealCard);
  const dealerCard = dealCard[dealCard.length - 1];
  let dealerCardValue = dealerCard[0] + dealerCard[1];
  let playerCardValueArray = [];
  for (let i = 0; i < numberOfPlayer; i += 1) {
    // prettier-ignore
    let playerAfterStrategy = basicStrategy(dealCard[i], dealerCard, card);
    if (!Array.isArray(playerAfterStrategy)) {
      while (
        playerAfterStrategy <= 11 ||
        (playerAfterStrategy <= 16 && dealerCard[0] >= 7)
      ) {
        let pullCard = card.shift();
        console.log(`i have pull a card ${pullCard}`);
        if (pullCard === 11) {
          if (pullCard + playerAfterStrategy > 21) {
            playerAfterStrategy += 1;
            console.log(`i am from inside ${playerAfterStrategy}`);
          } else {
            playerAfterStrategy += pullCard;
          }
        } else {
          playerAfterStrategy += pullCard;
        }
      }
      playerCardValueArray.push(playerAfterStrategy);
    } else {
      for (let i = 0; i < 2; i += 1) {
        while (
          playerAfterStrategy[i] <= 11 ||
          (playerAfterStrategy[i] <= 16 && dealerCard[0] >= 7)
        ) {
          playerAfterStrategy[i] = playerAfterStrategy[i] + card.shift();
        }
        playerCardValueArray.push(playerAfterStrategy[i]);
      }
    }
  }

  while (dealerCardValue <= 16) {
    dealerCardValue += card.shift();
  }

  printResult(playerCardValueArray, dealerCardValue);
}

function printResult(playerCardValueArray, dealerCardValue) {
  for (let i = 0; i < playerCardValueArray.length; i += 1) {
    if (playerCardValueArray[i] > 21) {
      console.log(
        `Dealer win player${i + 1} busted with ${playerCardValueArray[i]}`,
      );
    } else if (
      playerCardValueArray[i] <= 21 &&
      playerCardValueArray[i] === dealerCardValue
    ) {
      console.log(
        `player${i + 1} tie with value ${
          playerCardValueArray[i]
        }  ${dealerCardValue}`,
      );
    } else if (playerCardValueArray[i] <= 21 && dealerCardValue > 21) {
      console.log(
        `player${i + 1} win ${playerCardValueArray[i]}  ${dealerCardValue}`,
      );
    } else if (
      playerCardValueArray[i] <= 21 &&
      playerCardValueArray[i] > dealerCardValue
    ) {
      console.log(
        `player${i + 1} win ${playerCardValueArray[i]}  ${dealerCardValue}`,
      );
    } else {
      console.log(`dealer win ${playerCardValueArray[i]} ${dealerCardValue}`);
    }
  }
}

playBlackJack(3, 6);
