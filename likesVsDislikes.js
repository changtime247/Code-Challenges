// 7 kyu
// Likes Vs Dislikes
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// Task
// Create a function that takes in a list of button inputs and returns the final state.
// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

// ----------------------
// Parameter: Given an array (length >= 0) containing either 'Like' or 'Dislike'. 
// Return whether the ultimate status is either 'Like', 'Dislike', or 'Nothing'.
// Examples:
// likeOrDislike([])                       -->  Nothing 
// likeOrDislike([Dislike])                -->  Dislike 
// likeOrDislike([Like,Like])              -->  Nothing 
// likeOrDislike([Dislike,Like])           -->  Like 
// likeOrDislike([Like,Dislike,Dislike])   -->  Nothing 
// likeOrDislike([Dislike,Dislike])        -->  Nothing 
// likeOrDislike([Like,Like,Like])         -->  Like 
// likeOrDislike([Like,Dislike])           -->  Dislike 
// likeOrDislike([Dislike,Like,Dislike])   -->  Dislike 
// likeOrDislike([Like,Like,Dislike,Like,Like,Like,Like,Dislike])  -->  Dislike 
// Pseudocode: Use reduce on array to return a single value, a string.
// In method setup, set the initial value to 'Nothing'.
// There are only two conditions: 
// (1) If the status is the same as the button, then set status to 'Nothing'.
// (2) If not same, then set status to the current value.
// Return entire expression.

function likeOrDislike(buttons) {
  return buttons.reduce((a, k) => {
    return a === k ? (a = 'Nothing') : a !== k ? (a = k) : a
  }, 'Nothing')
}