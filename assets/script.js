// Sound Variables
const p1AttackSound = document.getElementById("p1attack");
const p1HealSound = document.getElementById("p1heal");
const p2AttackSound = document.getElementById("p2attack");
const p2HealSound = document.getElementById("p2heal");
const victorySound = document.getElementById("victory");

// This is a class called 'Player'
class Player {
  constructor(health = 100, attackDmg) {
    this.health = health;
    this.attackDmg = attackDmg;
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
