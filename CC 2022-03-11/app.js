// 8 kyu
// Aspect Ratio Cropping - Part 1
// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.
// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.
// This kata is part of a series with Aspect Ratio Cropping - Part 2 .

// Example
// 374 × 280 pixel image with a 4:3 aspect ratio.
// 500 × 280 pixel image with a 16:9 aspect ratio.

// ----------------------
// parameters: given x and y res sizes. 
// return: whether or not the vehicle will make it to the next gas station
// examples:
// (640, 480)   --> [854,480]
// (960, 720)   --> [1280,720]
// (1440, 1080) --> [1920,1080]
// (1920, 1440) --> [2560,1440]
// pseudocode: 16/9 is the ratio of x to y (or x/y). regardless of the given x value, given a y value, the corresponding x value must match y, y being the limiting factor. and round up. return array of that x,y values

function aspectRatio(x,y){
    return [Math.ceil(y * 16/9), y]
}