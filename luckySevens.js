function rollDie(minimum, maximum) {
    return Math.ceil(Math.random() * (1 + maximum - minimum));
}

function playGame() {

    var startingBet = document.forms["gameForm"]["startingBetInput"].value;
    var gameMoney = 0;
    var totalRolls = 0;
    var mostWon = 0;
    var mostWonRollCount = 0;
    var die1 = 0;
    var die2 = 0;
    var rollTotal = 0;
    var moneyList = new Array();

    if (isNaN(startingBet) || startingBet < 1) {
        alert("The starting bet must be $1 or greater.");
        document.forms["gameForm"]["startingBet"].focus();
        return false;
    } else {
        gameMoney = Number(startingBet);
        mostWon = gameMoney;
    }

    while (gameMoney >= 1) {
        //play game
        die1 = rollDie(1,6);
        die2 = rollDie(1,6);
        rollTotal = die1 + die2;
        totalRolls += 1;

        if (rollTotal == 7) {
            gameMoney += 4;
        } else {
            gameMoney -= 1;
        }

        moneyList.push(gameMoney);

        if (gameMoney > mostWon) {
            mostWon = gameMoney;
        }
    }

    mostWonRollCount = 1 + moneyList.indexOf(mostWon);

    document.getElementById("startingBet").innerText = startingBet;
    document.getElementById("totalRolls").innerText = totalRolls;
    document.getElementById("mostWon").innerText = mostWon;
    document.getElementById("mostWonRollCount").innerText = mostWonRollCount;

    document.getElementById("submitButton").innerText = "Play Again";

    document.getElementById("results").style.display = "block";

    return false;
}