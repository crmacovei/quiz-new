(function () {
  
  function buildQuiz() {
    
    const output = [];

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answers = [];

      
      for (letter in currentQuestion.answers) {
      
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      
      output.push(
        `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
      );
    });

    
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    
    const answerContainers = quizContainer.querySelectorAll(".answers");

   
    let numCorrect = 0;

   
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
      if (userAnswer === currentQuestion.correctAnswer) {
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = "lightgreen";
      }
     
      else {
       
        answerContainers[questionNumber].style.color = "red";
      }
    });

    
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

 
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  const myQuestions = [
    {
      question: "Ce este un algoritm?",
      answers: {
        a: "O problema de rezolvat cu ajutorul calculatorului",
        b: "Un set de pasi, repetati pentru a gasi rezultatul",
        c: "O materie de liceu",
        d: "N-am auzit niciodata de acest cuvant",
      },
      correctAnswer: "b",
    },
    {
      question: "Ce putem afirma atunci cand clasa B mosteneste clasa A?",
      answers: {
        a: "Clasa A ia toate campurile si metodele clasei B",
        b: "Clasa B ia toate metodele si campurile clasei A",
        c: "Clasa B devine o copie a clasei A",
        d: "N-am auzit niciodata de clase",
      },
      correctAnswer: "b",
    },
    {
      question: "Care sunt functiile principale ale unui server?",

      answers: {
        a: "Gestioneaza request-urile si serveste resursele statice",
        b: "Ne ajuta sa ne jucam pe Internet",
        c: "Este un computer care ruleaza 24/7",
        d: "N-am auzit niciodata de server",
      },
      correctAnswer: "a",
    },

    {
      question:
        "Ce serviciu este potrivit pentru a gestiona cod intr-o echipa?",
      answers: {
        a: "Maven",
        b: "Cucumber",
        c: "GitHub",
        d: "Foaia de hartie si pixul",
      },
      correctAnswer: "c",
    },

    {
      question: "Care este Package Manager-ul limbajului Python?",
      answers: {
        a: "pip",
        b: "py",
        c: "apt",
        d: "dhl",
      },
      correctAnswer: "a",
    },
  ];

 
  buildQuiz();

 
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

 
  showSlide(currentSlide);

 
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
}

)();

var sec = 120;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}
