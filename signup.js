signup = () =>{
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm-password").value;
    let error = document.getElementById("error");
   

    console.log(username.match(/^[A-Za-z0-9]+$/))
    console.log(password.length>8 && password.length < 16);
    if(username == ''){
        error.innerText = "Enter username";
    }
    else if(!username.match(/^[A-Za-z0-9]+$/)){
        error.innerHTML = "Username should contain number and alphabets"
    }
    else if(email == ''){
        error.innerText = "Enter email";
    }
    else if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
        error.innerText = "Enter valid email"
    }
    else if(password == ''){
        error.innerText = "Enter password";
    }
    else if(!(password.length >8 && password.length < 16)){
        error.innerText = "Password should be greater than 8 and less than 16 characters";
    }
    else if(confirm_password == ''){
        error.innerText = "Enter confirm password";
    }
    else if(confirm_password != password){
        error.innerText = "Confirm password should same as password"
    }
    else{
        localStorage.setItem('username',username);
        setTimeout(() => {
            window.location.assign("home.html");
        }, 1000);
    }

};