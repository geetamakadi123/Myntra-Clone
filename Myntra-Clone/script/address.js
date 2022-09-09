document.querySelector("form").addEventListener("submit", submitFun)

function submitFun(){
    event.preventDefault();
    alert("Address Added !");
    window.location.href = "../html/payment.html"

}