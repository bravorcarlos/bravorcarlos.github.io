//Cursos y certificados
let google = document.getElementById("google");
let codecademy = document.getElementById("codecademy");
let freecode = document.getElementById("freecode");
let coursera = document.getElementById("coursera");

//Div de cursos
let googleDiv = document.getElementById("googleDiv");
let codecademyDiv = document.getElementById("codecademyDiv");
let freecodeDiv = document.getElementById("freecodeDiv");
let courseraDiv = document.getElementById("courseraDiv");

//Div de contacto
let whatsappDiv = document.getElementById("whatsappDiv");
let gmailDiv = document.getElementById("gmailDiv");

//Contacto
let whatsapp = document.getElementById("whatsapp");
let gmail = document.getElementById("gmail");

//Evento de carga de pagina
window.addEventListener("load", function() {
    google.style.display = "none";
    codecademy.style.display = "none";
    freecode.style.display = "none";
    coursera.style.display = "none";

    whatsapp.style.display = "none";
    gmail.style.display = "none";
});

//Eventos de mostrar y esconder cursos
courseraDiv.addEventListener("click", function() {
  if (coursera.style.display === "none") {
      coursera.style.display = "block";
      courseraDiv.style.textDecoration = "underline";
    } else {
      coursera.style.display = "none";
      courseraDiv.style.textDecoration = "none";

    }
});

googleDiv.addEventListener("click", function() {
    if (google.style.display === "none") {
        google.style.display = "block";
        googleDiv.style.textDecoration = "underline";
      } else {
        google.style.display = "none";
        googleDiv.style.textDecoration = "none";

      }
});

codecademyDiv.addEventListener("click", function() {
    if (codecademy.style.display === "none") {
        codecademy.style.display = "block";
        codecademyDiv.style.textDecoration = "underline";
      } else {
        codecademy.style.display = "none";
        codecademyDiv.style.textDecoration = "none";
      }
});

freecodeDiv.addEventListener("click", function() {
    if (freecode.style.display === "none") {
        freecode.style.display = "block";
        freecodeDiv.style.textDecoration = "underline";
      } else {
        freecode.style.display = "none";
        freecodeDiv.style.textDecoration = "none";
      }
});

//Eventos de mostrar y esconder contacto
whatsappDiv.addEventListener("click", function() {
    if (whatsapp.style.display === "none") {
        whatsapp.style.display = "block";
        whatsappDiv.style.textDecoration = "underline";
      } else {
        whatsapp.style.display = "none";
        whatsappDiv.style.textDecoration = "none";
      }
});

gmailDiv.addEventListener("click", function() {
    if (gmail.style.display === "none") {
        gmail.style.display = "block";
        gmailDiv.style.textDecoration = "underline";
      } else {
        gmail.style.display = "none";
        gmailDiv.style.textDecoration = "none";
      }
});

//Variables y funciones de los botones del deslizador de imagenes
let images = [ "img/1.png", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

let num = 0;

function next() {
    let slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
};

function prev() {
    let slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
};

//Resaltar elementos de la seccion About me

let aboutMe = document.getElementById("about-me");
let aboutText = document.getElementById("about-me-text");
let profilePic = document.getElementById("profile-pic");

function resaltar() {
    aboutText.style.boxShadow ="3px 3px 3px 3px #1b1b1b";
    aboutText.style.textDecoration = "underline";
    profilePic.style.boxShadow ="3px 3px 3px 3px #1b1b1b";
};

function noResaltar() {
    aboutText.style.boxShadow = "0 0 2px 0 #1b1b1b";
    aboutText.style.textDecoration = "none";
    profilePic.style.boxShadow = "0 0 2px 0 #1b1b1b";
};

