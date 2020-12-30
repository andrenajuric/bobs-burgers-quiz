// select important elements & declare as variables
let initTimer = document.getElementById("time");
let choicesEl = document.getElementById("choices");
let userResult = document.getElementById("question-result");
const submitButton = document.getElementById("submit");
var timeEl = document.getElementById("time");

// global variables
let correctAnswers = 0;
let wrongAnswers = 0;
let secondsLeft = 75;

function setTime() {

    let callback = function () {

        secondsLeft--;

        timeEl.textContent = "Time: " + secondsLeft + " seconds left";

        if (secondsLeft == 0) {
            clearInterval(timerInterval);
            alert("time is up!");
        }

    };

    let timerInterval = setInterval(callback, 1000);

}

// toggles HTML elements when clicked
function hideIntro() {

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

    setTime();
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

// starts the question counter at 0;
let currentQuestion = 0;

// diisplays questions 1 by 1 in an <h1> tag
function displayQuestion() {

    // creates the <h1> tag
    let displayText = document.createElement("h1");
    displayText.style.textAlign = "center";

    // appends the text to the HTML body
    document.body.appendChild(displayText);

    // grabs the text content of the current question
    displayText.textContent = questions[currentQuestion].question;

    displayChoices();
}

function displayChoices() {

    // create choices as radio inputs
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        let choice = document.createElement("input");
        choice.type = "radio";
        choice.className = "choices";
        choice.value = i;

        // if user has chosen current choice as answer, mark current choice
        if ('answer' in quiz.allQuestions[quiz.index] && choice.value == quiz.allQuestions[quiz.index]['answer']) {
            choice.checked = "checked";
        }

        // if ((questions[currentQuestion].choice.value.checked = "checked") === questions[currentQuestion].correctIndex) {
        //     console.log('correct');
        // }

        // append current choice to quiz
        document.body.appendChild(choice);
        document.body.appendChild(document.createTextNode(questions[currentQuestion].choices[i]));
        document.body.appendChild(document.createElement('br'));
    }

}

// function nextQuestion() {

//     ++currentQuestion;
//     document.write(questions[currentQuestion].question + "<br />");

//     for (let j = 0; j < questions[currentQuestion].choices.length; j++) {
//         document.write("<input type=radio id=myRadio name=radAnswer>" + questions[currentQuestion].choices[j] + "<br />");
//     }

//     if (currentQuestion < (questions.length - 1)) {
//         let nextButton = document.write("<button onclick='toggleElement()' id='nextBtn'>");
//         // let nextButton = document.createElement("input");
//         // nextButton.type = "button";
//         nextButton.value = "Next question";
//         nextButton.addEventListener('click', nextQuestion);
//         document.body.appendChild(nextButton);
//     } else {
//         let submitButton = document.createElement("input");
//         submitButton.type = "button";
//         submitButton.value = "Submit";
//         submitButton.addEventListener("click", function submitQuiz() {
//             console.log('your quiz has been submitted');
//         });
//         document.body.appendChild(submitButton);
//     }
// };

// nextQuestion();