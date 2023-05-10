document.addEventListener("DOMContentLoaded", function () {
  // Define the questions and answers
  var questions = [
    {
      question: "What color is a gummy bear?",
      options: [
        { text: "Red", isCorrect: false },
        { text: "Green", isCorrect: false },
        { text: "Yellow", isCorrect: true },
      ],
    },
    {
      question: "What is the most popular gummy bear flavor?",
      options: [
        { text: "Strawberry", isCorrect: false },
        { text: "Lemon", isCorrect: false },
        { text: "Raspberry", isCorrect: false },
        { text: "Orange", isCorrect: true },
      ],
    },
    {
      question: "hi",
      options: [
        { text: "Strawberry", isCorrect: false },
        { text: "Lemon", isCorrect: false },
        { text: "Raspberry", isCorrect: false },
        { text: "Orange", isCorrect: true },
      ],
    },
    {
      question: "what",
      options: [
        { text: "Strawberry", isCorrect: false },
        { text: "Orange", isCorrect: true },
      ],
    },
    {
      question: "I don'tnkno?",
      options: [
        { text: "Strawberry", isCorrect: false },
        { text: "Orange", isCorrect: true },
      ],
    },
    // Add more questions...
  ];

  var currentQuestionIndex = 0;
  var score = 0;

  // Get HTML elements
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("answers");
  var nextButton = document.getElementById("next-btn");
  var resultElement = document.getElementById("result");

  // Show the first question
  showQuestion();

  // Function to display the current question and options
  function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    // Display the question
    questionElement.textContent = currentQuestion.question;

    // Clear any existing answer options
    optionsElement.innerHTML = "";

    // Create and append new answer options
    // for (var i = 0; i < currentQuestion.options.length; i++) {
    //   var option = currentQuestion.options[i];
    //   var button = document.createElement("button");
    //   button.textContent = option.text;
    //   button.classList.add("btn");
    //   button.addEventListener("click", function () {
    //     // Check if the selected answer is correct
    //     if (option.isCorrect) {
    //       score++;
    //     }

    //     if (!option.isCorrect) {
    //       score--;
    //     }

    //     // Disable all answer options
    //     disableOptions();

    //     // Show the next button
    //     nextButton.style.display = "block";
    //   });

    //   optionsElement.appendChild(button);
    // }

    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i];
      var button = document.createElement("button");
      button.textContent = option.text;
      button.classList.add("btn");
      button.addEventListener("click", createOptionClickListener(option));

      optionsElement.appendChild(button);
    }

    // Function to create an event listener for the answer option
    function createOptionClickListener(option) {
      return function () {
        // Check if the selected answer is correct
        if (option.isCorrect) {
          score++;
        } else {
          score--;
        }

        // Disable all answer options
        disableOptions();

        // Show the next button
        nextButton.style.display = "block";
      };
    }
  }

  // Function to disable all answer options
  function disableOptions() {
    var options = document.getElementsByClassName("answer");
    for (var i = 0; i < options.length; i++) {
      options[i].disabled = true;
    }
  }

  // Event listener for the next button
  nextButton.addEventListener("click", function () {
    // Hide the next button
    nextButton.style.display = "none";

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
      // Show the next question
      showQuestion();
    } else {
      // Show the final result
      showResult();
    }
  });

  // Function to display the final result
  function showResult() {
    // Hide the quiz container
    var quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = "none";

    // Show the result container
    var resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";

    // Display the score
    resultElement.textContent = "Your score: " + score + "/" + questions.length;
  }
});
