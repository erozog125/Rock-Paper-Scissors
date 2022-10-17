// Cuando gane que tome una foto con un Trofe del primer lugar

// Function random number generator
const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// call values from DOM
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const imgSelected = document.getElementById('img-selected');
const cpuSelected = document.getElementById('cpu-selected');
const userPoints = document.getElementById('user-points');
const cpuPoints = document.getElementById('cpu-points');
const btnReload = document.getElementById('btn-reload');
const gameResult = document.getElementById('h3-result');

// Values: rock, paper, scissors
const rock = 1;
const paper = 2;
const scissors = 3;

// Selected Values
let userSelect = 0;
let cpuSelect = 0;

// Points for player
let userPoint = 0;
let cpuPoint = 0;


// Function: User option
btnRock.addEventListener('click', ()=> {
  imgSelected.src = "Images/Rock.jpeg";
  userSelect = 1;
  turnCpu();
  calculatePoints();
  finalScore();   
});

btnPaper.addEventListener('click', ()=>{
  imgSelected.src = "Images/Paper.jpeg";
  userSelect = 2;
  turnCpu();
  calculatePoints(); 
  finalScore();  
}) 

btnScissors.addEventListener('click', ()=>{
  imgSelected.src = "Images/Scissors.jpeg";
  userSelect = 3;
  turnCpu();
  calculatePoints();
  finalScore();   
})

btnReload.addEventListener('click', ()=>{
  userPoint = 0;
  cpuPoint = 0;
  userPoints.textContent = userPoint;
  cpuPoints.textContent = cpuPoint;
  gameResult.textContent = "Game Result";
});

// Function: cpu Option
function turnCpu() {
  let turn = randomNum(1,3);
  if (turn === 1) {
    cpuSelected.src = "Images/Rock.jpeg";
    cpuSelect = 1;
  } else if (turn === 2) {
    cpuSelected.src = "Images/Paper.jpeg";
    cpuSelect = 2;
  } else {
    cpuSelected.src = "Images/Scissors.jpeg";  
    cpuSelect = 3;
  } 
}

// Function: Who is Winner?
function calculatePoints() {
  if (userSelect === cpuSelect) {
    gameResult.textContent = "Players tie!";    
  } else if( (userSelect === 1 && cpuSelect === 3) || (userSelect === 2 && cpuSelect === 1) || (userSelect === 3 && cpuSelect === 2)) {
    gameResult.textContent = "User Winner!";    
    userPoint++;
    userPoints.textContent = userPoint;
  } else {
    gameResult.textContent = "Cpu Winner";    
    cpuPoint++;
    cpuPoints.textContent = cpuPoint;
  } 
}

function finalScore() {
 if (userPoint === 3) {
  Swal.fire('User is the winner!');  
  return;
} else if(cpuPoint === 3) {
   Swal.fire('CPU is the winner!')   
   return;
 }
}