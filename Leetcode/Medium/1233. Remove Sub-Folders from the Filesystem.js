/*
1233. Remove Sub-Folders from the Filesystem
Medium

Given a list of folders folder, return the folders after removing all sub-folders in those folders. You may return the answer in any order.

If a folder[i] is located within another folder[j], it is called a sub-folder of it. A sub-folder of folder[j] must start with folder[j], followed by a "/". For example, "/a/b" is a sub-folder of "/a", but "/b" is not a sub-folder of "/a/b/c".

The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters.

For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string and "/" are not.

Example 1:
Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
Output: ["/a","/c/d","/c/f"]
Explanation: Folders "/a/b" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.

Example 2:
Input: folder = ["/a","/a/b/c","/a/b/d"]
Output: ["/a"]
Explanation: Folders "/a/b/c" and "/a/b/d" will be removed because they are subfolders of "/a".

Example 3:
Input: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
Output: ["/a/b/c","/a/b/ca","/a/b/d"]

Constraints:
1 <= folder.length <= 4 * 104
2 <= folder[i].length <= 100
folder[i] contains only lowercase letters and '/'.
folder[i] always starts with the character '/'.
Each folder name is unique.
*/

/*
Given an array of strings representing folder paths.
Return array of strings representing folder paths with all subfolders removed.
Ex:
removeSubfolders([ "/a", "/ab/a"]),[ "/a", "/ab/a"]
removeSubfolders(["/a/b/c","/abc/d"]),["/a/b/c","/abc/d"]
removeSubfolders(["/aa/ab/ac/ae","/aa/ab/af/ag","/ap/aq/ar/as","/ap/aq/ar","/ap/ax/ay/az","/ap","/ap/aq/ar/at","/aa/ab/af/ah","/aa/ai/aj/ak","/aa/ai/am/ao"]),["/aa/ab/ac/ae","/aa/ab/af/ag","/aa/ab/af/ah","/aa/ai/aj/ak","/aa/ai/am/ao","/ap"]
Create an empty array to hold all top-level folders (so that no subfolders are contained).
Sort array lexographically to ensure any subfolder will follow its parent folder.
Iterate through sorted array.
    Check whether the current folder is a subfolder of the last added folder newly created array.
        If not, we add the current folder to result.
*/

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort()

  let result = []

  for (let i = 0; i < folder.length; i++) {
    if (
      result.length === 0 ||
      !folder[i].startsWith(result[result.length - 1] + '/')
    ) {
      result.push(folder[i])
    }
  }

  return result
}
