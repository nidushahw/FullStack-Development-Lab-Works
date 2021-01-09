function playGame(player1, player2) {

    var result1 = Math.floor(Math.random() * 6 + 1);
    var result2 = Math.floor(Math.random() * 6 + 1);

    if (result1 === result2) {
        console.log(player1 + " " + result1);
        console.log(player2 + " " + result2);
        console.log("This round is ties");
    }

    else if (result1 < result2) {
        console.log(player1 + " " + result1);
        console.log(player2 + " " + result2);
        console.log("This round " + player2 + " Wins");
    }

    else {
        console.log(player1 + " " + result1);
        console.log(player2 + " " + result2);
        console.log("This round " + player1 + " Wins");

    }
}
var player1 = "Nidusha";
var player2 = "Kelum";
playGame("Nidusha", "Kelum");
