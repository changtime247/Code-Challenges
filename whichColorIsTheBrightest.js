// 7 kyu
// Which color is the brightest?
// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.
// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:
// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!
// For example,
// brightest(['#001000', '#000000']) == '#001000'
// brightest(['#ABCDEF', '#123456']) == '#ABCDEF'
// If there are multiple brightest colors, return the first one:
// brightest(['#00FF00', '#FFFF00', '#01130F']) == '#00FF00'
// Note that both input and output should use upper case for characters A, B, C, D, E, F.

// ----------------------
// Parameter: Given an array of hexidecimal RGB values (e.g. #RRGGBB)
// Return the largest component of a color in the array ('00' < 'FF')
// Examples:
// brightest(['#001000', '#000000']             -->  '#001000'
// brightest(['#ABCDEF', '#123456']             -->  '#ABCDEF'
// brightest(['#00FF00', '#FFFF00']             -->  '#00FF00'
// brightest(['#FFFFFF', '#1234FF']             -->  '#FFFFFF'
// brightest(['#FFFFFF', '#123456', '#000000']) -->  '#FFFFFF'
// brightest(['#5F6A84', '#B0553F', '#196900', '#886CF6', '#614317', '#FFB656', '#26CB02']) --> '#FFB656'
// Pseudocode: Iterate through each hexidecimal value and instead of a string hexidecimal value, return a subarray of 3 pairs of numbers (e.g. [RR, GG, BB])
// Now we have an array of subarrays.
// Iterate through every subarray and filter out the highest value.
// Now create another array of subarrays, where each subarray has two elements: index 0 holds the hexidecimal RGB value and index 1 holds the highest color value.
// Sort that newly created array based on index 1 in deseceding order.
// Of that sorted array, return the first element's first element.

function brightest(colors) {
  let newColors = colors
    .map((c, i) => {
      const subarr = [c.slice(1, 3), c.slice(3, 5), c.slice(5)]
      const highestValueInColor = subarr
        .map((v) => parseInt(v, 16))
        .sort((a, b) => b - a)[0]
      c = [c, highestValueInColor]
      return c
    })
    .sort((a, b) => b[1] - a[1])
  return newColors[0][0]
}
