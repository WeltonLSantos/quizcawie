$(document).ready(function () {
    var options = [
         {
             question: "Se todo paraense é brasileiro e Maria é paraense, é CORRETO afirmar que:",
             choice: ["Nenhum paraense é brasileiro.", 
					  "Maria não é paraense.", 
					  "Maria é brasileira.", 
                      "Maria não é brasileira."],
             photoquest:"assets/images/white.png",
             answer: 2,
             photo: "assets/images/Image542.jpg"
         },
         {
             question: "Assinale a alternativa que apresenta a negação da seguinte proposição: \"Matheus gosta de matemática e João gosta de inglês.\"",
             choice: ["Matheus gosta de matemática ou João não gosta de inglês.", 
					  "Matheus não gosta de matemática ou João não gosta de inglês.", 
					  "Matheus gosta de matemática se João não gosta de inglês.", 
                      "Matheus não gosta de matemática e João gosta de inglês."],
             photoquest:"assets/images/white.png",
             answer: 1,
             photo: "assets/images/Image542.jpg"
         },
         {
             question: "Considere as seguintes afirmações: A - Se eu estudar, então não sou reprovado. B - Ou eu jogo, ou eu estudo. C - Eu fui reprovado. \n Nessas condições, é possível concluir logicamente que:",
             choice: ["Eu joguei.", 
					  "Eu estudei.", 
					  "Eu estudei e também joguei.", 
                      "Eu nem joguei e nem estudei."],
             photoquest:"assets/images/white.png",
             answer: 0,
             photo: "assets/images/Image542.jpg"
         },
         {
             question:"Assinale a alternativa que apresenta uma sentença que NÃO é uma proposição:",
             choice: ["Pedro é Agente Comunitário de Saúde.", 
					  "Minas Gerais é um estado brasileiro.", 
					  "Lucas é maior de idade.", 
                      "Rogério irá realizar a prova do concurso?"],
             photoquest:"assets/images/white.png",
             answer: 3,
             photo: "assets/images/Image542.jpg"  
         },
         {
            question:"Considere falsa a afirmação \"Se hoje estudo, então amanhã não trabalho.\" Nesse caso, é necessariamente verdade que:",
            choice: ["Hoje não estudo e amanhã trabalho.", 
					 "Amanhã não trabalho.", 
					 "Se amanhã trabalho, então hoje não estudo.", 
                     "Hoje estudo e amanhã trabalho."],
            photoquest:"assets/images/white.png",
            answer: 3,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"Três colegas pescam 21kg de peixe juntos e dividem todo o resultado da pescaria de maneira a formar uma progressão aritmética, em que o mínimo que um deles pode receber é 1kg de peixe. Portanto, o máximo que um dos colegas pode receber de peixe é:",
            choice: ["9kg", 
					 "12kg", 
					 "13kg", 
                     "16kg"],
            photoquest:"assets/images/white.png",
            answer: 2,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"Em uma matéria jornalística, uma pessoa afirmou em entrevista que “este transporte é irregular ou não houve fiscalização adequada”. A negação dessa afirmação é a seguinte:",
            choice: ["Esse transporte não é irregular ou houve fiscalização adequada", 
					 "Esse transporte não é irregular e houve fiscalização adequada", 
					 "Esse transporte é irregular ou houve fiscalização adequada", 
                     "Esse transporte é irregular e houve fiscalização adequada"],
            photoquest:"assets/images/white.png",
            answer: 1,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"A frase “Carlos não passou no vestibular, então vai estudar numa faculdade particular”, eqüivale, logicamente, à frase:",
            choice: ["Carlos não passou no vestibular e vai estudar numa faculdade particular.", 
					 "Carlos passou no vestibular ou vai estudar numa faculdade particular.", 
					 "Se Carlos passou no vestibular, então não vai estudarnuma faculdade particular.", 
                     "Esse transporte é irregular e houve fiscalização adequada"],
            photoquest:"assets/images/white.png",
            answer: 1,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"A negação de ~p v q é:",
            choice: ["p v ~ q", 
					 "p ^ ~ q", 
					 "~ p ^ q", 
                     "~ p v ~ q"],
            photoquest:"assets/images/white.png",
            answer: 1,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"Se é verdade que alguns adultos são felizes e que nenhum aluno de matemática é feliz, então é necessariamente verdade que:",
            choice: ["Algum adulto é aluno de matemática.", 
					 "Nenhum adulto é aluno de matemática.", 
					 "Algum adulto não é aluno de matemática.", 
                     "Algum aluno de matemática é adulto."],
            photoquest:"assets/images/white.png",
            answer: 1,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"Se Débora é nortista, então ela é determinada. Logo:",
            choice: ["Se Débora não é determinada, então ela não é nortista.", 
					 "Se Débora não é nortista, então ela é determinada.", 
					 "Se Débora é determinada, então ela é nortista.", 
                     "Se Débora é determinada, então ela não é nortista."],
            photoquest:"assets/images/white.png",
            answer: 0,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"Partindo das premissas: Todo funcionário de apoio é eficiente. Todo funcionário de apoio possui Ensino Médio completo. Leonardo é eficiente. Daniele é professora. Conclui-se que:",
            choice: ["Leonardo é funcionário de apoio.", 
					 "Daniele é eficiente.", 
					 "Leonardo trabalha com Daniele.", 
					 "Há pessoas com Ensino Médio completo que são eficientes."],
            answer: 3,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"A negação da proposição \"Se o candidato estuda, então passa no concurso\" é",
            choice: ["O candidato não estuda e passa no concurso.", 
					 "O candidato estuda e não passa no concurso.", 
					 "Se o candidato estuda, então não passa no concurso.", 
					 "Se o candidato não estuda, então passa no concurso."],
            answer: 1,
            photo: "assets/images/Image542.jpg"
         },
		 {
            question:"Assinale a alternativa que completa a série seguinte: C3, 6G, L10,...",
            choice: ["C4", 
					 "13M", 
					 "9I", 
                     "15R"],
            photoquest:"assets/images/white.png",
            answer: 3,
            photo: "assets/images/Image542.jpg"
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
    $("#logica").on("click", function () {
            $("#logica").hide();
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