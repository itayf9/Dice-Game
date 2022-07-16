document.querySelector("button").addEventListener("click", function()
{
    var randRoll1= Math.random() * 6 + 1;
    var randRoll2= Math.random() * 6 + 1;

    randRoll1= Math.floor(randRoll1);
    randRoll2= Math.floor(randRoll2);

    document.querySelector(".firstDice").setAttribute("src", "images/Dice-"+randRoll1+"-b.svg");
    document.querySelector(".secondDice").setAttribute("src", "images/Dice-"+randRoll2+"-b.svg");
})