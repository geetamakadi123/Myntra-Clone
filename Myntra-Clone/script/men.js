var bannerIndex = 0;
sliderFn();

function sliderFn() {
  var i;
  var x = document.querySelectorAll(".banners");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  bannerIndex++;
  if (bannerIndex > x.length) {
    bannerIndex = 1;
  }
  x[bannerIndex - 1].style.display = "block";
  setTimeout(sliderFn, 2500); // Change image every 2 seconds
}
