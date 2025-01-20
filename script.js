let currentQuestionIndex = 0;
let questions = [];
let correctAnswerCount = 0;

async function fetchQuestions() {
  try {
    const apiResponse = await fetch("https://www.tassell.se/apis/quiz.php?key=5cf19af194310e4f16c1a3b41ae690b3");
    if (!apiResponse.ok) {
      throw new Error("Couldn't fetch the questions");
    }

    const questionData = await apiResponse.json();
    questions = questionData.questions;

    if (questions.length > 0) { 
      showQuestion(questions[currentQuestionIndex]);
    } else {
      alert("No questions available from the API.");
    }
  } catch (fetchError) {
    alert("Failed to load questions. Please try again.", fetchError);
  }
}

function showQuestion(questionObj) {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questionObj.question;

  const answerButtons = document.querySelectorAll(".answer-button");
  for (let i = 0; i < questionObj.answers.length; i++) {
    answerButtons[i].textContent = questionObj.answers[i];
  }
}

const answerButtons = document.querySelectorAll(".answer-button");

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function() {
    if (i === questions[currentQuestionIndex].correct) {
      console.log("Correct");
      correctAnswerCount++;
    } else {
      console.log("Wrong");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      alert(`You've completed the quiz.\nYou got ${correctAnswerCount}/${questions.length} questions correct.`);
    }
  });
}

fetchQuestions();

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function() {
        console.log(`Button ${i} was pressed`);
    });
}
