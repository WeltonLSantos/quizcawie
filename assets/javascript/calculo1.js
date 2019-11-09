$(document).ready(function () {
    var options = [
        {
            question: "Quanto é 8x2+7²?", 
            choice: ["75", "65", "256", "64"],
            photoquest:"assets/images/Image542.jpg",
            answer: 1,
            photo: "assets/images/Image542.jpg"
         },
         {
             question: "Leandro tem 40 balas chupou 12 e deu 10 para sua irmã. Com quantas balas ele ficou?", 
            choice: ["15", "18", "14", "16"],
            photoquest:"assets/images/Image542.jpg",
            answer: 1,
            photo: "assets/images/Image542.jpg"
         }, 
         {
             question: "Quantos números 1 eu tenho de 1 até 191?", 
            choice: ["140", "136", "132", "150" ],
            photoquest:"assets/images/Image542.jpg",
            answer: 2,
            photo: "assets/images/Image542.jpg"
        }, 
        {
            question: "Pedro tem 30 anos e tem mais três irmãos: Bianca de 27, Victor de 23 e Alex de 18. Qual a diferença de idade entre Pedro e irmão caçula?", 
            choice: ["13", "11", "12", "14" ],
            answer: 2,
            photo: "assets/images/Image542.jpg"
        }, 
        {
            question: "Antônio, José e Pedro tem juntos 520 figurinhas. Antônio tem 16 figurinhas a mais do que Pedro e José tem o dobro da quantidade de figurinhas de Pedro. Qual menino possui 252 figurinhas?", 
            choice: ["Antônio", "José", "Pedro", "Nenhum deles" ],
            answer: 1,
            photo: "assets/images/Image542.jpg"
        }, 
        {
            question: "Pensei em um número e multipliquei-o por 5. Depois, somei o resultado com 3 e obtive 23. Pensei em qual número?", 
            choice: ["3", "4", "5", "6" ],
            answer: 1,
            photo: "assets/images/Image542.jpg"
        }, 
        {
            question: "Pedro tem 6 bolas de gude a mais do que Jorge. Os dois juntos têm 54. Quanto tem cada um?", 
            choice: ["30 e 24", "24 e 26", "28 e 26", "32 e 22" ],
            answer: 0,
            photo: "assets/images/Image542.jpg"
        }, 
        {
            question: "Se seis latas de leite custam 72 reais, qual o preço de 9 latas?", 
            choice: ["108 reais", "100 reais", "90 reais", "87 reais" ],
            answer: 0,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Se seis pessoas comem 6 chocolates em 6 minutos, quantas pessoas comerão 80 chocolates em 48 minutos?", 
            choice: ["12", "14", "10", "8" ],
            answer: 2,
            photo: "assets/images/Image542.jpg"
        }, 
        {
            question: "Que número abaixo completa a sequência a seguir? 12 - 6 - 18 - 24 - ??", 
            choice: ["42", "26", "24", "30" ],
            answer: 0,
            photo: "assets/images/Image542.jpg"
        }];
    
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
    $("#calculo1").on("click", function () {
            $("#calculo1").hide();
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