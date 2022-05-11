// Beta
// Album lengths

// Your task is to calculate the runtime of an album given an array of the lengths of its tracks. The format used for the track lengths and the albun runtime is HH:MM:SS. The input lengths will always match this format and your output is expected to do the same. For example, a track of 3 minutes and 16 seconds will be represented as 00:03:16.

// You may assume that the album runtime will never exceed 99:59:59. If the album has no tracks, its runtime is 0 seconds.

// albumLength(["00:07:00", "00:07:23", "00:08:30"]) //should return 00:22:53
// albumLength(["00:02:16", "00:10:34", "00:23:12", "00:00:53", "00:06:35"]) //should return 00:43:30

// ----------------------
// parameters: given an array representing an album. each element represents a track's duration formatted as hours:minutes:seconds (eg 'hh:mm:ss')
// return total duration of album (sum of all track durations).
// needs to be formatted exactly two digits for each unit of time (hours, mins, secs)
// examples
// albumLength([])                                                             -->   "00:00:00"
// albumLength(["01:01:23"])                                                   -->   "01:01:23"
// albumLength(["00:59:59","00:00:01"])                                        -->   "01:00:00"
// albumLength(["00:02:16", "00:10:34", "00:23:12", "00:00:53", "00:06:35"])   -->   "00:43:30"
// albumLength(["00:05:16", "00:03:23", "01:34:30", "00:21:59","00:22:22"])    -->   "02:27:30"
// pseudocode: reduce the array to get total length of entire album in seconds
// reformat total seconds to total hours, minutes and seconds
// create a helper function to format hours, minutes and seconds to desired format of two digits
// (explicitly told that album length will not exceed 99:59:59)
// helper function will check if argument passed is greater than 0 and less than 10, because those are the numbers that need to be reformatted to display two digits
// 9 for example needs to be reformatted to 09
// use template literal and toString to reformat
// return the reformatted units of time as hh:mm:ss

function albumLength(trackLengths) {
    let reduced = trackLengths.slice().reduce((a,v,i)=>{
        return a+=(+v.split`:`[0]*3600) + (+v.split`:`[1]*60) + (+v.split`:`[2])
    },0)
    let h=Math.floor(reduced/3600),
        m=Math.floor((reduced%3600)/60),
        s=Math.floor((reduced%3600)%60);
    function format(y){
        return y<10 && y>0 ? `0${y.toString()}` : y===0 ? `00` : y
    }
    return `${format(h)}:${format(m)}:${format(s)}`;
}