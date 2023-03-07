//cacher le mdp // 

let e=true;
function changer(){
  if(e){
    document.getElementById("pass").setAttribute("type","text");
    document.getElementById("eye").src="/home/fanny/Documents/GitHub/juba-web/assets/img/iconemdp_ouvert.png"; 
    e=false;
  }
  else{
      document.getElementById("pass").setAttribute("type","password");
      document.getElementById("eye").src="Images/iconemdp.png"; 
      e=true;
  }
}


//  TODO login form alert = a debuguer // 

let loginForm=document.getElementById("loginForm");
loginForm.addEventListener("play",(e) => {e.preventDefault();

  let username = document.getElementById("login");
  let password = document.getElementById("pass");

  if (username.value == "" || password.value == "") {
    alert("Please enter your email adress + your password to enter the JUBA world")
  } else {
    console.log(
      'this form has a username of ${username.value} and password of ${password.value}'
      );

      username.value= "";
      password.value= "";
  }

})

//page de chargement

var myVar;

function loadpage() {
  myVar = setTimeout(showPage,2000);
}

function showPage() {
  document.getElementById ("loader").style.display="none";
  document.getElementById ("myDiv").style.display="block";
}

