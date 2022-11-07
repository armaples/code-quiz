// Create Elements
var header = document.createElement("header");
var main = document.createElement("main");
var home = document.createElement("section");
var homeHeader = document.createElement("h1");
var homeDescr = document.createElement("p");
var questionsBox = document.createElement("h1");
var answersBox = document.createElement("section");
var answerA = document.createElement("button");
var answerB = document.createElement("button");
var answerC = document.createElement("button");
var answerD = document.createElement("button");
var endHeader = document.createElement("h1");
var endText = document.createElement("p");
var initialsInput = document.createElement("input");
var initialsBtn = document.createElement("button");
var hsLink = document.createElement("a");
var timerArea = document.createElement("p");
var startBtn = document.createElement("button");
var hsBtn = document.createElement("button");
var returnBtn = document.createElement("button");
var clearBtn = document.createElement("button");
var currentQuestion = 0;
var score = 0;
var finalScore = 0;
var userInitials = "";
var hsTotal = 5;
var highScoresBox = document.createElement("section");

// Append Elements
document.body.appendChild(header);
header.appendChild(hsLink);
header.appendChild(timerArea);
document.body.appendChild(main);
main.appendChild(home);
home.appendChild(homeHeader);
home.appendChild(homeDescr);
main.appendChild(questionsBox);
main.appendChild(answersBox);
answersBox.appendChild(answerA);
answersBox.appendChild(answerB);
answersBox.appendChild(answerC);
answersBox.appendChild(answerD);
home.appendChild(startBtn);

// Test for Proper Nesting
console.log(document.body.children);
console.log(main.children);
console.log(header.children);

// Element Content
//// Header
hsLink.textContent = "View Highscores";
hsLink.href = "https://google.com";
timerArea.textContent = "Time: 60";
startBtn.textContent = "Start";
homeHeader.textContent = "Coding Quiz";
homeDescr.textContent = "Challenge your coding skills by answering each of the 5 questions given -- press 'Start' to begin!";


//// Main


//Element Styling
//// Header
header.style.minWidth = "500px";
header.style.maxWidth = "700px";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.backgroundColor = "pink";
header.style.paddingLeft = "30px";
header.style.paddingRight = "30px";
header.style.fontFamily = "Helvetica, sans-serif"

//// Main
main.style.minWidth = "500px";
main.style.maxWidth = "700px";
main.style.backgroundColor = "lightpink";
main.style.padding = "30px";
main.style.textAlign = "center";
questionsBox.style.display = "none";
answersBox.style.display = "none";
answersBox.style.listStyleType = "none";
answersBox.style.padding = "0px";
answersBox.style.flexDirection = "row";
answersBox.style.flexWrap = "wrap";
answerA.style.margin = "5px";
answerB.style.margin = "5px";
answerC.style.margin = "5px";
answerD.style.margin = "5px";
answerA.style.flex = "45%";
answerB.style.flex = "45%";
answerC.style.flex = "45%";
answerD.style.flex = "45%";
initialsBtn.style.margin = "5px";

// Arrays
//// Questions & Answers
var quizQuestions = [
    { 
        question: "Question1",
        answers: {
            a: "Answer1", 
            b: "Answer1",
            c: "Answer1",
            d: "Answer1"
        },
        correctAnswer: "a"
    },
    { 
        question: "Question2",
        answers: {
            a: "Answer2", 
            b: "Answer2",
            c: "Answer2",
            d: "Answer2"
        },
        correctAnswer: "a"
    },
    { 
        question: "Question3",
        answers: {
            a: "Answer3", 
            b: "Answer3",
            c: "Answer3",
            d: "Answer3"
        },
        correctAnswer: "b"
    },
    { 
        question: "Question4",
        answers: {
            a: "Answer4", 
            b: "Answer4",
            c: "Answer4",
            d: "Answer4"
        },
        correctAnswer: "b"
    },
    { 
        question: "Question5",
        answers: {
            a: "Answer5", 
            b: "Answer5",
            c: "Answer5",
            d: "Answer5"
        },
        correctAnswer: "b"
    }
]
console.log(Array.from(quizQuestions));
// Array for Highscores
var hsArray = [];

// Functions
    // Start Quiz
function startQuiz() {
    score = 0;
    currentQuestion = 0;
    countDown();
    renderQuestion();
}

function renderQuestion() {
    questionsBox.style.display = "block";
    answersBox.style.display = "flex";
    answersBox.style.justifyContent = "space-around";

    questionsBox.textContent = quizQuestions[currentQuestion].question;
    answerA.textContent = "A: " + quizQuestions[currentQuestion].answers.a;
    answerB.textContent = "B: " + quizQuestions[currentQuestion].answers.b;
    answerC.textContent = "C: " + quizQuestions[currentQuestion].answers.c;
    answerD.textContent = "D: " + quizQuestions[currentQuestion].answers.d;
}

