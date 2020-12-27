// select important elements & declare as variables
let initTimer = document.getElementById("time");
let choicesEl = document.getElementById("choices");
let userResult = document.getElementById("question-result");

// global variables
let correctAnswers = 0;
let wrongAnswers = 0;

// toggles HTML elements when clicked
function toggleElement() {

    // selects "startBtn" element & declares as a variable
    let startBtn = document.getElementById("startBtn");

    // when startBtn is clicked, the style display will be set to 'none'
    if (startBtn.style.display === "none") {
        startBtn.style.display = "block";
    } else {
        startBtn.style.display = "none";
    }

    // selects "intro" section & declares as a variable
    let intro = document.getElementById("intro");

    // when startBtn is clicked, intro section style display will be set to 'none'
    if (intro.style.display === "none") {
        intro.style.display = "block";
    } else {
        intro.style.display = "none";
    }

    displayQuestion();
}

const questions = [   // array of objects containing quiz questions

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

// diisplays questions 1 by 1 in an <h1> tag
function displayQuestion() {

    // starts the question counter at 0;
    let currentQuestion = 0;

    let displayText = document.createElement('h1');

    // appends the text to the HTML body
    document.body.appendChild(displayText);

    displayText.textContent = questions[currentQuestion].question;
}

