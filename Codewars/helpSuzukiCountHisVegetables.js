// 7 kyu
// Help Suzuki count his vegetables....
// Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.
// This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.
// You will be given a string with the following vegetables:
// "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
// Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).
// (119, "pepper"),
// (114, "carrot"),
// (113, "turnip"),
// (102, "onion"),
// (101, "tofu"),
// (100, "cabbage"),
// (93, "mushroom"),
// (90, "cucumber"),
// (88, "potato"),
// (80, "celery")

// Given a string of words delimited by a space.
// Return an array of subarrays, each containing the count of a specific vegetable and the name of the vegetable.
// Ex:
// countVegetables("potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage")
//     --> lst1 = [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']]
// countVegetables("mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
//     "mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber " +
//     "onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper " +
//     "onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot " +
//     "potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip " +
//     "mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip")
//     --> let lst2 = [[15, 'turnip'], [15, 'mushroom'], [13, 'cabbage'], [10, 'carrot'], [9, 'potato'], [7, 'onion'], [6, 'tofu'], [6, 'pepper'], [5, 'cucumber'], [4, 'celery']];
// Iterate through each word recording the vegetable name and tallying the count.
// Sort by count. If count is equal, sort by name (reverse alphabetical).
// Return as an array of subarrays.

function countVegetables(string) {
  let arr = Object.entries(
    string.split` `.reduce((a, c) => (a[c] = (a[c] || 0) + 1) && a, {})
  )
  arr.sort((a, b) => {
    if (a[1] === b[1]) return b[0].localeCompare(a[0])
    else return b[1] - a[1]
  })
  arr = arr.reduce((a, c) => {
    const [key, val] = c
    if (
      [
        'cabbage',
        'carrot',
        'celery',
        'cucumber',
        'mushroom',
        'onion',
        'pepper',
        'potato',
        'tofu',
        'turnip',
      ].includes(key)
    ) {
      a.push([val, key])
    }
    return a
  }, [])
  return arr
}
