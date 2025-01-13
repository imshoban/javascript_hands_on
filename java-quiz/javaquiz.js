let questions = [
    {
      question: "What is a correct syntax to output 'Hello World' in Java?",
      choice1: 'echo("Hello World");',
      choice2: 'print ("Hello World");',
      choice3: 'System.out.println("Hello World");',
      choice4: 'Console.WriteLine("Hello World");',
      answer: 3
    },
    {
      question:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      choice1: "<script href='xxx.js'>",
      choice2: "<script name='xxx.js'>",
      choice3: "<script src='xxx.js'>",
      choice4: "<script file='xxx.js'>",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      choice1: "msgBox('Hello World');",
      choice2: "alertBox('Hello World');",
      choice3: "msg('Hello World');",
      choice4: "alert('Hello World');",
      answer: 4
    }
  ];
  
let questionCounter=0;
const MAX_QUESTION = 3;
const question = document.getElementsByClassName("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const choiceContainer = Array.from(document.getElementsByClassName("choice-container"));

const score = document.getElementById("score-number");
const question_counter_display = document.getElementById("question-counter");
availableQuestion = [...questions];

let finalScore = 0;

const CORRECT_SCORE = 10;

startquiz = () => {

    
    if(questionCounter == MAX_QUESTION || availableQuestion.length == 0){
        localStorage.setItem("finalScore", finalScore); 
        window.location.assign("end.html");
    }

    question[0].innerText = questions[questionCounter].question;
    let i=1;
    choices.forEach(element => {
        element.innerText = questions[questionCounter]["choice"+i];
        i+=1;
    });
    let selected =  document.querySelector(".selected");
    if(selected){
        selected.classList.remove("selected");
    }
    questionCounter++;

    question_counter_display.innerHTML = `${questionCounter}/${MAX_QUESTION}`;

    score.innerHTML = `${finalScore}`;

}



choiceContainer.forEach(element => {
    element.addEventListener('click',(e)=>{
        let selected = document.querySelector(".selected");
        if(selected){
            selected.classList.remove("selected");
        }
        element.classList.add("selected")




    });
});


updateScore = (e)=>{
  let selected = document.querySelector(".selected").id;

  if(selected == availableQuestion[questionCounter-1].answer){
    finalScore+=CORRECT_SCORE;
  }


}
