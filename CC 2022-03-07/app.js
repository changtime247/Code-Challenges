// 8 kyu
// Volume of a Cuboid
// Calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

// ----------------------
// parameters: l w and h given. 
// return: product of l w and h.
// examples: 
// 1,2,2 --> 4
// 6.3,2,5 --> 63
// pseudocode: return product of three parameters

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}