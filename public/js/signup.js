const register = (e) => {
    const username = document.signUpForm.username;
    const email = document.signUpForm.email;
    const role = document.signUpForm.role;
    const password = document.signUpForm.password;
    
    username.focus();

    
    let text = /^[A-Za-z]+$/;
    if (!username.value.match(text)) {
        alert('Use only letters');
        username.style.border = '1px solid red';
        
    }

    let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
    if (!email.value.match(mail)) {
        alert('Please input correct Email');
        email.stlye.boarder = '1px solid red';
    }

    let roles = /^[A-Za-z]+$/;
    if (!role.value.match(roles)) {
        alert('input the word admin');
        rolee.style.border = '1px solid red';
        
    }
    let pasword = /^[0-9a-zA-Z]+$/;
    if (!password.value.match(pasword)) {
        alert('wrong password');
        username.style.border = '1px solid red';
    }
    if (username.value == "" && password.value == "") {
        e.preventDefault();
        alert("Empty fields not Acceptable as valid input");
        username.style.border = '1px solid red';
        password.stlye.border = '1px solid red';
       

        return false
    }
   
}