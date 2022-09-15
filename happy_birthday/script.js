// makeThingsMoveLink: https://www.youtube.com/watch?v=gX3gSJ43f7I
var character = document.getElementById("character");
var block = document.getElementById("block");
var interval;
var both = 0;

function moveLeft(){
  var left =
      parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  character.style.left = left - 2 + "px";
}

function moveRight(){
  var left =
      parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  character.style.left = left + 2 + "px";
}

document.addEventListener("keydown", event => {
  if(both==0){
    both++;
      if(event.key==="ArrowLeft"){
        interval = setInterval(moveLeft, 1);
      }
       if(event.key==="ArrowRight"){
        interval = setInterval(moveRight, 1);
      }
  }
});
document.addEventListener("keyup", event =>{
  clearInterval(interval);
  both=0;
});

//click show room1
var checkDead = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft>=274 && characterLeft<=278 ){
      console.log("turn on room 1");
      document.getElementById("room1").style.display = "block";
      document.getElementById("animearrow").style.display = "block";
    }else{

    }
}, 10);


//click show room2
var checkDead = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft>=374 && characterLeft<=378 ){
      console.log("turn on room 2");
      document.getElementById("room2").style.display = "block";
      document.getElementById("animearrow").style.display = "block";
    }else{

    }
}, 10);

//Turn on room3
var checkDead = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft>=574 && characterLeft<=578 ){
      console.log("turn on room 3");
      document.getElementById("room3").style.display = "block";
      document.getElementById("animearrow").style.display = "block";
    }else{

    }
}, 10);

//Turn on room4
var checkDead = setInterval(function() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft>=840 && characterLeft<=845 ){
      console.log("turn on room 4");
      document.getElementById("room4").style.display = "block";
    }else{

    }
}, 10);

