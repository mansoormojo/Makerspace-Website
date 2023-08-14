let auto_slideIndex = 0;
auto_showSlides();

function auto_showSlides() {
  let i;
  let auto_slides = document.getElementsByClassName("auto-mySlides");
  for (i = 0; i < auto_slides.length; i++) {
    auto_slides[i].style.display = "none";
  }
  auto_slideIndex++;
  if (auto_slideIndex > auto_slides.length) {auto_slideIndex = 1}
  auto_slides[auto_slideIndex-1].style.display = "block";
  setTimeout(auto_showSlides, 4000); // Change image every 2 seconds
} 