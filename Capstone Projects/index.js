// This will change the images every 4 seconds

let slideShow = 0;
myFunction();

function myFunction() {
  let i;
  let slides = document.getElementsByClassName("myFunction");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
}
  slideShow++;
  if (slideShow > slides.length) {slideShow = 1}    
  slides[slideShow-1].style.display = "block";  

  setTimeout(myFunction, 4000); 
};
