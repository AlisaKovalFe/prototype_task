// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Create a function that takes in a list of button inputs and returns the final state.
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.
// Like, Dislike, Nothing come from Preloaded !!!!!!!!!!!

const likeOrDislike = (buttons) => {

    let state = 'Nothing'

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === state) {
            state = 'Nothing'
        } else {
            state = buttons[i]
        }
    }
    return state

    //метод
    // return buttons.reduce((state, button) => button === state ? 'Nothing' : button, 'Nothing')
}

console.log(likeOrDislike(['Dislike']));  //Dislike
console.log(likeOrDislike(['Like', 'Like'])); // Nothing
console.log(likeOrDislike(['Dislike', 'Like']));  // Like
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])); // Nothing