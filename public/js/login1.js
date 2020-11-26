// const register = (e) => {
    const logIn= document.getElementById('login')
    const username = document.name.username;
    const password = document.name.password;

    //mthode for getting values in the elemnts
    // const getElementValue = (element) => {
    //     return element.value;
    // }

    // on button click
    logIn.addEventListener("submit", (e) => {
        e.preventDefault();
    
        let text = /^[A-Za-z]+$/;
        // let wrongName = prompt("Name should be between 5 to 30 Characters");

        if (!username.value.match(text)) {
            alert('Please Enter User Name with atleast three charactors');
            username.style.border = '1px solid red';
              return false
        }

        let pasword = /^[0-9a-zA-Z]+$/;
        if (!password.value.match(pasword)) {
            alert('Enter correct password');
            password.style.border = '1px solid red';
              return false
        }
        if (username.value == "" && password.value == "") {
            e.preventDefault();
            alert("Empty fields not Acceptable as valid input");
            username.style.border = '1px solid red';
            password.stlye.border = '1px solid red';
       
            return false
        }

    })
// }