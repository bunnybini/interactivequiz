document.addEventListener("DOMContentLoaded", function () {
  // Define the questions and answers
  var questions = [
    {
      question: "What is the average lifespan of a dog?",
      options: [
        { text: "5-8 years", isCorrect: false },
        { text: "10-12 years", isCorrect: true },
        { text: "15-18 years", isCorrect: false },
        { text: "20-25 years", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the following factors should be considered before adopting a dog?",
      options: [
        { text: "Time commitment for exercise and training", isCorrect: false },
        {
          text: "Financial responsibilities (food, vaccinations, vet visits)",
          isCorrect: false,
        },
        { text: "Living situation and space available", isCorrect: false },
        { text: "All of the above", isCorrect: true },
      ],
    },
    {
      question: "What is the importance of spaying or neutering your dog?",
      options: [
        { text: "It reduces the risk of certain diseases", isCorrect: false },
        { text: "It helps control the pet population", isCorrect: false },
        { text: "It can improve the dog's behavior", isCorrect: false },
        { text: "All of the above", isCorrect: true },
      ],
    },
    {
      question:
        "How often should a dog be taken for regular veterinary check-ups?",
      options: [
        { text: "Once a year", isCorrect: true },
        { text: "Every 3-4 years", isCorrect: false },
        { text: "Only when the dog is sick", isCorrect: false },
        { text: "Never necessary", isCorrect: false },
      ],
    },
    {
      question: "Which of the following foods should NOT be fed to dogs?",
      options: [
        { text: "Chocolate", isCorrect: false },
        { text: "Grapes or raisins", isCorrect: false },
        { text: "Onions or garlic", isCorrect: false },
        { text: "All of the above", isCorrect: true },
      ],
    },
    {
      question:
        "Do dogs require regular exercise to maintain their physical and mental well-being?",
      options: [
        { text: "True", isCorrect: true },
        { text: "False", isCorrect: false },
      ],
    },
    {
      question:
        "How often should a dog's teeth be brushed to maintain good oral hygiene?",
      options: [
        { text: "Once a month", isCorrect: false },
        { text: "Once a week", isCorrect: false },
        { text: "Every six months", isCorrect: false },
        { text: "Every day or every other day", isCorrect: true },
      ],
    },
    {
      question:
        "Which of the following is a sign that a dog is experiencing anxiety or stress?",
      options: [
        { text: "Wagging tail", isCorrect: false },
        { text: "Relaxed body posture", isCorrect: false },
        { text: "Dilated pupils and panting", isCorrect: true },
        { text: "Playful behavior", isCorrect: false },
      ],
    },
    {
      question:
        "What should you do if your dog shows signs of aggression or behavioral issues?",
      options: [
        {
          text: "Seek professional help from a dog trainer or behaviorist",
          isCorrect: true,
        },
        { text: "Ignore the behavior and hope it goes away", isCorrect: false },
        { text: "Give the dog away to someone else", isCorrect: false },
        { text: "None of the above", isCorrect: false },
      ],
    },
    {
      question:
        "How much time, on average, should you expect to spend daily on dog care and companionship?",
      options: [
        { text: " Less than 30 minutes", isCorrect: false },
        { text: "1-2 hours", isCorrect: false },
        { text: "3-4 hours", isCorrect: false },
        { text: " It varies depending on the dog's needs", isCorrect: true },
      ],
    },
  ];

  var currentQuestionIndex = 0;
  var score = 0;
  var isAnswerSelected = false;

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

    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i];
      var button = document.createElement("button");
      button.textContent = option.text;
      button.classList.add("btn");
      button.addEventListener("click", createOptionClickListener(option));

      optionsElement.appendChild(button);
    }

    function createOptionClickListener(option) {
      return function () {
        // Check if the selected answer is correct
        if (!isAnswerSelected) {
          if (option.isCorrect) {
            score++;
          }
          // } else {
          //   score--;
          // }

          isAnswerSelected = true;

          // Disable all answer options
          disableOptions();

          // Show the next button
          nextButton.style.display = "block";

          // Remove the "btn-answer-selected" class from all buttons
          var answerButtons = document.getElementsByClassName("answer");
          for (var j = 0; j < answerButtons.length; j++) {
            answerButtons[j].classList.remove("btn-answer-selected");
          }

          // Add the "btn-answer-selected" class to the clicked button
          this.classList.add("btn-answer-selected");
        }
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
      isAnswerSelected = false;
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
    var finalScore = score < 0 ? 0 : score; // Ensure the score is not negative
    resultElement.textContent =
      "Your score: " + finalScore + "/" + questions.length;

    //text base on the score
    var textElement = document.createElement("p");
    // var imageElement = document.createElement("img");

    if (finalScore > 7) {
      textElement.textContent =
        "Congratulations! You scored 8/10 or higher. You have shown a strong understanding of responsible dog ownership and are well-prepared to welcome a furry friend into your life. Keep up the great work!";
      // resultContainer.style.backgroundImage =
      //   'url("/Image/happy-gummy-bear.jpg")';
      document.body.style.backgroundImage = 'url("/Image/pawHappy.jpg")';
    } else if (finalScore > 3) {
      textElement.textContent =
        "Well done! You scored 4/10 or higher. You have demonstrated some knowledge about dog care and ownership, but there is still room for improvement. Take some time to research and learn more to ensure you provide the best care for your future four-legged companion.";

      // var imageElement = document.createElement("img");

      // resultContainer.style.backgroundImage =
      //   'url("/Image/disappointed-gummy-bear.jpg")';
      document.body.style.backgroundImage = 'url("/Image/pawNormal.jpg")';
    } else {
      textElement.textContent =
        "Thank you for taking the quiz. You scored lower than 3/10. It seems you may need to enhance your knowledge about dog care and ownership before considering adopting a furry friend. Take this as an opportunity to educate yourself on the responsibilities and requirements involved in providing a loving and caring home for a dog.";

      // var imageElement = document.createElement("img");

      // resultContainer.style.backgroundImage =
      //   'url("/Image/happy-gummy-bear.jpg")';
      document.body.style.backgroundImage = 'url("/Image/pawSAD.jpg")';
    }

    resultContainer.appendChild(textElement);
    // resultContainer.appendChild(imageElement);
    // document.body.style.backgroundImage = resultContainer.style.backgroundImage;
    // resultContainer.style.backgroundColor = "lightgray";
    resultContainer.style.backgroundImage = "none";
  }
});
