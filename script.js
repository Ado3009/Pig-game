'use strict';
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let btnRoll = document.querySelector('.btn--roll');
let diceEl = document.querySelector('.dice');
let currentScore0 = document.querySelector('#current--0');
let cureentScore1 = document.querySelector('#current--1');
let scores, currentScore, activePlayer, playning;

const changePlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  cureentScore1.textContent = 0;
  diceEl.classList.add('hide');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  playning = true;
};
init();

btnRoll.addEventListener('click', e => {
  if (playning) {
    e.preventDefault();
    let dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hide');
    diceEl.src = `images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});
btnHold.addEventListener('click', e => {
  e.preventDefault();
  if (playning) {
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playning = false;
      diceEl.classList.add('hide');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener('click', init);

//! Neki od pokusaja i nacina koji ce dobro doci.

//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   playning = true;
//
//
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   document.getElementById(`score--${activePlayer}`).textContent = 0;
// for (let i = 0; i < score.length; i++) {
//   score[i].textContent = 0;
// }

// let diceSlike = [
//   'images/dice-1.png',
//   'images/dice-2.png',
//   'images/dice-3.png',
//   'images/dice-4.png',
//   'images/dice-5.png',
//   'images/dice-6.png',
// ];
// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let score = 0;
// let playning = true;
//   if (activePlayer === 0) {
//     activePlayer = 1;
//   } else {
//     activePlayer = 0;
//   }
//   if (dice !== 1) {
//     score.textContent = currentScore;
//   }

// jedan od nacina izbacivanja random slika je
/*
let dice = document.querySelector('.dice')
dice = Math.trunc(Math.random() * 6) + 1; 
diceEl = `dice-${dice}.png`
*/
// let randomSlike = Math.trunc(Math.random() * 6) + 1;
// document.querySelector('.dice').src = `dice-${diceEl}.png`;
// ! VAZNOO !!!
/*
za upravljanje slikama ili obicno src elementima moramo da 
selektujemo sam src .scr = i dalje 
*/
