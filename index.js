
//Detecting KeyPress from BUTTON on Screen

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}

function handleClick() {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: 
            console.log(buttonInnerHTML);
            break;
    }

}

//Detecting KeyPress from KEYBOARD

document.addEventListener("keydown", function(event){            //Using ANONYMOUS Function instead of function Name (Like USED at handleClick)
                                            //event is object passing in the function to get the value of the Pressed KEY
    var pressedKey = event.code;

    switch (pressedKey) {
        case "KeyW":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "KeyA":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "KeyS":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "KeyD":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        case "KeyJ":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
        case "KeyK":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "KeyL":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: 
            console.log(pressedKey);
            break;
    }

});