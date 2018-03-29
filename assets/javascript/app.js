var numOfQuestions = 8;
var wrongAnswers = []
var score = 0;

//start the Game function 
$("#start").click(function() {
$("#intro").hide("#intro");
$("#action").show("#action");
//count down timer // 
var windowTimeout = setTimeout(function() {
  $("#overlay").show("#overlay");
   var score = 0;
      }, 120000);
    });

// add on click event to reset the game // 
$("#restart").click(function (){
  location.reload();
});

$("#submit").click(function(){
  $("#score").append(score)
  $("#overlay").show("#overlay");
})


// capture input//
var optionsInPutQ1 = $("#btn1, #btn2, #btn3, #btn4").click(function(event){
  event.preventDefault();
  //setting a var to a true false
  var notCorrect = false
  var missed = $(this).attr("class")
  // console.log(missed)
  //for loop through wrong answers and change var if its not here
  for (var i = 0 ; i < wrongAnswers.length; i++ ){
    //value checker & prevent repeated clicks //
    if (missed ==  wrongAnswers[i] ){
        notCorrect = true
    }
  }
//score counter//
  var guess = $(this).val();
   if (guess == "true" && !notCorrect ) {
     score++
     $("#score").text(score);
     wrongAnswers.push(missed)
   }
});

//when the submit button is clicked display the score div 
$("#submit").click(function(){
  $("#score").text(score)
  $("#score").show ("#score")
 })
  
//display solution div//
$("#solution").click( function(){
  $("#solutionTable").show("#solutionTable")
});