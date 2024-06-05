function toggleText() {
    const hiddenText = document.querySelector('.texto-oculto');
    hiddenText.classList.toggle('show');
}
function toggleText2(){
    const hiddenText2 = document.querySelector('.texto-oculto2');
    hiddenText2.classList.toggle('show');
}
function toggleText3(){
    const hiddenText3 = document.querySelector('.texto-oculto3');
    hiddenText3.classList.toggle('show');
}
function toggleText4(){
    const hiddenText4 = document.querySelector('.texto-oculto4');
    hiddenText4.classList.toggle('show');
}
function toggleText5(){
    const hiddenText5 = document.querySelector('.texto-oculto5');
    hiddenText5.classList.toggle('show');
}
function toggleTexto() {
    const hiddenTexto = document.querySelector('.text-oculto');
    hiddenTexto.classList.toggle('show');
}
function toggleTexto2() {
    const hiddenTexto2 = document.querySelector('.text-oculto2');
    hiddenTexto2.classList.toggle('show');
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}