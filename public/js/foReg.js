    const register=document.getElementById('register')   
    const username = document.foRegForm.username;
    const password = document.foRegForm.password;
    const name = document.foRegForm.name;
    const email = document.foRegForm.email;
    const phonenumber = document.foRegForm.phonenumber;
    const role = document.foRegForm.role;
    const gender = document.foRegForm.gender;
    const nin = document.foRegForm.nin;
    const occupation = document.foRegForm.occupation;
    const location = document.foRegForm.location;
    const date = document.foRegForm.date;
    const resident = document.foRegForm.resident;
    const ward = document.foRegForm.ward;


    //mthode for getting values in the elemnts
    // const getElementValue=(element)=>{
    //     return element.value;
    // }

    // on button click
    register.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let text = /^[A-Za-z]+$/;
  
    if (!username.value.match(text)) {
        alert('Please Enter User Name with atleast three charactors');
        username.style.border = '1px solid red';
        return false
    }
    

    let pwd = /^[0-9a-zA-Z]+$/;
    if (!password.value.match(pwd)) {
        alert('Enter password');
        password.style.border = '1px solid red';
        return false
    }
        
    let fulname = /^[A-Za-z]+$/;
    // let wrongName = prompt("Name should be between 5 to 30 Characters");
    
    if (!name.value.match(fulname)) {
        alert('Please Enter Official Name ');
        name.style.border = '1px solid red';
        return false
    }

    let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;

    if (!email.value.match(mail)) {
        alert('Please input Email e.g diana-apolat@gmail.com');
        email.stlye.border = '1px solid red';
        return false
    }
    let number = /^[A-Za-z]+$/;
  
    if (!phonenumber.value.match(number)) {
        alert('Please Enter User phone Number e.g 077-222-1111');
        phonenumber.style.border = '1px solid red';
        return false
    }

    let roles = /^[A-Za-z]+$/;
    if (!role.value.match(roles)) {
        alert('input the word admin');
        role.style.border = '1px solid red';
        return false
        
    }
    
   let sex =(i = 0, i < gender.length, i++);
    if (!gender.value.match(sex)) {
        alert('please select radio');
        gender.style.border = '1px solid red';
        return false
        
    }   
    
    let ninNo = /^[0-9A-Z]+$/;
    if (!nin.value.match(ninNo)) {
        alert('Enter NIN');
        nin.style.border = '1px solid red';
        return false
    }

    let job = /^[A-Za-z]+$/;
  
    if (occupation.value.match(job)) {
        alert('Please Enter the work you do');
        occupation.style.border = '1px solid red';
        return false
    }
       
    let directions = /^[A-Za-z]+$/;
  
    if (!location.value.match(directions)) {
        alert('Please Enter direction to your home');
        location.style.border = '1px solid red';
        return false
    }


    const date = document.foRegForm.date;
    const resident = document.foRegForm.resident;
    const ward = document.foRegForm.ward;
    
    if (username.value == "" && password.value == "") {
        e.preventDefault();
        alert("Empty fields not Acceptable as valid input");
        username.style.border = '1px solid red';
        password.stlye.border = '1px solid red';
       
        return false
    }

})