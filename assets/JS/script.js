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
var hsHeader = document.createElement("h1");
var currentQuestion = 0;
var score = 0;
var finalScore = 0;
var userInitials = "";
var hsTotal = 5;
var highScoresBox = document.createElement("section");

// Append Elements
document.body.appendChild(header);
header.appendChild(hsLink);
// header.appendChild(hsBtn);
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

// Test for Proper Element Nesting
console.log(document.body.children);
console.log(main.children);
console.log(header.children);

// Element Content
//// Header
hsLink.textContent = "View Highscores";
hsLink.href = "#";
timerArea.textContent = "Time: 30";

//// Main
startBtn.textContent = "Start";
homeHeader.textContent = "Coding Quiz";
homeDescr.textContent = "Challenge your coding skills by answering each of the 5 questions given -- press 'Start' to begin!";
returnBtn.textContent = "Return";
hsBtn.textContent = "Show Highscores";
clearBtn.textContent = "Clear Highscores";

//Element Styling
//// Header
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.fontFamily = "Poppins, Helvetica, sans-serif"
document.body.style.color = "#5D2A42";
header.style.color = "#FFF9EC";
header.style.width = "500px";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.backgroundColor = "#FB6376";
header.style.paddingLeft = "30px";
header.style.paddingRight = "30px";
homeHeader.style.fontFamily = "Titan One";
homeHeader.style.fontSize = "30px";
homeHeader.style.color = "#FFF9EC";
homeHeader.style.letterSpacing = "2px";

//// Main
main.style.width = "500px";
main.style.backgroundColor = "#FCB1A6";
main.style.padding = "30px";
main.style.textAlign = "center";
questionsBox.style.display = "none";
questionsBox.style.fontSize = "30px";
questionsBox.style.color = "#FFF9EC";
questionsBox.style.letterSpacing = "2px";
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
highScoresBox.style.display = "flex";
highScoresBox.style.flexDirection = "column";
highScoresBox.style.justifyContent = "center";
highScoresBox.style.alignItems = "center";
returnBtn.style.margin = "5px";
endHeader.style.fontFamily = "Titan One";
endHeader.style.fontSize = "30px";
endHeader.style.color = "#FFF9EC";
endHeader.style.letterSpacing = "2px";
initialsBtn.style.color = "#FFF9EC";
initialsBtn.style.margin = "5px";
initialsBtn.style.backgroundColor = "#FB6376";
initialsBtn.style.borderColor = "#FFF9EC";
clearBtn.style.color = "#FFF9EC";
clearBtn.style.margin = "5px";
clearBtn.style.backgroundColor = "#FB6376";
clearBtn.style.borderColor = "#FFF9EC";
startBtn.style.color = "#FFF9EC";
startBtn.style.backgroundColor = "#FB6376";
startBtn.style.borderColor = "#FFF9EC";
hsBtn.style.color = "#FFF9EC";
hsBtn.style.margin = "5px";
hsBtn.style.backgroundColor = "#FB6376";
hsBtn.style.borderColor = "#FFF9EC";
returnBtn.style.color = "#FFF9EC";
returnBtn.style.margin = "5px";
returnBtn.style.backgroundColor = "#FB6376";
returnBtn.style.borderColor = "#FFF9EC";
answerA.style.color = "#FFF9EC";
answerA.style.backgroundColor = "#FB6376";
answerA.style.borderColor = "#FFF9EC";
answerB.style.color = "#FFF9EC";
answerB.style.backgroundColor = "#FB6376";
answerB.style.borderColor = "#FFF9EC";
answerC.style.color = "#FFF9EC";
answerC.style.backgroundColor = "#FB6376";
answerC.style.borderColor = "#FFF9EC";
answerD.style.color = "#FFF9EC";
answerD.style.backgroundColor = "#FB6376";
answerD.style.borderColor = "#FFF9EC";

// Arrays
//// Questions & Answers
var quizQuestions = [
    { 
        question: "What does HTML stand for?",
        answers: {
            a: "Helpful Text Monitors Loading", 
            b: "Hyper Text Markup Language",
            c: "Holy Trees Make Lists",
            d: "Hyper Text Makeup Language"
        },
        correctAnswer: "b"
    },
    { 
        question: "Which of the following is NOT an example of HTML semantic language?",
        answers: {
            a: "Main", 
            b: "Section",
            c: "Span",
            d: "Navbar"
        },
        correctAnswer: "c"
    },
    { 
        question: "What order does the CSS Box Model follow (from outside to inside)?",
        answers: {
            a: "Margin, Border, Padding, Content", 
            b: "Content, Padding, Border, Margin",
            c: "Margin, Padding, Border, Content",
            d: "Padding, Border, Margin, Content"
        },
        correctAnswer: "a"
    },
    { 
        question: "Which of the following are operators utilized by JavaScript?",
        answers: {
            a: "+", 
            b: "-",
            c: "=",
            d: "All of the Above"
        },
        correctAnswer: "d"
    },
    { 
        question: "Which of the following can only have a value of true or false?",
        answers: {
            a: "Strings", 
            b: "Operators",
            c: "Booleans",
            d: "Numbers"
        },
        correctAnswer: "c"
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
    main.appendChild(questionsBox);
    main.appendChild(answersBox);
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
    var sec = 30;
    var timer = setInterval(function() {
        timerArea.innerHTML='Time: ' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            answersBox.remove();
            questionsBox.textContent = "Time's Up!"
            questionsBox.appendChild(returnBtn);
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
    localStorage.setItem(JSON.stringify(userInitials), JSON.stringify(finalScore));
    var gameResult = "Player: " + userInitials + " | Score: " + finalScore;
    hsArray.push(gameResult);
    console.log(hsArray);
}

// Show Highscores
function showHighScores() {
    console.log(userInitials);
    hsBtn.remove();
    endHeader.remove();
    endText.remove();
    returnBtn.remove();
    main.appendChild(highScoresBox);
    highScoresBox.innerHTML = hsArray.join('<br>');
    highScoresBox.appendChild(returnBtn);
    highScoresBox.appendChild(clearBtn);
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
    questionsBox.remove();
    answersBox.remove();
    main.appendChild(home);
}

function afterInitials() {
    endHeader.textContent = "Score saved!"
    endText.textContent = "Click return to start over or the highscores button to see a list of current highscores."
    
    main.appendChild(returnBtn);
    main.appendChild(hsBtn);
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

hsLink.addEventListener("click", function(){
    home.remove();
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