var panel = $("#quiz-area");
// $("#done").remove();

$(document).on("click", "#start", function(e) {
    game.start();
});

$(document).on("click", "#done", function(e) {
    game.done();
});

var questions = [{
    question: "1 . What was the first full length CGI movie?",
    answers: ["A Bug's life", "Monsters Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
}, {
    question: "2 . Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice"
}, {
    question: "3 . Which NBA team won the most titles in the 90s?",
    answers: ["New York Knicks", "Portland Trailblazzers", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: "Portland Trailblazzers"
}, {
    question: "4 . Which group relased the hit song, 'Smells Like Teen Spriti'?",
    answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
    correctAnswer: "Nirvana"
}, {
    question: "5 . Which popular Disney movie featured the song, 'Circle of Life'?",
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King"
}, {
    question: "6 . Finish this line from the Fresh Prince of Bel-Air theme song: 'I whistled for a cab and when it came near, the license plate said...'",
    answers: ["dice", "Mirror", "Fresh", "Cab"],
    correctAnswer: "Fresh"
}, {
    question: "7 . What was Doug's best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter"
}, {
    question: "8 . What was the name of the principal at Bayside High in Save By the Bell?",
    answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
    correctAnswer: "Mr.Belding"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 28,
    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);

        if (game.counter === 0) {
            console.log('TIME UP');
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);

        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter-number">28</span> Seconds</h2>');
        $("#start").remove();
        $("#done").add();



        for (var i = 0; i < questions.length; i++) {
            panel.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                panel.append('\<input type="radio" id="radio" name="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }
        panel.append("</br>");
        panel.append("</br>");
        panel.append("<button id='done'>Done</button>");
    },

    done: function() {
        $.each($("input[name='question-0']:checked"), function() {

            if ($(this).val() == questions[0].correctAnswer) {

                game.correct++;

            } else {

                game.incorrect++;

            }

        });

        $.each($("input[name='question-1']:checked"), function() {

            if ($(this).val() == questions[1].correctAnswer) {

                game.correct++;

            } else {

                game.incorrect++;

            }

        });

        $.each($("input[name='question-2']:checked"), function() {

            if ($(this).val() == questions[2].correctAnswer) {

                game.correct++;

            } else {

                game.incorrect++;

            }

        });

        $.each($("input[name='question-3']:checked"), function() {

            if ($(this).val() == questions[3].correctAnswer) {

                game.correct++;

            } else {

                game.incorrect++;

            }

        });

        $.each($("input[name='question-4']:checked"), function() {

            if ($(this).val() == questions[4].correctAnswer) {

                game.correct++;

            } else {

                game.incorrect++;

            }

        });

        $.each($("input[name='question-5']:checked"), function() {

            if ($(this).val() == questions[5].correctAnswer) {

                game.correct++;

            } else {

                game.incorrect++;

            }

        });

        $.each($("input[name='question-6']:checked"), function() {

            if ($(this).val() == questions[6].correctAnswer) {

                game.correct++;

            } else {

                game.incorrect++;

            }

        });

        $.each($("input[name='question-7']:checked"), function() {

            if ($(this).val() == questions[7].correctAnswer) {

                game.correct++;

            } else {

                game.incorrect++;

            }

        });

        this.result();


    },
    result: function() {
        clearInterval(timer);

        $("#subwrapper h2").remove();
        panel.html("<h2>All Done!</h2>");
        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");

        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");

        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};