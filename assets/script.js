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

//
// This is a class called 'Player'
class Player {
  constructor(name, attackDmg = 25, health = 100) {
    this.name = name;
    this.attackDmg = attackDmg;
    this.health = health;
  }

  // This is a method that will cause the player to heal
  heal(target) {
    // heals target for x amount
  }
  // This is a method that will cause the player to hit the target
  strike(target, user, dmgAmount) {
    // user strikes target for x amount
  }
}

// Player Variables
const player1 = new Player();
const player2 = new Player();

// Player Input

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "q":
      console.log(player1.attackDmg);
      break;
    case "a":
      console.log(player1.health);
      break;
    case "p":
      console.log(player2.attackDmg);
      break;
    case "l":
      console.log(player2.health);
      break;
    default:
      console.log("NOT A KEY");
  }
});
