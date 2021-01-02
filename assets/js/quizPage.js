// select important elements & declare as variables
let timeEl = document.getElementById("time");
const heroEl = document.getElementById("hero");
const gameSectionEl = document.getElementById("game");
const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
const currentQuestionEl = document.getElementById("current-question");
let choicesEl = document.getElementById("choices-list");
let choiceResult = document.getElementById("choice-result");
let scorePageEl = document.getElementById("final-score");

// global variables
let score = 0;
let secondsLeft = 75;
const timePenalty = 10;

// timer function
function setTime() {

    let callback = function () {

        // counts down from 75
        secondsLeft--;

        timeEl.textContent = "Time: " + secondsLeft + " seconds";

        // once secondsLeft hits 0, page will alert that time is up
        if (secondsLeft == 0) {
            clearInterval(timerInterval);
            finalScore();
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
    }, {
        question: "Who said 'First I smelt it and now I want you to dealt it... into my mouth'?",
        choices: ["Hugo", "Gene", "Skip Marooch", "Mort"],
        correct: 2
    }, {
        question: "What is Bob's favorite holiday?",
        choices: ["Halloween", "Thanksgiving", "Christmas", "He hates holidays"],
        correct: 1
    }, {
        question: "What street do the Belchers live on?",
        choices: ["Ocean Street", "Wharf Avenue", "Wharf Drive", "Ocean Avenue"],
        correct: 3
    }, {
        question: "What is Gene most afraid of?",
        choices: ["Spiders", "Clowns", "Snakes", "Teengers"],
        correct: 2
    },
];

// the current question index of questions array
let currentQuestion;

function displayQuestion() {

    currentQuestion = 0;
    score = 0;

    setTime();

    nextQuestion();
}

function nextQuestion() {

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
        finalScore();
    }
}

// checks the user selection and returns results
function checkAnswer() {
    choicesEl.addEventListener("click", function (event) {
        event.preventDefault();

        // tracks which button is chosen
        if (event.target.matches("button")) {
            var button = event.target;
            if (button.classList.contains("correct")) {
                choiceResult.textContent = "*linda voice* Alright!" // adds text to choiceResult <div>
                score++; // adds point to # of correct answers
            } else {
                choiceResult.textContent = "*tina groan*";
                secondsLeft -= timePenalty; // subtracts 10 seconds from timer if incorrect 
            }
            if (secondsLeft > 0) nextQuestion() // if there is still time left, nextQuestion is called
            else finalScore();
        }
    });
}

// calls the function
checkAnswer();

function finalScore() {

    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    timeEl.textContent = secondsLeft;

    if (gameSectionEl.style.display === "none") {
        gameSectionEl.style.display = "block";
    } else {
        gameSectionEl.style.display = "none";
    }

    let finish = document.createElement("h2");
    finish.textContent = "Alright, Show's Over!";
    scorePageEl.appendChild(finish);

    let scoreTally = document.createElement("div");
    scoreTally.textContent = "Your final score is " + score;
    scorePageEl.appendChild(scoreTally);
}