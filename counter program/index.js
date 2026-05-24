
const numDisplay = document.getElementById("numDisplay");
let num = 0;

function decrease(){
    num --;
    numDisplay.textContent = num;
    
}
function reset(){
    num = 0;
    numDisplay.textContent = "0";

}
function increase(){
    num ++;
    numDisplay.textContent = num;

}