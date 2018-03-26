var startGame;

//start the Game function 
$("#start").click(function(startGame) {
$("#intro").hide("#intro");
$("#action").show("#action");

//count down timer // 
var windowTimeout = setTimeout(function() {
  $("#overlay").show("#overlay");
      }, 60000);
});

// add on click event to reset the game // 
$("#overlay").click(function (){
  $("#into").show$("#into");
});

var currentQuestion;

//random question generator// 
function getRandomQuestion (){
  var random = Math.floor(Math.random()* questions.length);
  return questions[random];

} 

//Get answers from the the question variable questions.answer//
function getAnswers(questions) {
  var answers = [];
  answers.push(questions.answer);
}
