document.querySelector("form").addEventListener("submit", loginFun);


  function loginFun() {
    event.preventDefault();

    var regUserCred = JSON.parse(localStorage.getItem("userCred")) || [];
  
    if(!(Boolean(regUserCred))){
      alert("Login First")
      return;
  }

    let num = document.getElementById("num").value;
    let pass = document.getElementById("pass").value;

  var c = 0 ;

  regUserCred.map(function (ele){
    if(ele.num == num && ele.pass == pass){
      let final = {num, pass};
      localStorage.setItem("loggedData", JSON.stringify(final));
      alert("login success");
      window.location.href = "../index.html";
      c++;
      return;
    }
  })

    if(c==0){
        alert("User not Exists");
        // window.location.href = "../html/signup.html"
    }

}

document.querySelector("#newacc").addEventListener("click", newFun);

function newFun (){
    event.preventDefault();
    window.location.href = "../html/signup.html";
}