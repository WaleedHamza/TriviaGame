var startGame;

//start the Game function 
$("#start").click(function(startGame) {
$("#intro").hide("#intro");
$("#action").show("#action");

//count down timer // 
var windowTimeout = setTimeout(function() {
  $("#overlay").show("#overlay");
      }, 120000);
});

// // add on click event to reset the game // 
// $("#restart").click(function (){
//   $("#overlay").hide("#overlay");
//   $("#action").hide("#action");
//   $("#intro").show("#intro");
// });

var numOfQuestions = 8;
var score = 0;

// capture input//
var q1 = $(".q1").click(function(){
        alert($(this).val());
})

var q2 = $(".q2").click(function(){
        alert($(this).val());
})

var q3 = $(".q3").click(function(){
        alert($(this).val());
})

var q4 = $(".q4").click(function(){
  alert($(this).val());
})

var q5 = $(".q5").click(function(){
  alert($(this).val());
})

var q6 = $(".q6").click(function(){
  alert($(this).val());
})

var q7 = $(".q7").click(function(){
  alert($(this).val());
})

var q8 = $(".q8").click(function(){
  alert($(this).val());
})

