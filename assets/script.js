// Sound Variables
const p1AttackSound = document.getElementById("p1attack");
const p1HealSound = document.getElementById("p1heal");
const p2AttackSound = document.getElementById("p2attack");
const p2HealSound = document.getElementById("p2heal");
const victorySound = document.getElementById("victory");
// DOM elements
const p1HealthDisplay = document.getElementById("p1Health");
const p2HealthDisplay = document.getElementById("p2Health");

// This is a class called 'Player'
class Player {
  constructor(attackDmg = 100, health = 100) {
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

const player1 = new Player();
const player2 = new Player();
