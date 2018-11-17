$(document).ready(function () {
//Create Start Button to start game
    //needs to be hidden?
$("#game").hide();
$("#start").click(function(){
    $("#game").show();
    $("#start").hide();
    timer();
});
//Create 1 min Timer
//"clockRunning" = true/false
var timerNumber = 60
var intervalId;
function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {

    //  Decrease number by one.
    timerNumber--;

    //  Show the number in the #show-number tag.
    $("#time-left").html("<h2>" + timerNumber + "</h2>");


    //  Once number hits zero...
    if (timerNumber === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

//Question 1
//Answers: 4 buttons for multichoice
//one answer per question
//store answer

//Question 2
//Answers: 4 buttons for multichoice
//one answer per question
//store answer

//Question 3
//Answers: 4 buttons for multichoice
//one answer per question
//store answer

//Question 4
//Answers: 4 buttons for multichoice
//one answer per question
//store answer

//when Timer reaches 0 or click "Done" button
//return answers
//calculate "Correct Answers: "
//calculate "Incorrect Answers: "
//calculate "Unanswered: "

//display "Game Over"
//display "Correct Answers: "
//display "Incorrect Answers: "
//display "Unanswered: "

var correct = 0;
var incorrect = 0;
var unanswered = 0;




$("#submit").on("click", function(event){
    event.preventDefault();
    // console.log($("input[name='bountyHunter']:checked").val());
    bh = ($("input[name='bountyHunter']:checked").val());
    if(bh === undefined) {
        unanswered++;
        console.log(unanswered);
    } else {
        if (bh === "Boba Fett"){
            console.log(true);
            correct++;
            console.log(correct);
        } else {
            console.log(false);
            incorrect++;
            console.log(incorrect);
        }
    }
});

$("#submit").on("click", function(event){
    event.preventDefault();
    // console.log($("input[name='jedi']:checked").val());
    jedi = ($("input[name='jedi']:checked").val());
    if(bh === undefined) {
        unanswered++;
        console.log(unanswered);
    } else {
        if (jedi === "Obi-Wan Kenobi"){
            console.log(true);
            correct++;
            console.log(correct);
        } else {
            console.log(false);
            incorrect++;
            console.log(incorrect);
        }
    }
});

$("#submit").on("click", function(event){
    event.preventDefault();
    // console.log($("input[name='pilot']:checked").val());
    pilot = ($("input[name='pilot']:checked").val());
    if (pilot === "Wedge Antilles"){
        console.log(true);
    } else {
        console.log(false);
    }
});

$("#submit").on("click", function(event){
    event.preventDefault();
    // console.log($("input[name='lightsaber']:checked").val());
    ls = ($("input[name='lightsaber']:checked").val());
    if (ls === "Purple"){
        console.log(true);
    } else {
        console.log(false);
    }
});





























});