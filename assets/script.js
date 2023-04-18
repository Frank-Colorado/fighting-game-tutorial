// Sound Variables
const p1AttackSound = document.getElementById("p1attack");
const p1HealSound = document.getElementById("p1heal");
const p2AttackSound = document.getElementById("p2attack");
const p2HealSound = document.getElementById("p2heal");
const victorySound = document.getElementById("victory");
// DOM elements
const p1NameDisplay = document.getElementById("p1Name");
const p1HealthDisplay = document.getElementById("p1Health");
const p2NameDisplay = document.getElementById("p2Name");
const p2HealthDisplay = document.getElementById("p2Health");
const resultDisplay = document.getElementById("result");
// Buttons
const playBtn = document.getElementById("play");

// This is a function that updates the DOM's Display
const updateGameDisplay = (winner, loser) => {
  if (loser.health <= 0) {
    game.gameOver = true;
    loser.health = 0;
    p1HealthDisplay.innerText = player1.health;
    p2HealthDisplay.innerText = player2.health;
    resultDisplay.innerText = `${loser.name} has run out of HP! ${winner.name} is the winner!`;
    victorySound.play();
  }
  p1HealthDisplay.innerText = player1.health;
  p2HealthDisplay.innerText = player2.health;
};

// Random choice function
const randomChoice = () => {
  choice = Math.floor(Math.random() * 2);
  return choice;
};

// This is a class called 'Game'
class Game {
  constructor() {
    this.gameOver = false;
  }

  // This is a method that will simulate a game between 2 players
  play() {
    game.reset();
    while (!game.gameOver) {
      const p1Choice = randomChoice();
      const p2Choice = randomChoice();
      if (p1Choice === 0) {
        p1AttackSound.play();
        player1.strike(player2);
      } else {
        p1HealSound.play();
        player1.heal(player2);
      }
      if (p2Choice === 0) {
        p2AttackSound.play();
        player2.strike(player1);
      } else {
        p2HealSound.play();
        player2.heal(player1);
      }
    }
  }

  // This is a method that will reset that game state back to its start
  reset() {
    game.gameOver = false;
    player1.health = 100;
    player2.health = 100;
    resultDisplay.innerText = "";
    updateGameDisplay(player1, player2);
  }
}

// This is a class called 'Player'
class Player {
  constructor(name, baseDmg = 10, health = 100) {
    this.name = name;
    this.baseDmg = baseDmg;
    this.health = health;
  }
  // This is a method that will cause the player to heal a random amount between 1-5
  heal(opponent) {
    // gets random number between 1-5
    const healAmount = Math.ceil(Math.random() * 5);
    // heals self for x amount
    this.health += healAmount;
    updateGameDisplay(this, opponent);
  }
  // This is a method that will cause the player to hit the target for the baseDmg plus a random amount between 1-10
  strike(target) {
    // gets a random number between 1-10
    const bonusDmg = Math.ceil(Math.random() * 10);
    const totalDmg = this.baseDmg + bonusDmg;
    // user strikes target for x amount
    target.health -= totalDmg;
    updateGameDisplay(this, target);
  }
}

// Game variable
const game = new Game();

// Player Variables
const player1 = new Player("player 1");
const player2 = new Player("player 2");

// Player Input

document.addEventListener("keydown", function (e) {
  if (!game.gameOver) {
    switch (e.key) {
      case "q":
        p1AttackSound.play();
        player1.strike(player2);
        break;
      case "a":
        p1HealSound.play();
        player1.heal(player2);
        break;
      case "p":
        p2AttackSound.play();
        player2.strike(player1);
        break;
      case "l":
        p2HealSound.play();
        player2.heal(player1);
        break;
      default:
        console.log("NOT A KEY");
    }
  }
});
