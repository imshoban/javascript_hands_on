route_to_play = () =>{
    window.location.assign("javaquiz.html");
}

route_to_home = () => {
    
    window.location.assign("../home.html");
}

load = () =>{
    console.log(localStorage.getItem("finalScore"));
    document.getElementById("final-score").innerHTML = localStorage.getItem("finalScore");
}
