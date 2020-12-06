// select HTML elements and declare as variables
var main = document.getElementsByTagName("main")[0];
var timer = document.getElementById("#time-shown");
var startButton = document.getElementById("#start");
var questionNum = document.getElementById("#question-number");
var question = document.getElementById("#question");
var choices = document.getElementById("#choices");
var questionResult = document.getElementById("#result");
var backToStart = documnet.getElementById("#back-to-start");

// trivia questions
var triviaQuestions = [ // creates array that holds questions and choices
    {
        "question": "What is the order of the Belcher children from oldest to youngest?",
        "choices": ["Tina, Louise, Gene", "Gene, Tina, Louise",
            "Louise, Gene, Tina", "Tina, Gene, Louise",
            "Tina, Gene, Louise"],
        "correct": 3
    }, {
        "question": "When is Bob and Linda's anniversary?",
        "choices": ["February 14th", "May 7th", "June 1st", "September 3rd"],
        "correct": 3
    }, {
        "question": "Millie is Louise's #1 fan. What costume duo did she want to be with Louise on Halloween?",
        "choices": ["Dust bunnies", "Batman and Robin", "Bert and Ernie", "Buzz and Woody"],
        "correct": 0
    }, {
        "question": "Who are Bob's 2 main regulars at the restaurant?",
        "choices": ["Jimmy Pesto and Trev", "Teddy and Marshmallow", "Gretchen and Mike the Mailman", "Andy and Ollie"],
        "correct": 0
    }, {
        "question": "What is the name of Bob and Linda's landlord?",
        "choices": ["Mr. Frond", "Mr. Fischoeder", "Sergeant Bosco", "Dr. Yap"],
        "correct": 1
    }, {
        "question": "Who lost the snoring contest between Bob and Linda?",
        "choices": ["Bob", "Linda", "Both", "Neither - the kids won!"],
        "correct": 2
    }, {
        "question": "Linda was going to open an Etsy shop and name it...",
        "choices": ["The Knitcracker", "Scarving Children", "Sew, Sew Knitting", "Subpar Scarves for Children"],
        "correct": 1
    }, {
        "question": "In Season 9, Rudy's Halloween costume was:",
        "choices": ["Jason Segel from I Love You, Man", "A hockey goalie with a mask", "Nun of your business", "Paul Rudd from I Love You, Man"],
        "correct": 3
    }, {
        "question": "Which Boyz4Now member did Louise fall in love with?",
        "choices": ["Griffin", "Matt", "Allen", "Boo Boo"],
        "correct": 3
    }];

// creates variables that tracks score
var startTime = triviaQuestions.lenth * 8;
var lostTime = 10;
var timeLeft;
var scoreCount;

function init() {
    startButton.addEventListener("click", event => {
        event.preventDefault()
        displayQuestionPage()
    })
    choices.addEventListener("click", function (event) {
        event.preventDefault()
        if (event.target.matches("button")) {
            var button = event.target
            if (button.classList.contains("correct")) {
                questionResult.textContent = "That's Right!"
                questionNum.children[nextQuestionIndex - 1].classList.add("correct")
                scoreCount++
            } else {
                questionResult.textContent = "*Tina Groan* ...No"
                questionNum.children[nextQuestionIndex - 1].classList.add('wrong')
                timeLeft -= lostTime
            }
            if (timeLeft > 0) displayNextQuestion()
            else displayGetNamePage()
        }
    })
    backToStart.addEventListener("click", event => {
        event.preventDefault()
        displayStartPage()
    })

    // display the starting page
    displayStartingPage()
}

function displayPage(id) {
    main.querySelectorAll(".page").forEach(page => {
        if (page.id == id) {
            page.classList.remove("hidden")
        } else {
            page.classList.add("hidden")
        }
    })
    return 4
}

function displayStartingPage() {
    displayPage("start-page")

    clearInterval(timer)
    timeLeft = 0
    timer.textContent = formatSeconds(timeLeft)
}

var nextQuestionIndex;

function displayQuestionPage() {
    displayPage("question-page")

    questionNum.innterHTML = ""

    for (var i = 0; i < triviaQuestions.length; i++) {
        var element = triviaQuestions[i];
        var el = document.createElement("span")
        el.textContent = i + 1
        questionNum.appendChild(el)
    }

    nextQuestionIndex = 0
    scoreCount = 0

    startCountdown()

    displayNextQuestion()
}

function displayNextQuestion() {
    if (nextQuestionIndex < triviaQuestions.length) {
        var question = [nextQuestionIndex].triviaQuestions
        var result = [nextQuestionIndex].result
    }
}