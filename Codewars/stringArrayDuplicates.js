// 6 kyu
// String array duplicates
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.

// Given an array of words.
// Return array of words, where each word has all consecutively repeating letters removed
// Ex:
// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']
// dup(["kelless","keenness"]), ['keles','kenes']
// dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']
// dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']
// dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']
// dup(["putteellinen","keenness"]), ['putelinen','kenes']
// dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']
// Iterate through each letter of word.
// Concat a new word from letters such that only consecutively repeating letters are removed.

function dup(arr) {
  return arr.map((w) => {
    let newW = ''
    for (let i = 0; i < w.length; i++) {
      w[i] !== newW.slice(-1) ? (newW += w[i]) : newW
    }
    return newW
  })
}
