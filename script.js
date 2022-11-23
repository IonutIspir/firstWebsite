const menuButton = document.querySelector(".navbar-icon");
const authorContainer = document.querySelector(".autor"); 
const navbar = document.querySelector(".navbar"); 
const buttonCards = document.querySelectorAll(".containerbutton"); 
const buttonTestimonials = document.querySelectorAll(".testimonials-section button");


// Menu dropdown list
const menuManipulation = function () {
  if (navbar.style.display === "none" || navbar.style.display === "") {   
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
};


// Copyright/author in footer
const attachAuthor = function () {
  const today = new Date();
  const anulCurent = today.getFullYear();
  authorContainer.innerHTML = "Creat de <b>Ispir Ionut</b> " + anulCurent;
};


// More button -> descriere 
const showDescription = function (event) {
  const cardParent = event.target.parentElement;
  const description = cardParent.querySelector(".descriere");
  if (
    description.style.display === "none" ||
    description.style.display === ""
  ) {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
};

// Testimonial section 
const afiseazaTestimonial = function (event) {
  const actiune = event.target.classList[0]; 
  const testimonialActiv = document.querySelector(".activ");

  if (actiune === "urmatorul") {
    const urmatorulTestimonial = testimonialActiv.nextElementSibling;
    
    if (urmatorulTestimonial.classList.contains("testimonial")) {
      urmatorulTestimonial.classList.add("activ");
      testimonialActiv.classList.remove("activ");
    }
  } else {
    const testimonialulDinSpate = testimonialActiv.previousElementSibling;
    
    if (testimonialulDinSpate.classList.contains("testimonial")) {
      testimonialulDinSpate.classList.add("activ");
      testimonialActiv.classList.remove("activ");
    }
  }
};


window.addEventListener("load", function () {
  attachAuthor();
  inserareImagini();
});
menuButton.addEventListener("click", menuManipulation);
buttonCards.forEach(function (buton, index, sirComplet) {
  // Ciclare pentru a avea acces la fiecare element (buton)
  buton.addEventListener("click", showDescription);
});

buttonTestimonials.forEach(function (buton, index, sirComplet) {
  buton.addEventListener("click", afiseazaTestimonial);
});