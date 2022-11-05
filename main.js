const quizDB = [
    {
        question: "Q1:What is the full form of HTML",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: " Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2:What is the full form of CSS?",
        a: "casecading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: WHat is the full form of HTTP",
        a: "HyperText Transform product",
        b: "HyperText the protocol",
        c: "Hey Transform Protocol",
        d: "HyperText Transform protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "Javascript",
        b: "javascript",
        c: "Justscript",
        d: "Jordersheet",
        ans: "ans1"
    }
];








// const question = document.querySelector('.question');
// const option1 = document.querySelector('#option1');
// const option2 = document.querySelector('#option2');
// const option3 = document.querySelector('#option3');
// const option4 = document.querySelector('#option4');

// const submit = document.querySelector('#submit');
// const answers = document.querySelectorAll('.answer');
// const showScore = document.querySelector('#showScore');
// let questionCount = 0;
// let score = 0;
// const loadQuestion = () => {
//     const questionList = quizDB[questionCount];

//     question.innerText = questionList.question;

//     option1.innerText = questionList.a;
//     option2.innerText = questionList.b;
//     option3.innerText = questionList.c;
//     option4.innerText = questionList.d;
// }
// loadQuestion();

// const getCheckAnswer = () => {
//     let answer;

//     answers.forEach(currentAnsElement => {
//         if (currentAnsElement.checked) {
//             answer = currentAnsElement.id;
//         }
//     });
//     return answer;

// }
// const deSeletAll = () => {
//     answers.forEach((currentElem) => {
//         currentElem.checked = false
//     })
// }
// submit.addEventListener('click', () => {
//     const checkedAnswer = getCheckAnswer()
//     console.log(checkedAnswer)

//     if (checkedAnswer === quizDB[questionCount].ans) {
//         score++;
//     };

//     questionCount++;

//     deSeletAll();
//     if (questionCount < quizDB.length) {
//         loadQuestion();
//     } else {
//         showScore.innerHTML = `
//             <h3> Your scored ${score}/${quizDB.length} </h3>
//             <button class="btn" onclick="location.reload()"> Play again </button>
//         `;
//         showScore.classList.remove('scoreArea')
//     }
// })