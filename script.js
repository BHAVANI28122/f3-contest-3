let username = document.getElementById("username");
let email = document.getElementById("useremail");
let password = document.getElementById("userpassword");
let confirmedPassword = document.getElementById("comfirmPassword");

let Uname ="";
let Uemail ="";
let Upassword="";

let user = {};



storedata();


document.querySelector(".signup").addEventListener("click",(e)=>{

    e.preventDefault();
    validation();
})


function validation()

{



    let error =  document.querySelector(".error");
    if(username.value == "" || email.value =="" || password.value == "" || confirmedPassword.value ==""){
       error.innerHTML= "Error : All the fields are mandatory";
       error.style.color =
       "red";
    }
    else if(password.value != confirmedPassword.value){

        error.innerHTML= "Error : Please confirm the correct password";
        error.style.color =
        "red";
    }
      
    
    else{

        error.innerHTML= "Successfully Signed Up!";
        error.style.color="green";

         Uname = username.value;
        Uemail = email.value;
        Upassword = password.value;
        

        localStorage.setItem("userName",Uname);
        localStorage.setItem("userEmail",Uemail);
        localStorage.setItem("userPassword",Upassword);
        setTimeout(getdetails,3000);
        setTimeout(reset,8000);
    }

}



function getdetails(){


    let Name = localStorage.getItem("userName");
    let Email = localStorage.getItem("userEmail");
    let Password = localStorage.getItem("userPassword");

    if(localStorage.getItem("userName")&& localStorage.getItem("userEmail") && localStorage.getItem("userPassword")){

        document.querySelector(".login-form").style.display ="none";
        let result =  document.querySelector(".user-info");
        result.style.display="block";
        
        //   let details = document.createElement("div");
        //   details.setAttribute("class","info");
          result.innerHTML=` <h1>Profile</h1>
          <p>Full Name: ${Name}</p>
          <p>Email : ${Email}</p>
          <p>Password : ${Password}</p>
          <button class="btn logout" onclick="deleteInfo()">Logout</button>`
    ;
    }
   

}


console.log(Uname);

function reset(){

        username.value="";
        email.value ="";
        password.value ="";
        confirmedPassword.value ="";
}

function deleteInfo(){

    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    document.querySelector(".login-form").style.display ="block";
    document.querySelector(".user-info").style.display ="none";
    document.querySelector(".error").innerHTML="";
}

function storedata(){


    getdetails();

    
    }
    

    console.log(localStorage.getItem("user"));

    