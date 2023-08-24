let idArr = ['green', 'red', 'yellow','blue'];

let userClick = [];

//------Dialog box-----Game Rule--------

document.getElementById("popup").style.display = "block";


function hidePopup() {
  document.getElementById("popup").style.display = "none";
}


//--- create a random 4 values
const randomFour = ()=> Math.floor(Math.random() * 4); //create random from 0 to 3
let randomStorage = [];

// play sound and animation base on button
function playSound(keyNote){
  let sound = new Audio('sounds/' + keyNote + '.mp3');
  sound.currentTime = 0;
  sound.play();
}
function buttonAnimation(value){
  let a = document.querySelector('#'+ value);
  a.classList.add("pressed");
  setTimeout(function(){
      a.classList.remove("pressed")
  },100);
  playSound(value);
}

//play next button and store it in an arr
function addNext(){
  let num = randomFour();
  randomStorage.push(idArr[num]);
  let a = randomStorage[randomStorage.length - 1];
  buttonAnimation(a);
  console.log('de: ' + randomStorage);
}

let play = false;
document.addEventListener('keypress',function(event){
  if (!play){
    playGame();
    play = true;
  }
});
document.querySelector('#start').addEventListener('click', function(){
    playGame();
})

$('.btn').click(function() {
  userClick.push(this.id);
  buttonAnimation(this.id);
  console.log('click: ' + userClick);

  if(userClick[userClick.length - 1] === randomStorage[userClick.length - 1]){
    if(userClick.length === randomStorage.length && userClick[userClick.length - 1] == randomStorage[randomStorage.length - 1]){
    setTimeout(function(){
      playGame();
    },1000);
        
    }
  } else{
      gameOver();
      startOver();
  }
});

let level = 0;
function playGame(){
  userClick = [];
  level++;
  if (level == 1){
    $('body').removeClass('game-over');
    $('#start').addClass('invisible');
  }
  addNext();
  document.querySelector('#level-title').innerHTML = 'Level ' + level;
}

function startOver() {
  level = 0;
  randomStorage = [];
  play = false;
}
function gameOver(){
  playSound('wrong');
  document.querySelector('#level-title').innerHTML = 'Game Over <br> Press any key to play again';
  $('body').addClass('game-over');
  $('#start').removeClass('invisible');
}





