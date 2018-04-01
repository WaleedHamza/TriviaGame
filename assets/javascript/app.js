var wrongAnswers = []
var score = 0;
var timeLimit = 120;
var timeCounter = 0;
var setInt;
//start the Game function
$("#start").click(function () {
    setInt = setInterval(countDown, 1000);
    $("#intro").hide("#intro");
    $("#action").show("#action");
    $("#timer").show("#timer");
    //countdown timer
    var windowTimeout = setTimeout(function () {
        $("#overlay").show("#overlay");
        $("#overLayTitle").text("TIME IS UP")
        var score = 0;
    }, 120000);
});
//stopwatch//
function countDown() {
    timeLimit--;
    $("#timer").text(timeLimit);
    if (timeLimit === 0) {
        console.log("timelimit = 0");
        clearInterval(setInt)
        $("#overlay").show("#overlay");
    }
}
// add on click event to reset the game
$("#restart").click(function () {
    location.reload();
});
function reset() {
    $("#score").append(score)
    $("#overlay").show("#overlay");
    var setInt = setInterval(countDown, 1000);
};
$("#submit").click(function () {
    $("#overLayTitle").text("WELL DONE!")
    clearInterval(setInt);
    reset();
})
// capture input//
var optionsInPutQ1 = $("#btn1, #btn2, #btn3, #btn4").click(function (event) {
    event.preventDefault();
    //setting a var to a true false
    var notCorrect = false
    var missed = $(this).attr("class")
    // console.log(missed) for loop through wrong answers and change var if its not
    // here
    for (var i = 0; i < wrongAnswers.length; i++) {
        //value checker & prevent repeated clicks
        if (missed == wrongAnswers[i]) {
            notCorrect = true
        }
    }
    //score counter//
    var guess = $(this).val();
    if (guess == "true" && !notCorrect) {
        score++
        $("#score").text(score);
        wrongAnswers.push(missed)
    }
});
//when the submit button is clicked display the score div
$("#submit").click(function () {
    $("#score").text(score)
    $("#score").show("#score")
    $("#timer").hide("#timer")
})
//display solution div//
$("#solution").click(function () {
    $("#solutionTable").show("#solutionTable")
});

