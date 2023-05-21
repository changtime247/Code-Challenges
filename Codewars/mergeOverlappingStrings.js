// 7 kyu
// Merge overlapping strings
// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.
// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.
// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

// Given two strings.
// Return a new string such that if there is any overlap between the end of first string and beginning of second string, the two strings are combined (with overlap being included only once).
// If no overlap, return string concatenated from first and second strings.
// Ex:
// mergeStrings('xabc','ab'), 'xabcab'
// mergeStrings('abc','ab'), 'abcab'
// mergeStrings('efgh','abcd'), 'efghabcd'
// mergeStrings('https://api.example.com','/DEV/this_is_a_file.20210616.abcde?someparameter=10&something=5'),'https://api.example.comeparameter=10&something=5' to equal 'https://api.example.com/DEV/this_is_a_file.20210616.abcde?someparameter=10&something=5'
// mergeStrings('abcd','dabcd'),'abcdabcd'
// Iterate through first string to successively check if substring from i to end is in second string.
//      If yes, return string composed from non-overlapping portion of first (if any) + overlapping portion + non-overlapping portion of second (if any).
// Otherwise, return string composed from first and second strings in their entirety.

function mergeStrings(first, second) {
  let i = 0

  while (i < first.length) {
    let merge = first.slice(i)
    let idxSecond = second.indexOf(merge)
    if (second.includes(merge) && idxSecond == 0)
      return `${first.slice(0, i)}${merge}${second.slice(
        idxSecond + merge.length
      )}`
    else i++
  }

  return `${first}${second}`
}
