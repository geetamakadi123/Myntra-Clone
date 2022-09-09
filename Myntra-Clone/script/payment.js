var amount = JSON.parse(localStorage.getItem("totalamount"));
console.log(amount)

document.querySelector("h2").innerText = `Total Amount is Rs ${amount}`;

document.querySelector("#form").addEventListener("submit", formSubmit);

function formSubmit(){
    event.preventDefault();
    
    var userName = document.querySelector("#cardName").value;
    var userNum = document.querySelector("#cardNumber").value;
    var date = document.querySelector("#date").value;
    var cvv = document.querySelector("#cvv").value;
    // console.log(date,typeof date)
    var c =0

    if(userNum == 1234567890123456 && cvv == "123"){
        c++
    }else{
        alert("Enter valid Card Number and CVV")
    
        document.querySelector("#cardName").value = "" ;
        document.querySelector("#cardNumber").value = "" ;
        document.querySelector("#date").value = "" ;
        document.querySelector("#cvv").value = "" ;
        return;
    }



    

    if(c!=0 && userName != "" && date != ""){
        alert("Enter OTP")
        var div = document.createElement("div")
        div.setAttribute("id","otpdiv");
        var form = document.createElement("form");
        form.setAttribute("id","otp")
        
        var input = document.createElement("input");
        input.setAttribute("type","number");
        input.setAttribute("placeholder","Enter OTP")
        input.setAttribute("id","otpForm")
        
        var button = document.createElement("input");
        button.setAttribute("value","Enter!")
        button.setAttribute("type","submit");
        
        div.append(input,button)
        form.append(div)
        document.querySelector("#form").append(form)
        
        document.querySelector("#otp").addEventListener("submit",otpCall);
        
    }else{
        alert("Enter Name and Date!")
    }

    function otpCall(){
        event.preventDefault()
        var otp = document.querySelector("#otpForm").value
        if(otp == "1234"){
            alert("Payment Sucessful!")
            window.location.href="../index.html"
        }
    }
  
}