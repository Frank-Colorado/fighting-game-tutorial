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
  constructor(name, baseDmg = 10, health = 100) {
    this.name = name;
    this.baseDmg = baseDmg;
    this.health = health;
  }

  // This is a method that will cause the player to heal a random amount between 1-5
  heal() {
    // gets random number between 1-5
    const healAmount = Math.ceil(Math.random() * 5);
    // heals self for x amount
    this.health += healAmount;
  }
  // This is a method that will cause the player to hit the target for the baseDmg plus a random amount between 1-10
  strike(target) {
    // gets a random number between 1-10
    const bonusDmg = Math.ceil(Math.random() * 10);
    const totalDmg = this.baseDmg + bonusDmg;
    // user strikes target for x amount
    target.health -= totalDmg;
  }
}

// Player Variables
const player1 = new Player("Ying");
const player2 = new Player("Yang");

// Player Input

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "q":
      player1.strike(player2);
      p2HealthDisplay.innerText = player2.health;
      break;
    case "a":
      player1.heal();
      p1HealthDisplay.innerText = player1.health;
      break;
    case "p":
      player2.strike(player1);
      p1HealthDisplay.innerText = player1.health;
      break;
    case "l":
      player2.heal();
      p2HealthDisplay.innerText = player2.health;
      break;
    default:
      console.log("NOT A KEY");
  }
});
