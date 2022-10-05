const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const imgSelected = document.getElementById('img-selected');

btnRock.addEventListener('click', ()=> {
  imgSelected.src = "Images/Rock.jpeg";
  imgSelected.classList.add("img-selected");
});
btnPaper.addEventListener('click', ()=> imgSelected.src = "Images/Paper.jpeg");
btnScissors.addEventListener('click', ()=> imgSelected.src = "Images/Scissors.jpeg");