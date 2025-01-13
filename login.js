login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let error = document.getElementById("error") ;
    if(username == ""){
        error.innerText = "Enter Username";
    }
    else if(password == ""){
        error.innerText = "Enter Password";
    }
    else if(username == "shoban" && password == "shoban2023"){
        localStorage.setItem('username',username);
        window.setTimeout(() => {
            window.location.assign("home.html")},1000);
    }
    else{
        console.log("in");
        error.innerText = "Invalid Username or Password";
    }
};



