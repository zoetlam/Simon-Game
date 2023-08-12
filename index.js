let arr = document.querySelectorAll('.btn');
let idArr = ['green', 'red', 'yellow','blue'];

let userClick = [];


//--- create a random 4 values
const randomFour = ()=> Math.floor(Math.random() * 4); //create random from 0 to 3
let randomStorage = [];
let thi = [];

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
  // console.log('de: ' + randomStorage);
}

let play = false;
document.addEventListener('keypress',function(event){
  if (!play){
    playGame();
    play = true;
    $('body').removeClass('game-over');
  }
});

$('.btn').click(function() {
  userClick.push(this.id);
  for (let i = 0; i < userClick.length; i++){
    // console.log('click: ' + userClick);
    
    if (userClick[i] !== randomStorage[i]){
      playSound('wrong');
      document.querySelector('#level-title').innerHTML = 'Game Over <br> Press any key to play again';
      $('body').addClass('game-over');
      startOver();
    } else{
      buttonAnimation(this.id);
      if(userClick.length == randomStorage.length && userClick[userClick.length - 1] == randomStorage[randomStorage.length - 1]){
        playGame();
      } else{
        level = level;
      }
    }
  }
});

let level = 0;
function playGame(){
  level++;
  setTimeout(function(){
    addNext();
  },1000);
  document.querySelector('#level-title').innerHTML = 'Level ' + level;
  userClick = [];
}

function startOver() {
  level = 0
  randomStorage = [];
  userClick = [];
  play = false;
}





