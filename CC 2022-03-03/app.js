// 8 kyu
// Pillars
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// ----------------------
// parameters: num of pillars, distance between pillars (uniform distance), and width of a pillar (uniform width)
// return the distance between the first and the last pillar in centimeters (w/o the width of the first and last pillar)
// Examples:
// (1, 10, 10) --> 0
// (2, 20, 25) --> 2000
// (11, 15, 30) --> 15270
// pseudocode: if less than 2 pillars just return 0. if two pillars, return dist * 100 (to convert m to cm)
// if more than two pillars, we must now take into account the widths of the pillars in the middle (or num of pillars - 2)
// to calculate the distance between each pair of pillars, subtract one from total pillar count, and then multiply the difference by distance between just two pillars
// keep in mind that both meters and centimeters are used in calculation

function pillars(num_pill, dist, width) {
    return (
        num_pill < 2 ? 0 :
        num_pill === 2 ? dist * 100:
        num_pill > 2 ? (width * (num_pill-2)) + (dist * 100 * (num_pill-1)) : 0
    )
}