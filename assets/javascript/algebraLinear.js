$(document).ready(function () {
    var options = [
         {
             question: "Sendo a matriz apresentada a seguir igual a matriz identidade de ordem 2, o valor de 2x é:",
             choice: ["-4", "6", "4", "8"],
             photoquest:"assets/images/alge0.png",
             answer: 3,
             photo: "assets/images/Image542.jpg"
         },
         {
             question: "Se A é uma matriz 2x2 e detA = 5, então o valor de det 2A é:",
             choice: ["5", "10", "20", "25"],
             answer: 2,
             photo: "assets/images/Image542.jpg"
         },
         {
             question: "O sistema linear abaixo é possível e determinado se e somente se:",
             choice: ["m=2", "m=4", "m!=-4", "m!=1"],
             photoquest:"assets/images/alge1.png",
             answer: 2,
             photo: "assets/images/Image542.jpg"
         },
         {
             question:"Dado a equação abaixo, calcule:",
             choice: ["1", "-1", "-1/5", "0"],
             photoquest:"assets/images/alge2.png", 
             answer: 0,
             photo: "assets/images/Image542.jpg"  
         },
         {
            question:"Dada a matriz, calcule o seu determinante.",
            choice: ["0", "20", "30", "40"],
            photoquest:"assets/images/alge3.png", 
            answer: 1,
            photo: "assets/images/Image542.jpg"
         }
         ];
    
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 30;
    var intervalId;
    var userGuess ="";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    
    
    
    $("#reset").hide();
    //click start button to start game
    $("#algebraLinear").on("click", function () {
            $("#algebraLinear").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < options.length; i++) {
        holder.push(options[i]);
    }
        })
    //timer start
    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    //timer countdown
    function decrement() {
        $("#timeleft").html("<h7>Tempo restante: " + timer + "</h7>");
        timer --;
    
        //stop timer if reach 0
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>O tempo acabou! A resposta correta é: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }	
    }
    
    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    //randomly pick question in array if not already shown
    //display question and loop though and display possible answers
    function displayQuestion() {
        //generate random index in array
        index = Math.floor(Math.random()*options.length);
        pick = options[index];
    
    //	if (pick.shown) {
    //		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
    //		displayQuestion();
    //	} else {
    //		console.log(pick.question);
            //iterate through answer array and display
            $("#questionblock").html("<h6>" + pick.question + "</h6>");
            $("#answerblock").append("<img src=" + pick.photoquest + ">");
            newArray.push(pick);
            for(var i = 0; i < pick.choice.length; i++) {
                var userChoice = $("<div>");
                userChoice.addClass("answerchoice");
                userChoice.html(pick.choice[i]);
                //assign array position to it so can check answer
                userChoice.attr("data-guessvalue", i);
                $("#answerblock").append(userChoice);
    //		}
    }
    
    
    
    //click function to select answer and outcomes
    $(".answerchoice").on("click", function () {
        //grab array position from userGuess
        userGuess = parseInt($(this).attr("data-guessvalue"));
    
        //correct guess or wrong guess outcomes
        if (userGuess === pick.answer) {
            stop();
            correctCount++;
            userGuess="";
            $("#answerblock").html("<p>Certa resposta!!!</p>");
            hidepicture();
    
        } else {
            stop();
            wrongCount++;
            userGuess="";
            $("#answerblock").html("<p>Errado! A resposta correta é: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    })
    }
    
    
    function hidepicture () {
        $("#answerblock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        options.splice(index,1);
    
        var hidpic = setTimeout(function() {
            $("#answerblock").empty();
            timer= 30;
    
        //run the score screen if all questions answered
        if ((wrongCount + correctCount + unanswerCount) === 3) {
            $("#questionblock").empty();
            $("#questionblock").html("<h3>Game Over!  Aqui está como você fez: </h3>");
            $("#answerblock").append("<h4> Correto: " + correctCount + "</h4>" );
            $("#answerblock").append("<h4> Incoreto: " + wrongCount + "</h4>" );
            $("#answerblock").append("<h4> Sem resposta: " + unanswerCount + "</h4>" );
            $("#reset").show();
            correctCount = 0;
            wrongCount = 0;
            unanswerCount = 0;
    
        } else {
            runTimer();
            displayQuestion();
    
        }
        }, 5000);
    
    
    }
    
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questionblock").empty();
        for(var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    
    })
    
    })