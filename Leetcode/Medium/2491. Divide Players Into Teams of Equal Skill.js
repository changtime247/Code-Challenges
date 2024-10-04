/*
2491. Divide Players Into Teams of Equal Skill
Medium

You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

The chemistry of a team is equal to the product of the skills of the players on that team.

Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.

Example 1:
Input: skill = [3,2,5,1,3,4]
Output: 22
Explanation: 
Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.

Example 2:
Input: skill = [3,4]
Output: 12
Explanation: 
The two players form a team with a total skill of 7.
The chemistry of the team is 3 * 4 = 12.

Example 3:
Input: skill = [1,1,2,3]
Output: -1
Explanation: 
There is no way to divide the players into teams such that the total skill of each team is equal.

Constraints:
2 <= skill.length <= 105
skill.length is even.
1 <= skill[i] <= 1000
*/

/*
Given an array of even length with positive numbers.
Return the sum of the products of the numbers paired, such that every pair share the same sum.
If the sum of every pair is not equal, return -1
Example:
dividePlayers([1,1,1,2,3,3,3,7,7,8,8,8,9,9]), -1
dividePlayers([18,14,3,19,9,6,18,3,4,19]), -1
dividePlayers([1,2,3,2,4,6]), -1
dividePlayers([40,24,16,14]), -1
dividePlayers([2,3,4,2,5,5]), 32
dividePlayers([3,5]), 15
Steps:
1. Sort skill levels in ascending order
2. Pair the smallest and largest players and calculate chemistry
3. Return -1 if it's not possible to divide into valid pairs
*/

/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  let sortedSkill = skill.slice().sort((a, b) => a - b)
  let chemistrySum = 0
  const teamCount = skill.length / 2
  const teamSkill = sortedSkill[0] + sortedSkill[skill.length - 1]
  for (i = 0; i < teamCount; i++) {
    let a = sortedSkill[i]
    let b = sortedSkill[skill.length - 1 - i]
    if (a + b != teamSkill) return -1
    chemistrySum += a * b
  }
  return chemistrySum
}
