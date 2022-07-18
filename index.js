document.querySelector("button").addEventListener("click", function()
{
    var randRoll1= Math.random() * 6 + 1;
    var randRoll2= Math.random() * 6 + 1;

    randRoll1= Math.floor(randRoll1);
    randRoll2= Math.floor(randRoll2);

    document.querySelector(".firstDice").setAttribute("src", "images/Dice-"+randRoll1+"-b.svg");
    document.querySelector(".secondDice").setAttribute("src", "images/Dice-"+randRoll2+"-b.svg");

    document.querySelector(".scoreResults").innerHTML= randRoll1+ " - " + randRoll2;

    var randRollDeg1= Math.floor(Math.random()*100 +1);
    var randRollDeg2= Math.floor(Math.random()*100 +1);

    var firstDice= document.querySelector(".firstDice");
    var secondDice= document.querySelector(".secondDice");

    firstDice.setAttribute("style", "--rollDeg: " +randRollDeg1+ "deg");
    secondDice.setAttribute("style", "--rollDeg2: " +randRollDeg2+ "deg");



    if (firstDice.classList.contains("diceA"))
    {
        firstDice.classList.toggle("diceA");
        secondDice.classList.toggle("diceB");
    }
    else
    {
        firstDice.classList.toggle("diceA");
        secondDice.classList.toggle("diceB");
    }
    firstDice.classList.add("diceA");
    secondDice.classList.add("diceB");



})