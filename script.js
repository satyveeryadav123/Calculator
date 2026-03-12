const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const sound = document.getElementById("clickSound");

buttons.forEach(function(button){
button.addEventListener("click", function(){
    sound.currentTime = 0;
    sound.play();
    const value = button.textContent;

    if (value==="C"){
        display.value ="";
    } 
    else if (value === "DEL"){
        display.value = display.value.slice(0,-1);
    }  
    else if(value==="="){
        try{
            display.value = eval(display.value);
        }
        catch (error) {
            display.value="Error";
        }
    }
    else{
        display.value += value;
    }
});
});