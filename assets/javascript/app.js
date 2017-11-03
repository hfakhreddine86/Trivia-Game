//GLOBAL Variables
var timer = 20;
var intervalId;
var answers = false;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//Functions
//On Load function
$(document).ready(function () {
    $("#questions").hide();

    $("#start").click(function () {
        $("#questions").show("slow");

        timeUp();
    });

    //decrement function
    function decrement() {
        timer--;

        //  Show the number in the #show-number tag.
        $("#timer").html("<h2>Time Remaining: " + timer + " Seconds</h2>");


        //  Once number hits zero...
        if (timer === 0) {

            //  ...run the stop function.
            stop();
        }
    }
    //timer function
    function timeUp() {
        if (intervalId) {

            return;
        }
        intervalId = setInterval(decrement, 1000);
    }

    //stop function
    function stop() {
        $("#questions").hide();
        $("#timer").text("Time is up!")
        clearInterval(intervalId);
        intervalId = null;

        check();
    }
    //check answers function
    function check() {

        var selValue = $("input:checked");
        console.log(selValue);
        for (var i = 0; i < selValue.length; i++) {
            var Answer = selValue.eq(i).val();
            console.log(selValue);
            if (Answer === "correct") {
                correct++;
                console.log(correct);
                $("#correct-answer").html("Correct Answers: " + correct);

            } else if (Answer === "incorrect") {
                incorrect++;
                console.log(incorrect);
                $("#incorrect-answer").html("Incorrect Answers: " + incorrect);
            }

            unanswered = 5 - selValue.length;
            console.log(unanswered);
            $("#unanswered").html("Unanswered Questions: " + unanswered);

        }
    }
    //reset function
    // function reset() {
        $("#reset").click(function () {
            $("#questions").show("slow");
    
            timeUp();
        })
    // }
});