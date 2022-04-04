// TODO: make arrays of questions and answers
var questions = [
    {
        question: "which of these types is super effective against steelix?",
        options: ["fire", "grass", "electric", "ghost"],
        answer: "fire"
    },
    {
        question: "which of these flying type pokemon cannot learn fly?",
        options: ["hawlucha", "golbat", "pidgey", "fearow"],
        answer: "golbat"
    },
    {
        question: "when did the fairy type get added?",
        options: ["gen 5", "gen 6", "gen 7", "gen 4"],
        answer: "gen 6"
    },
    {
        question: "what type is the first gym in the first game?",
        options: ["water", "rock", "ground", "poison"],
        answer: "rock"
    },
    {
        question: "which pokemon has the highest base stat total?",
        options: ["caterpie", "charmeleon", "lugia", "blaziken"],
        answer: "lugia"
    },
]

// Timer that counts down from 100
var timerEl = $("#countdown")
function countdown() {
    var timeLeft = 99;
    console.log("yipee")

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.text(timeLeft + ' seconds remaining');
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.text(timeLeft + ' second remaining');
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.text("");
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
        }
    }, 1000);
}

countdown();

// TODO: randomly picks a question and answer set to show on screen

// TODO: listen for clicks on answers
    // TODO: see if user picked the right answer
    // TODO: subtract time if answer was wrong

// TODO: show initials and score