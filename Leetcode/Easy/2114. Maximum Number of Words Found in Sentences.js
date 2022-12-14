/*
2114. Maximum Number of Words Found in Sentences
Easy
1.1K
31
Companies
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

 

Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
Example 2:

Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
 

Constraints:

1 <= sentences.length <= 100
1 <= sentences[i].length <= 100
sentences[i] consists only of lowercase English letters and ' ' only.
sentences[i] does not have leading or trailing spaces.
All the words in sentences[i] are separated by a single space.
*/

/*
Given an array of sentences of varying lengths. Each sentence contains words delimited by a single space.
Return the length of the longest sentence of the array, where length is the number of words in the sentence.
Create a variable to hold length of longest string, set to 0.
Iterate through array. At each iteration, 
    if length of sentence is greater than the value of newly created variable,
        then set variable to be that greater length. 
Return the newly created variable.
*/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(s=>s.split` `.length))
};