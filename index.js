var NoOfDrums=document.querySelectorAll(".drum").length;

//Function to produce sounds on the Web Page
function soundToWeb(character)
{
    switch(character){
    case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "k":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "l":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

    default: console.log(innerText);
        break;
    }
}

//Showing the pressed key
function showPressedKey(press){
    var keyButtonPress= document.querySelector("." + press);
    keyButtonPress.classList.add("pressed");
    setTimeout(function ()
    {    
        keyButtonPress.classList.remove("pressed");
    }, 200);
}


//Detecting Button press
for(var i=0; i<NoOfDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var innerText=this.textContent;
    soundToWeb(innerText);
    showPressedKey(innerText);
});
}
//Detecting Keyboard press
document.addEventListener("keydown" , function(event){
    soundToWeb(event.key);
    showPressedKey(event.key);
})