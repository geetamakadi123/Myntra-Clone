var cartData = JSON.parse(localStorage.getItem("cart")) || [];
// var amount = JSON.parse(localStorage.getItem("total"));
// console.log(amount);

var total = cartData.reduce(function (sum, elem, index, arr){
    return sum + elem.price;
  },0)

  localStorage.setItem("totalamount", JSON.stringify(total));

  var h1 = document.createElement("h1");
  h1.innerText = "Your total amount = " + total + " Rs";
  document.querySelector(".showtotal").append(h1);

//   var length = cartData.length;

    // document.querySelector(".showprice").innerText = `you have ${length} items and total is rs ${total}`;
    let loggedData = JSON.parse(localStorage.getItem("loggedData")) || null;
    if(!loggedData){
      window.location.href = "login.html";
    }else{

  cartData.map(function (elem,index) {
    var card = document.createElement("div");
    card.setAttribute("class","product-card")

    var brand = document.createElement("h3");
    brand.innerText = elem.brand_name;

    var img = document.createElement("img");
    img.src = elem.img;
    img.style.cursor = "pointer";
    // img.onclick = "window.location.href='../html/details.html'";


    var name = document.createElement("p");
    name.textContent = elem.name;
    name.setAttribute("class", "itemname");
    name.style.cursor = "pointer";
    // name.onclick = "redirect()";

    var price = document.createElement("p");
    price.innerText = "Rs." + elem.price;

    var strike = document.createElement("p");
    strike.innerText = "Rs." + elem.strikedoffprice;

    var discount = document.createElement("p");
    discount.innerText =  elem.discount + "OFF";

    var priceflex = document.createElement("div");
    priceflex.setAttribute("class", "priceflex");

    var btn = document.createElement("button");
    btn.innerText = "Delete Item";
    btn.setAttribute("class", "btn");
    btn.addEventListener("click", function(){
      deleteItem(elem)
    });
    
    priceflex.append(price, strike, discount);
    card.append(img, brand, name, priceflex, btn);

    document.querySelector(".addedtocart").append(card);
  });

  function deleteItem(elem,index){
    cartData.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cartData));
    // 1st method to reflect delete on page
    window.location.reload();
    
    // 2nd method
    // var updateData = JSON.parse(localStorage.getItem("bookmarks"));
    // displayData(updateData);
  }



  var pro = document.querySelector("#proceed").addEventListener("click", checkOut)

 function checkOut(){
  window.location.href = "../html/address.html";
 }
}

