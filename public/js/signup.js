// const register = (e) => {
    const form = document.getElementById('form')
    const signUp = document.getElementById('save')
    const username = document.signUpForm.username;
    const email = document.signUpForm.email;
    const role = document.signUpForm.role;
    const password = document.signUpForm.password;

    //mthode for getting values in the elemnts
    const getElementValue = (element) => {
        return element.value;
    }

    // on button click
    signUp.addEventListener("sumbit", (e) => {
        e.preventDefault();
    

        if (username.value == "" && password.value == "") {
            e.preventDefault();
            alert("Empty fields not Acceptable as valid input");
            username.style.border = '1px solid red';
             
       
            return false
        }

        let text = /^[A-Za-z]+$/;
       

        if (!username.value.match(text)) {
            alert('Please Enter User Name with atleast three charactors');
            username.style.border = '1px solid red';
              return false
        }

        let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;

        if (!email.value.match(mail)) {
            alert('Please input Email e.g diana-apolat@gmail.com');
            email.stlye.border = '1px solid red';
             return false
        }

        let roles = /^[A-Za-z]+$/;
        if (!role.value.match(roles)) {
            alert('input the word admin');
            role.style.border = '1px solid red';
              return false
        
        }
        let pasword = /^[0-9a-zA-Z]+$/;
        if (!password.value.match(pasword)) {
            alert('wrong password');
            password.style.border = '1px solid red';
             return false
        }

    
       
    })
// }
//  register.addEventListener("click", (e) => {
//     e.preventDefault(); 

//         if (form.signUpForm.value == "") {
//             alert( "Please fill out all fields!");
//           return false;
//         } else {
//             alert("successful submission of form!");
//           return true;
//         }
//       }
// )