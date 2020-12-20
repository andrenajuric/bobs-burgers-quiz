// select important elements & declare as variables
// var introEl = document.querySelector("#intro");
var initTimer = document.getElementById("#time");
var startBtn = document.getElementById("#start-button");
var currentQuestion = document.getElementById("#current-question");
var choicesEl = document.getElementById("#choices");
var userResult = document.getElementById("#question-result");

// global variables
var correctAnswers = 0;
var wrongAnswers = 0;


var questions = [   // array of objects containing quiz questions

    {
        question: "What is the order of the Belcher children from oldest to youngest?",
        choices: ["Tina, Louise, Gene", "Gene, Louise, Tina", "Tina, Gene, Louise", "Louise, Gene, Tina"],
        correctIndex: 2
    }, {
        question: "What are the names of the two regular customers at Bob's Burgers?",
        choices: ["Teddy and Mort", "Jimmy Pesto and Trev", "Gretchen and Marshmallow", "Calvin and Gayle"],
        correctIndex: 0
    }, {
        question: "What was the name of Linda's high school band?",
        choices: ["Bad Hair Day", "Menstruation Nation", "Linda and the Lindette's", "The Ta-Ta's"],
        correctIndex: 3
    }, {
        question: "When is Bob and Linda's anniversary?",
        choices: ["May 4th", "September 3rd", "August 9th", "December 6th"],
        correctIndex: 1
    }, {
        question: "What is Gene Belcher's astrological sign?",
        choices: ["Sagittarius", "Taurus", "Cancer", "Libra"],
        correctIndex: 0
    }, {
        question: "What is Tina's favorite animal?",
        choices: ["Dogs", "Sloths", "Horses", "Chinchillas"],
        correctIndex: 2
    }, {
        question: "Which recurring character has a nickname of 'Slowhand'?",
        choices: ["Sergeant Bosco", "Regular Sized Rudy", "Jimmy Jr.", "Dr. Yap"],
        correctIndex: 3
    }, {
        question: "What part(s) of the show intro change every time?",
        choices: ["The banner", "The van", "The store to the right", "The van and the store to the right"],
        correctIndex: 3
    }, {
        question: "Who is Tina's on-again, off-again crush?",
        choices: ["Joshua", "Jimmy Jr.", "Zeke", "Darryl"],
        correctIndex: 1
    }, {
        question: "What did the Belcher kids and Regular Sized Rudy steal in the episode: The Kids Rob a Train?",
        choices: ["Chocolate", "Wine", "Wallets", "Juice Boxes"],
        correctIndex: 0
    },
];

// creates function when the startBtn is clicked by user
startBtn.addEventListener("click", function hideIntro(event) {
    event.preventDefault();
    document.getElementById("intro").style.display = "none";
})