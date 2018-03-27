var startGame;

//start the Game function 
$("#start").click(function(startGame) {
$("#intro").hide("#intro");
$("#action").show("#action");
});
//count down timer // 
var windowTimeout = setTimeout(function() {
  $("#overlay").show("#overlay");
      }, 120000);


// add on click event to reset the game // 
$("#restart").click(function (){
  $("#overlay").hide("#overlay");
  $("#action").hide("#action");
  $("#intro").show("#intro");
});

var numOfQuestions = 8;
var score = 0;
var wrongAnswers = []
// capture input//
var optionsInPutQ1 = $("#btn1, #btn2, #btn3, #btn4").click(function(event){
  event.preventDefault();
  //setting a var to a true false
  var notCorrect = false
  var missed = $(this).attr("class")
  console.log(missed)
  //for loop through wrong answers and change var if its int here
  for (var i = 0 ; i < wrongAnswers.length; i++ ){
    //value checker & prevent repeated clicks //
    if (missed ==  wrongAnswers[i] ){
      notCorrect = true
    }
  }
  //if inside for
  var guess = $(this).val();
   if (guess == "true" && !notCorrect ) {
     score++
     $("#score").text(score);
     wrongAnswers.push(missed)
   }
});






$("#score").text(score);
