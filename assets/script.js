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
// add my array of questions
var quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyphen text markup language",
        b: "Hyper text markup lanaguage",
        c: "Hysterical text marking line",
        d: "Hiking to mount langley",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading style sheet",
        b: "Celebrity style sheet",
        c: "Career systems sheet",
        d: "Challenging style sheet",
        correct: "a",
    },
    {
        question: "What does JS stand for?",
        a: "Jumping stars",
        b: "Java systems",
        c: "Java script",
        d: "Jamesons script",
        correct: "c",
    },
    {
        question: "Where do you link the CSS to the HTML?",
        a: "In the body",
        b: "In the section",
        c: "In the CSS file",
        d: "In the head",
        correct: "d",
    },
];
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

function deselectAnswers() {
    optionEls.forEach(answerEl => answerEl.checked = false)
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