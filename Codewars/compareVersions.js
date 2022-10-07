// 6 kyu
// Compare Versions
// Karan's company makes software that provides different features based on the version of operating system of the user.
// For finding which version is more recent, Karan uses the following method:

// function compareVersions (version1, version2) {
//   return parseFloat(version1) >= parseFloat(version2);
// }

// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.
// Karan's function fails for the new version:

// compareVersions ("10.9", "10.10");       // returns true, while it should return false
// Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

// Help Karan write this function. Here are a few sample cases:

// compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false

// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.

// ----------------------
// Parameters: Given two strings, version1 and version2, each representing the version number of an operating system.
// If version1 is newer than or the same version as version2, return true.
// Else, return true.
// Examples:
// compareVersions("11", "10")        -->  true
// compareVersions("11", "11")        -->  true
// compareVersions("10.4.6", "10.4")  -->  true
// compareVersions("25.141.139.72", "25.141.139.72")        -->  true
// compareVersions("10.4", "11")      -->  false
// compareVersions("10.4", "10.4.8")  -->  false
// compareVersions("10.4", "10.10")   -->  false
// compareVersions("10.4.9", "10.5")  -->  false
// compareVersions("134.80.75.141", "134.80.77.111.39.78")  -->  false
// compareVersions("190.140.88.154.61", "190.140.88.88.149")-->  false
// Pseudocode:
// Split strings on dots "." and assign to new variables (v1 and v2).
// Create a result variable set at 0.
// Iterate through the arrays comparing v1's and v2's values at index i.
// If value at v1 is greater, v1 is newer. Add one to result. Break and return.
// If value at v1 is lesser, v2 is older. Subtract one from result. Break and return.
// If result is positive, then return true.
// If result is negative, then return false.
// If result is 0, this means that the two versions are nearly identical except for the ending subversion.
// If v1 has more subversions listed than v2, then return true (v1 is longer). Else return false.
// Return corresponding boolean value.

function compareVersions(version1, version2) {
  let i = 0,
    result = 0, // 1 means true. -1 means false. 0 means true as long as version 2 does not have additional sub-version updates.
    vs1 = version1.split`.`,
    vs2 = version2.split`.`,
    shorter = vs1.length < vs2.length ? vs1.length : vs2.length
  while (result < 1 && i < shorter) {
    if (parseFloat(vs1[i]) < parseFloat(vs2[i])) {
      result--
      break
    }
    if (parseFloat(vs1[i]) > parseFloat(vs2[i])) {
      result++
      break
    }
    i++
  }
  return result >= 0 && !(result === 0 && vs2 > vs1)
}
