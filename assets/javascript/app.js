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
        timer = 20;
        timeUp();
    });

    var allRadios = document.getElementsByName('optradio');
    var booRadio;
    var x = 0;
    for (x = 0; x < allRadios.length; x++) {

        allRadios[x].onclick = function () {
            if (booRadio == this) {
                this.checked = false;
                booRadio = null;
            } else {
                booRadio = this;
            }
        };
    }

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
    $("#reset").click(function () {
        console.log("Clicked!");
        $("#questions").show("slow");
        timer = 20;
        timeUp();
        $("#correct-answer").hide();
        $("#incorrect-answer").hide();
        $("#unanswered").hide();
        $('input[name="optradio"]').prop('checked', false);
    })
});