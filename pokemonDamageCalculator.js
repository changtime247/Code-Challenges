// 6 kyu
// Pokemon Damage Calculator
// It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):
// damage = 50 * (attack / defense) * effectiveness
// Where:
// attack = your attack power
// defense = the opponent's defense
// effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
// Effectiveness:
// Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.
// Super effective: 2x damage
// Neutral: 1x damage
// Not very effective: 0.5x damage
// To prevent this kata from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:
// fire > grass
// fire < water
// fire = electric
// water < grass
// water < electric
// grass = electric
// For this kata, any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if A is super effective against B, then B is not very effective against A).
// The function you must implement takes in:
// 1. your type
// 2. the opponent's type
// 3. your attack power
// 4. the opponent's defense

// ----------------------
// Parameters: 4 different parameters
// Given two types of elements (e.g. 'fire', 'grass', 'electric', or 'water') representing two different pokemon as strings.
// - note: certain types will be doubly effective, neutral, or half effective
// - list:
// -- fire > grass
// -- fire < water
// -- fire = electric
// -- water < grass
// -- water < electric
// -- grass = electric
// Also given attack status and defense status, both positive integers.
// Return the amonunt of damage dealt from one type to another type given specific attack and defense status.
// To calculate the damage, use formula: "damage = 50 * (attack / defense) * effectiveness" where effectiveness is determined by relationship of pokemon types.
// Examples:
// calculateDamage('fire', 'water', 100, 100)      -->   25
// calculateDamage('grass', 'water', 100, 100)     -->   100
// calculateDamage('electric', 'fire', 100, 100)   -->   50
// calculateDamage('grass', 'electric', 57, 19)    -->   150
// calculateDamage('grass', 'water', 40, 40)       -->   100
// calculateDamage('grass', 'fire', 35, 5)         -->   175
// calculateDamage('fire', 'electric', 10, 2)      -->   250
// Pseudocode:
// Set an object with types that are doubly effective against others (as key value pairs)
// The same object calculates half effectiveness because it would just be the value key pair (reversed)
// ex: fire is doubly effective against grass AND grass is half effective against fire.
// Plug in appropriate values in formula and return.

function calculateDamage(yourType, opponentType, attack, defense) {
  let sE = { fire: 'grass', water: 'fire', electric: 'water', grass: 'water' }
  let effectiveness =
    sE[yourType] === opponentType
      ? 2
      : sE[opponentType] === yourType || opponentType === yourType
      ? 0.5
      : 1
  return 50 * (attack / defense) * effectiveness
}
