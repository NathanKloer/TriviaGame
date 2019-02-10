$(document).ready(function () {
    //game objects with answers
    var game = {
        questionarr: [
            //question0 
            {
                question: "In Le Samourai(1967), Jef Costello is of what profession? ",
                correctAnswer: 2,
                qimage: "assets/images/LeSamourai.jpg",
                nReview: "This film is quintessential French Film Noir. A classic and a favorite of mine. It has a slowish pace, but the sheer coolness of the characters and tense interactions make it an amazing movie.",
                answerarr: [
                    "Le Samourai",
                    "Taxi Driver",
                    "Assassin",
                    "Police Detective",]
            },
            //question1
            {
                question: "In Snatch(2000), Mikey O'Neil(Brad Pitt) is known by what boxing nickname?",
                correctAnswer: 0,
                qimage: "assets/images/Snatch.jpg",
                nReview: "When I am asked what my favorite movie is, Snatch is always my go to. The film has an amazing ensemble cast with wonderfully unexpected but coherent meeting points.",
                answerarr: [
                    "Mikey the One-Punch Machinegun",
                    "Mikey Deadeye",
                    "Fast-Talkin' Mikey",
                    "Mikey of the North Star",]
            },
            //question2
            {
                question: "In Moonrise Kingdom(2012), Mr & Mrs. Bishop (Bill Murray/Frances McDormand) communicate with eachother, primarily, using what?",
                correctAnswer: 1,
                qimage: "assets/images/moonrise.jpg",
                nReview: "Wes Anderson is one of my favorite directors and picking a favorite of his filmography is tough. This is my girlfriend's favorite movie of all time and I agree it is one of Anderson's best. Moonrise Kingdom is a great story that revolves around young love, boy scouts, and rich snobby familes. Very relatable. Also Bill Murray!",
                answerarr: [
                    "Dirty Looks",
                    "Megaphones",
                    "Mail",
                    "Sign Language",]
            },
            //question3
            {
                question: "In Double Indemnity(1944), Walter Neff(Fred MacMurray) speaks into a reacording device, the first example of this narrative tool being used in film",
                correctAnswer: 1,
                qimage: "assets/images/double.png",
                nReview: "Film Noir is my favorite film genre. Double Indemnity helpped create the film style with it's use of self-narration, high contrasting shadows, and a femme-fatele. At the time, these now common tropes were not known or even identified. It wouldnt be until years later, after WWII, that these style choices would be recognized as its own genre (Film Noir) that persist until this day.",
                answerarr: [
                    "Use of First Person Perspective",
                    "Self-Narration to describe events",
                    "Leaving a Suicide-Note",
                    "A villian being undone by a long victory speach",]
            },
            //question4
            {
                question: "In Rear Window(1954), how did 'Jeff' Jefferies(Jimmy Stewart) break his leg?",
                correctAnswer: 1,
                qimage: "assets/images/rear.jpg",
                nReview: "Hitchcock is amazing and like Wes Anderson, it is hard for me to pick a favorite. Rear Window is great suspense and Jimmy Stewart is amazing.",
                answerarr: [
                    "Safari in Africa",
                    "Action Shot at the Races",
                    "Falling out of a Boat",
                    "Getting in a Fight",]
            },
            //question5
            {
                question: "In Memento(2000), Leonard(Guy Pearce) is looking for a man named _______.",
                correctAnswer: 2,
                qimage: "assets/images/memento.jpg",
                nReview: "Memento. Not going to write much here because spoilers. But also an amazing movie (that takes a lot of influence from Film Noir I might add).",
                answerarr: [
                    "Terry M.",
                    "Nick T.",
                    "John G.",
                    "Harry H.",]
            },
            //question6
            {
                question: "In Dead Leaves(2004), Retro(Kappel Yamaguchi) has a _________ instead of a head.",
                correctAnswer: 2,
                qimage: "assets/images/deadleaves.png",
                nReview: "Amazing anime movie. Action. Violence. Sex. Rebeling against Autority. Also directed by the art director for Gurren Lagan and Kill La Kill. Do I need to say more?",
                answerarr: [
                    "Camera",
                    "Projector",
                    "TV",
                    "VHS Tape",]
            },
            //question7
            {
                question: "In Space Jam(1996), who convinces Micheal Jordan(Micheal Jordan) that the physics in Looneytoon land are different?",
                correctAnswer: 3,
                qimage: "assets/images/daffy.png",
                nReview: "Yeah this movie was my youth and I love bugs bunny growing up. Pretty much here because the movie holds up and nolstalga.",
                answerarr: [
                    "Porky Pig",
                    "Bugs Bunny",
                    "Taz",
                    "Daffy Duck",]
            },
            //question8
            {
                question: "In Howl's Moving Castle(2004), Howl transforms into what creature?",
                correctAnswer: 0,
                qimage: "assets/images/howls.jpg",
                nReview: "Like Wes Anderson and Hitchcock, Miyazaki has a filmography hard to choose from. Howl's Moving Castle is a story of self discovery that leads to love. How it should be Disney. Not the other way around.",
                answerarr: [
                    "A raven",
                    "A tuxedo cat",
                    "A Chau Dog",
                    "A dragon",]
            },
            //question9
            {
                question: "In Crank(2006), Chev Chellios goes on his spree of mayham because of what kind of drug?",
                correctAnswer: 1,
                qimage: "assets/images/chev.jpg",
                nReview: "This is my favorite action movie. Jason Stathom is great in this role and the movie is so far up its own ass, you cant help but have fun.",
                answerarr: [
                    "Cocaine",
                    "Synthetic Chinese Shit",
                    "Voodoo",
                    "Acid",]
            }],

        //timer stuff
        timer: {
            timerCount: 0,
            timerDown: (function () {
                if (!clockRunning) {
                    intervalId = setInterval(function () {
                        game.timer.timerCount--;
                        game.timer.makeTimer();
                        game.timer.timeChecker();
                    }, 1000);
                    clockRunning = true;
                }
            }),

            timerClear: (function () {
                clearInterval(intervalId);
                clockRunning = false;
            }),

            makeTimer: (function () {
                $("#timer").text("Time Remaining: " + game.timer.timerCount);
            }),

            questionSet: (function () {
                game.timer.timerCount = 20;
                game.timer.makeTimer();
            }),

            answerSet: (function () {
                game.timer.timerCount = 10;
            }),

            timeChecker: (function () {
                if (game.timer.timerCount <= 0 && feedback.style.display === "none") {
                    game.timer.timerClear();
                    answersTimedout++;
                    answerResult = "Time is up!"
                    game.main.result();
                } else if (game.timer.timerCount <= 0 && feedback.style.display === "block") {
                    game.timer.timerClear();
                    currentQuestion++;
                    $("#picture").empty();
                    game.main.start();
                };
            }),
        },

        //questions and answers controls
        main: {
            default: (function () {
                changingContent.style.display = "none";
                game.timer.timerClear();
            }),
            //start current question
            start: (function () {
                // add if statement if questionnumber less than 9
                if (currentQuestion <= 9) {
                    startButton.style.display = "none";
                    changingContent.style.display = "block";
                    question.style.display = "block";
                    buttonBox.style.display = "block";
                    feedback.style.display = "none";
                    score.style.display = "none";
                    picture.style.display = "none";
                    startOverButton.style.display = "none";
                    timer.style.display = "block";
                    //populate question and answers for first question
                    game.main.makeQuestion();
                    game.main.makeButtons();
                    //start timer for question
                    game.timer.questionSet();
                    game.timer.timerDown();
                } else if (currentQuestion > 9) {
                    //end score
                    game.main.score();
                };
            }),

            result: (function () {
                feedback.style.display = "block";
                $("#feedback").text("The correct answer was: " + game.questionarr[currentQuestion].answerarr[game.questionarr[currentQuestion].correctAnswer]);
                buttonBox.style.display = "none";
                timer.style.display = "none";
                picture.style.display = "block";
                $("#picture").append("<img src=" + game.questionarr[currentQuestion].qimage + ">")
                $("#question").text(answerResult);
                $("#feedback").text(game.questionarr[currentQuestion].nReview);
                game.timer.answerSet();
                game.timer.timerDown();
            }),

            score: (function () {
                score.style.display = "block";
                $("#correct").text("Answers Correct: " + answersCorrect);
                $("#incorrect").text("Answers Incorrect: " + answersWrong);
                $("#timeup").text("Answers Timed Out: " + answersTimedout);
                startOverButton.style.display = "block";
                buttonBox.style.display = "none";
                feedback.style.display = "none";
                question.style.display = "none";
                timer.style.display = "none";
            }),

            makeButtons: (function () {
                $("#answer1").text(game.questionarr[currentQuestion].answerarr[0]);
                $("#answer2").text(game.questionarr[currentQuestion].answerarr[1]);
                $("#answer3").text(game.questionarr[currentQuestion].answerarr[2]);
                $("#answer4").text(game.questionarr[currentQuestion].answerarr[3]);
            }),
            makeQuestion: (function () {
                $("#question").text(game.questionarr[currentQuestion].question);
            })
        },
    };
    var intervalId;
    var clockRunning = false;

    //var bins for various types of answers
    var chosenAnswer;
    var currentQuestion = 0;

    var answersCorrect = 0;
    var answersWrong = 0;
    var answersTimedout = 0;
    var answerResult;

    game.main.default();

    $("#start").on("click", function () {
        game.main.start();
    });


    //compares answers on click, 
    $(".button").on("click", function () {
        chosenAnswer = parseInt($(this).val());
        console.log(chosenAnswer);
        if (chosenAnswer === game.questionarr[currentQuestion].correctAnswer) {
            answersCorrect++;
            console.log(answersCorrect);
            game.timer.timerClear();
            answerResult = "Correct!"
        } else {
            answersWrong++;
            console.log(answersWrong);
            game.timer.timerClear();
            answerResult = "Incorrect!"
        }
        game.main.result();
        console.log(game.questionarr[currentQuestion].nReview);
    })
    //start over button
    $("#startOver").on("click", function () {
        currentQuestion = 0;
        answersCorrect = 0;
        answersWrong = 0;
        answersTimedout = 0;
        game.main.start();
    })

});
