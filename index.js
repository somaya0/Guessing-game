var numOfWon = 0;
var numOfLost=0;

for(var i=0;i<5;i++)
{
    var guessNumber=parseInt(prompt("Enter a number from1 to 5: "));
    var randomNumber=Math.random()*5;
    randomNumber=Math.floor(randomNumber)+1;
    if(guessNumber==randomNumber)
    {
        console.log("You won");
        numOfWon++;
    }
    else{
        console.log("You lost and the random number was"+ randomNumber );
        numOfLost++
    }
}

document.write("Number of won : "+ numOfWon + "<br/>");
document.write("Number of lost : "+ numOfLost);

