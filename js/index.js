for (var i=0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick(){
    var strButtonClicked= this.innerHTML;
    makeSound(strButtonClicked);
    animateButton(strButtonClicked);
}

document.addEventListener("keydown", function(e){
    handleKey(e);
});
function handleKey(eventMine){
    var myKey=eventMine.key;
    makeSound(myKey);
    animateButton(myKey);
}

function makeSound(strChar){
    switch (strChar){
        case "w":var audioMine=new Audio("sounds/crash.mp3");
            break;
        case "a":var audioMine=new Audio("sounds/kick-bass.mp3");
            break;
        case "s":var audioMine=new Audio("sounds/snare.mp3");
            break;
        case "d":var audioMine=new Audio("sounds/tom-1.mp3");
            break;
        case "j":var audioMine=new Audio("sounds/tom-2.mp3");
            break;
        case "k":var audioMine=new Audio("sounds/tom-3.mp3");
            break;
        case "l":var audioMine=new Audio("sounds/tom-4.mp3");
            break;
    }    
    audioMine.play();
}

function animateButton(keySelected){
    var buttonSelected=document.querySelector("."+keySelected);
    buttonSelected.classList.add("pressed");
    setTimeout(function(){
        buttonSelected.classList.remove("pressed");
    },100);
}


