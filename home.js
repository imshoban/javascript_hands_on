func = () => {
    window.location.assign("java-quiz/quiz.html");
};

logout= () =>{
    window.location.assign("login.html");
};


const quiz = document.getElementsByClassName("quiz-thumbnails");
quiz[0].addEventListener("click", func);

const username = localStorage.getItem('username');
document.getElementById("sub-text").innerHTML = `Hi ${username}, Click on the quiz to play`;




