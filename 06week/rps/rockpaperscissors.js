var p1;
var p2;
p1 = prompt("Player 1 choice");
p2 = prompt("Player 2 choice");

rps(p1, p2);

function rps(p1, p2){
if ((p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "paper") ) 
{
    // alert("The winner is paper");
    if(p1 === "paper") alert("The winner is Player 1");
    if(p2 === "paper") alert("The winner is Player 2");
}
if ((p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "rock"))
{
    alert("The winner is rock");
}
if ((p1 === "paper" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper"))
{
    alert("The winner is scissors");
}
if (p1===p2)
    alert("It is a tie");
}
