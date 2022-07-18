var isStatic= false;

document.querySelector(".roll").addEventListener("click", function()
{
    var randRoll1= Math.random() * 6 + 1;
    var randRoll2= Math.random() * 6 + 1;

    randRoll1= Math.floor(randRoll1);
    randRoll2= Math.floor(randRoll2);

    document.querySelector(".firstDice").setAttribute("src", "images/Dice-"+randRoll1+"-b.svg");
    document.querySelector(".secondDice").setAttribute("src", "images/Dice-"+randRoll2+"-b.svg");

    document.querySelector(".scoreResults").innerHTML= randRoll1+ " - " + randRoll2;

    if (!isStatic)
    {
        var randRollDeg1= Math.floor(Math.random()*100 +1);
        var randRollDeg2= Math.floor(Math.random()*100 +1);

        var firstDice= document.querySelector(".firstDice");
        var secondDice= document.querySelector(".secondDice");

        firstDice.setAttribute("style", "--rollDeg: " +randRollDeg1+ "deg");
        secondDice.setAttribute("style", "--rollDeg2: " +randRollDeg2+ "deg");

        firstDice.classList.add("diceA");
        secondDice.classList.add("diceB");
    }

});

var select= document.querySelectorAll(".selectStaticDynamic");
for (var i=0; i<select.length; i++)
{
    select[i].addEventListener("click", function()
    {
        if (this.classList.contains("disabledSelect"))
        {
            if (this.textContent=== "static mode")
            {
                isStatic= true;
                var firstDice= document.querySelector(".firstDice");
                var secondDice= document.querySelector(".secondDice");
                firstDice.setAttribute("style", "--rollDeg: 0");
                secondDice.setAttribute("style", "--rollDeg2: 0");
                firstDice.classList.add("diceA");
                secondDice.classList.add("diceB");
            }
            else
            {
                isStatic= false;
            }

            var currentEnabledSelect= document.querySelector(".enabledSelect");
            currentEnabledSelect.classList.remove("enabledSelect");
            currentEnabledSelect.classList.add("disabledSelect");
            this.classList.add("enabledSelect");
            this.classList.remove("disabledSelect");
        }


    });
}



