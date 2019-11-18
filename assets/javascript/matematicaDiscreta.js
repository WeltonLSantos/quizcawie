$(document).ready(function () {
    var options = [
        
        {
            question: "Três funcionários de um escritório cumprem,sistematicamente,horas-extras de trabalho,inclusive aos sábados e domingos:um deles a cada 15 dias,outro a cada 18 dias e o terceiro a cada 20 dias.Se hoje,os três cumprem horas extras,a próxima vez que irão cumpri-las num mesmo dia será daqui a:",
            choice: ["um mês", "um bimestre", "um trimestre", "um semestre" ],
            answer: 3,
            photo: "assets/images/white"
        },
        {
            question: "No alto da torre de uma emissora de televisão,duas luzes piscam com frequência diferentes. A primeira luz pisca 15 vezes por minuto e a segunda,10 vezes por minuto. Em certo instante,as luzes piscam simultaneamente. Após quantos segundos as duas voltarão a piscar juntas?",
            choice: ["10", "12", "15", "20" ],
            answer: 1,
            photo: "assets/images/white"
        },
        {
            question: "Resolva a seguinte equações em relação a X no Zn indicado.", 
            choice: ["1", "2", "3", "0" ],
            answer: 0,
            photo: "assets/images/mod.png"
        },
{
            question: "Resolva a seguinte equações em relação a X no Zn indicado.", 
            choice: ["6", "7", "8", "9" ],
            answer: 3,
            photo: "assets/images/mod2.png"
        },
{
            question: "Observe o diagrama de Venn a seguir.", 
            choice: ["(x+z)~y+~xy~z", "(x+z)~y+z~yz", "(x+z)y+~x~y~z", "(x+z)y+~xy~z" ],
            answer: 3,
            photo: "assets/images/veen.png"
        }
];
    
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 180;
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
    $("#matematicaDiscreta").on("click", function () {
            $("#matematicaDiscreta").hide();
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
            timer= 180;
    
        //run the score screen if all questions answered
        if ((wrongCount + correctCount + unanswerCount) === 3) {
            $("#questionblock").empty();
            $("#questionblock").html("<h5> Sua pontuação foi: </h5>");
            $("#answerblock").append("<h6> Correto: " + correctCount + "</h6>" );
            $("#answerblock").append("<h6> Incoreto: " + wrongCount + "</h6>" );
            $("#answerblock").append("<h6> Sem resposta: " + unanswerCount + "</h6>" );
            $("#reset").show();
            correctCount = 0;
            wrongCount = 0;
            unanswerCount = 0;
    
        } else {
            runTimer();
            displayQuestion();
    
        }
        }, 8000);
    
    
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