function next() {
    currentQuestion++;
    console.log(currentQuestion);
    if (currentQuestion <= 4) {
        renderQuestion();
    } else {
        questionsBox.style.display = "none";
        answersBox.style.display = "none";
        endGame();
    }
}
// Timer

function countDown() {
    var sec = 60;
    var timer = setInterval(function() {
        timerArea.innerHTML='Time: ' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        } else if (currentQuestion >= 5) {
            clearInterval(timer);
        }
    }, 1000);
}

function endGame() {
    main.appendChild(endHeader);
    main.appendChild(endText);
    main.appendChild(initialsInput);
    main.appendChild(initialsBtn);

    // var finalScore = (score * 20);
    // console.log("Final Score: " + finalScore);

    endHeader.textContent = "You got " + score + "/5 questions correct! That means your total score was a " + (score * 20) + ".";

    endText.textContent = "Enter your initials below to record your score: ";
    initialsBtn.textContent = "Submit";

    // return finalScore;
}

// Keep Score + Initials in Local Storage
function storeScore() {
    var finalScore = (score * 20);
    console.log("Final Score: " + finalScore);

    var userInitials = initialsInput.value;
    console.log("Initials: " + userInitials);
    localStorage.setItem(userInitials, finalScore);
    hsArray.push(userInitials + " - " + finalScore);
    console.log(hsArray);
}

// Show Highscores
function showHighScores() {
    for (let i = 0; i < hsArray.length; i++) {
        highScoresBox.innerHTML += hsArray[i];
    hsBtn.remove();
    endHeader.remove();
    endText.remove();
    main.appendChild(highScoresBox);
}; 
}

// Clear Highscores
function clearHighScores() {
    localStorage.clear();
}

// Return to Start
function returnHome() {
    highScoresBox.remove();
    endHeader.remove();
    endText.remove();
    returnBtn.remove();
    hsBtn.remove();
    main.appendChild(home);
}

function afterInitials() {
    endHeader.textContent = "Score saved!"
    endText.textContent = "Click return to start over or the highscores button to see a list of current highscores."
    
    main.appendChild(returnBtn);
    main.appendChild(hsBtn);

    returnBtn.textContent = "Return";
    hsBtn.textContent = "Show Highscores";
}

// Event Listeners
    // Start Button
startBtn.addEventListener("click", function(){
    home.remove();
    startQuiz();
});
    // Highscores Button
hsBtn.addEventListener("click", function(){
    showHighScores()
});
    // Return Button
returnBtn.addEventListener("click", function() {
    returnHome()
});
    // Clear Highscores Button
clearBtn.addEventListener("click", function() {
    clearHighScores()
});

answerA.addEventListener("click", function(){
    var userChoice = "a";
    if (userChoice === quizQuestions[currentQuestion].correctAnswer) {
        console.log("Correct!");
        score ++
        console.log("Total Score: " + score);
    } else {
        console.log("incorrect!");
    }
    localStorage.setItem(currentQuestion, userChoice);
    console.log("User answer to #" + (currentQuestion+1) + ": " + userChoice);
    next();
})

answerB.addEventListener("click", function(){
    var userChoice = "b";
    if (userChoice === quizQuestions[currentQuestion].correctAnswer) {
        console.log("Correct!");
        score ++
        console.log("Total Score: " + score);
    } else {
        console.log("incorrect!");
    }
    localStorage.setItem(currentQuestion, userChoice);
    console.log("User answer to #" + (currentQuestion+1) + ": " + userChoice);
    next();
})

answerC.addEventListener("click", function(){
    var userChoice = "c";
    if (userChoice === quizQuestions[currentQuestion].correctAnswer) {
        console.log("Correct!");
        score ++
        console.log("Total Score: " + score);
    } else {
        console.log("incorrect!");
    }
    localStorage.setItem(currentQuestion, userChoice);
    console.log("User answer to #" + (currentQuestion+1) + ": " + userChoice);
    next();
})

answerD.addEventListener("click", function(){
    var userChoice = "d";
    if (userChoice === quizQuestions[currentQuestion].correctAnswer) {
        console.log("Correct!");
        score ++
        console.log("Total Score: " + score);
    } else {
        console.log("incorrect!");
    }
    localStorage.setItem(currentQuestion, userChoice);
    console.log("User answer to #" + (currentQuestion+1) + ": " + userChoice);
    next();
})

initialsBtn.addEventListener("click", function(){
    initialsInput.remove();
    initialsBtn.remove();
    storeScore();
    afterInitials();
})