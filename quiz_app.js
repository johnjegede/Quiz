// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];



  var StartButton =  document.getElementById("begin");
  var timerValue = document.getElementById("timer");
  var questionsElement = document.getElementById("Quiz_questions");
  var time = 60;
  var timerContent;


  StartButton.addEventListener("click",function(){
      timerContent = setInterval(startClock, 1000);

      timerValue.innerHTML = time;

      var ScreenElement = document.getElementById("quiz_items"); 
      ScreenElement.setAttribute("class", "hide");

      questionsElement.removeAttribute("class");

      getQuizQuestions();
     
    

  });

  function startClock() {
    // change time
    time--;
    timerValue.innerHTML = time;
  
    // check if time has ended
    if (time <= 0) {
      quizEnd();
    }
  }