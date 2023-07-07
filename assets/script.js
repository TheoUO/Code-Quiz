// add my array of questions
var quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyphen text markup language",
        b: "Hiking to mount langley",
        c: "Hysterical text marking line",
        d: "Hyper text markup language",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Celebrity style sheet",
        b: "Cascading style sheet",
        c: "Career systems sheet",
        d: "Challenging style sheet",
        correct: "b",
    },
    {
        question: "What does JS stand for?",
        a: "Java script",
        b: "Jumping stars",
        c: "Java systems",
        d: "Jamesons script",
        correct: "a",
    },
    {
        question: "Where do you link the CSS to the HTML?",
        a: "In the body",
        b: "In the head",
        c: "In the section",
        d: "In the CSS file",
        correct: "b",
    },
];
// declare all necessary classes and IDs from HTML 
var quiz= document.getElementById('quiz')
var optionEls = document.querySelectorAll('.option')
var questionEl = document.getElementById('question')
var one_text = document.getElementById('one_text')
var two_text = document.getElementById('two_text')
var three_text = document.getElementById('three_text')
var four_text = document.getElementById('four_text')
var submitBtn = document.getElementById('submit_btn')

var currentQuiz = 0
var score = 0
// I need to call the loadQuiz() function first when the page loads
loadQuiz()
// create a function that displays the question to the user
function loadQuiz() {
    deselectAnswers()
    var currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    one_text.innerText = currentQuizData.a
    two_text.innerText = currentQuizData.b
    three_text.innerText = currentQuizData.c
    four_text.innerText = currentQuizData.d
}

//when win condition is met
//function winGame() {
//    quiz.textContent = "YOU WON!!!🏆 ";
//    winCounter++
//    startButton.disabled = false;
//    setWins()
//  }



function deselectAnswers() {
    optionEls.forEach(optionEl => optionEl.checked = false)
}
function getSelected() {
    var answer
    optionEls.forEach(optionEl => {
        if(optionEl.checked) {
            answer = optionEl.id
        }
    })
    return answer
}
// add listener to the submit button to move on to the next question
submitBtn.addEventListener('click', () => {
    var answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})