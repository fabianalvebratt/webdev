let currentQuestionIndex = 0;

const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      correct: 2,
    },
    {
      question: "What is the largest mammal in the world?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
      correct: 1,
    },
];


function populateQuestion(questionObj) {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questionObj.question;
  
    const answerButtons = document.querySelectorAll(".answer-button");
    for (let i = 0; i < questionObj.answers.length; i++) {
      answerButtons[i].textContent = questionObj.answers[i];
    }
  }
  
  function updateProgress() {
    const progressText = document.getElementById("progress-text");
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }
  
  const answerButtons = document.querySelectorAll(".answer-button");
  
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function () {
      if (i === questions[currentQuestionIndex].correct) {
        console.log("Correct!");
        currentQuestionIndex++;
  
        if (currentQuestionIndex < questions.length) {
          populateQuestion(questions[currentQuestionIndex]);
          updateProgress();
        } else {
          console.log("Quiz completed!");
          alert("You have completed the quiz!");
        }
      } else {
        console.log("Wrong!");
      }
    });
  }
  
  // Starta quizet
  populateQuestion(questions[currentQuestionIndex]);
  updateProgress();

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', () => {
        console.log(`Button ${i} was pressed`);
    });
}
