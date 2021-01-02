// select important elements & declare as variables
let timeEl = document.getElementById("time");
const heroEl = document.getElementById("hero");
const gameSectionEl = document.getElementById("game");
const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
var currentQuestionEl = document.getElementById("current-question");
var choicesEl = document.getElementById("choices-list");
var choiceResult = document.getElementById("choice-result");

// global variables
let correctScore = 0;
let wrongScore = 0;
let secondsLeft = 75;

// timer function
function setTime() {

    let callback = function () {

        // counts down from 75
        secondsLeft--;

        timeEl.textContent = "Time: " + secondsLeft + " seconds";

        // once secondsLeft hits 0, page will alert that time is up
        if (secondsLeft == 0) {
            clearInterval(timerInterval);
            alert("time is up!");
        }

    };

    let timerInterval = setInterval(callback, 1000);

}

// toggles HTML elements when clicked
function hideIntro() {

    // when startBtn is clicked, the style display will be set to 'none'
    if (startBtn.style.display === "none") {
        startBtn.style.display = "block";
    } else {
        startBtn.style.display = "none";
    }

    // when startBtn is clicked, intro section style display will be set to 'none'
    if (intro.style.display === "none") {
        intro.style.display = "block";
    } else {
        intro.style.display = "none";
    }

    setTime();
    displayQuestion();
}

const questions = [   // array of objects containing quiz questions

    {
        question: "What is the order of the Belcher children from oldest to youngest?",
        choices: ["Tina, Louise, Gene", "Gene, Louise, Tina", "Tina, Gene, Louise", "Louise, Gene, Tina"],
        correct: 2
    }, {
        question: "What are the names of the two regular customers at Bob's Burgers?",
        choices: ["Teddy and Mort", "Jimmy Pesto and Trev", "Gretchen and Marshmallow", "Calvin and Gayle"],
        correct: 0
    }, {
        question: "What was the name of Linda's high school band?",
        choices: ["Bad Hair Day", "Menstruation Nation", "Linda and the Lindette's", "The Ta-Ta's"],
        correct: 3
    }, {
        question: "When is Bob and Linda's anniversary?",
        choices: ["May 4th", "September 3rd", "August 9th", "December 6th"],
        correct: 1
    }, {
        question: "What is Gene Belcher's astrological sign?",
        choices: ["Sagittarius", "Taurus", "Cancer", "Libra"],
        correct: 0
    }, {
        question: "What is Tina's favorite animal?",
        choices: ["Dogs", "Sloths", "Horses", "Chinchillas"],
        correct: 2
    }, {
        question: "Which recurring character has a nickname of 'Slowhand'?",
        choices: ["Sergeant Bosco", "Regular Sized Rudy", "Jimmy Jr.", "Dr. Yap"],
        correct: 3
    }, {
        question: "What part(s) of the show intro change every time?",
        choices: ["The banner", "The van", "The store to the right", "The van and the store to the right"],
        correct: 3
    }, {
        question: "Who is Tina's on-again, off-again crush?",
        choices: ["Joshua", "Jimmy Jr.", "Zeke", "Darryl"],
        correct: 1
    }, {
        question: "What did the Belcher kids and Regular Sized Rudy steal in the episode: The Kids Rob a Train?",
        choices: ["Chocolate", "Wine", "Wallets", "Juice Boxes"],
        correct: 0
    },
];

let currentQuestion;

function displayQuestion() {

    currentQuestion = 0;
    correctScore = 0;

    displayNextQuestion();
}

function displayNextQuestion() {

    if (currentQuestion < questions.length) {

        // get the question and answers from the 
        const question = questions[currentQuestion].question;
        const answers = questions[currentQuestion].choices;
        const correctAnswer = answers[questions[currentQuestion].correct];

        currentQuestionEl.textContent = question;
        choicesEl.innerHTML = "";

        for (let i = 0; i < answers.length; i++) {
            let answer = answers[i];
            let button = document.createElement("button");
            button.classList.add("answer");
            if (answer == correctAnswer)
                button.classList.add("correct")
            button.textContent = answer;
            choicesEl.appendChild(button);
        }

        currentQuestion++

    } else {
        clearInterval(timerInterval)
    }
}

function checkAnswer() {
    choicesEl.addEventListener("click", function (event) {
        event.preventDefault();

        if (event.target.matches("button")) {
            var button = event.target;
            if (button.classList.contains("correct")) {
                choiceResult.textContent = "Alright!"
                correctScore++;
            } else {
                choiceResult.textContent = "*tina groan*";
            }
            if (secondsLeft > 0) displayNextQuestion()
            else console.log('this is where the results page will go')
        }
    });
}

checkAnswer();