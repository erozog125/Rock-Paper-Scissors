// Cuando gane que tome una foto con un Trofe del primer lugar

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const imgSelected = document.getElementById('img-selected');
const cpuSelected = document.getElementById('cpu-selected');

btnRock.addEventListener('click', ()=> {
  imgSelected.src = "Images/Rock.jpeg";
  setTimeout(() => {
     turnCpu(); 
  }, 3000);    
});
btnPaper.addEventListener('click', ()=>{
  imgSelected.src = "Images/Paper.jpeg";
  setTimeout(() => {
    turnCpu(); 
 }, 3000);
}) 

btnScissors.addEventListener('click', ()=>{
  imgSelected.src = "Images/Scissors.jpeg";
  setTimeout(() => {
    turnCpu(); 
 },3000);
})

function turnCpu() {
  let turn = randomNum(1,3);
  if (turn === 1) {
    cpuSelected.src = "Images/Rock.jpeg"
  } else if (turn === 2) {
    cpuSelected.src = "Images/Paper.jpeg"
  } else cpuSelected.src = "Images/Scissors.jpeg"  
}