console.log("Hello world");

var greenButton = document.getElementById("green");

console.log(greenButton);

greenButton.addEventListener('click', callAlert);
greenButton.addEventListener('mouseout'orange);
function callAlert() {
    alert("You called");
    greenButton.innerHTML = "I got clicked!";
}
