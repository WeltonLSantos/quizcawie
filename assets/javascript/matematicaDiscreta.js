$(document).ready(function () {
    var options = [
        
        {
            question: "Três funcionários de um escritório cumprem,sistematicamente,horas-extras de trabalho,inclusive aos sábados e domingos:um deles a cada 15 dias,outro a cada 18 dias e o terceiro a cada 20 dias.Se hoje,os três cumprem horas extras,a próxima vez que irão cumpri-las num mesmo dia será daqui a:",
            choice: ["um mês", "um bimestre", "um trimestre", "um semestre" ],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "No alto da torre de uma emissora de televisão,duas luzes piscam com frequência diferentes. A primeira luz pisca 15 vezes por minuto e a segunda,10 vezes por minuto. Em certo instante,as luzes piscam simultaneamente. Após quantos segundos as duas voltarão a piscar juntas?",
            choice: ["10", "12", "15", "20" ],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Resolva a seguinte equações em relação a X no Zn indicado.", 
            choice: ["1", "2", "3", "0" ],
            answer: 0,
            photoquest: "assets/images/mod.png",
            photo: "assets/images/Image542.jpg"
            
        },
{
            question: "Resolva a seguinte equações em relação a X no Zn indicado.", 
            choice: ["6", "7", "8", "9" ],
            answer: 3,
            photoquest: "assets/images/mod2.png",
            photo: "assets/images/Image542.jpg"
            
        },
{
            question: "Observe o diagrama de Venn a seguir.", 
            choice: ["(x+z)~y+~xy~z", "(x+z)~y+z~yz", "(x+z)y+~x~y~z", "(x+z)y+~xy~z" ],
            answer: 3,
            photoquest: "assets/images/veen.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Qual das proposições abaixo é falsa?",
            choice: ["2 <= 3", "10 > 20", "x = x^1", "6 + y >= 5 + y"],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Indique a proposição verdadeira:",
            choice: ["2 > 7", "10 >= x + 10", "x = x*x^0", "6 + y >= 5 + 2y"],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Quantas combinações de valores diferentes tornam a expressão E = (p ∨ (¬p ∨ q)) ∧ ¬(q ∧ ¬r) válida:",
            choice: ["2", "4", "6", "8"],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Uma possível forma simplificada da expressão p ∧ (¬(¬p ∨ q))) ∨ (p ∧ q) é:",
            choice: ["¬p", "¬q", "q", "p"],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Considerando como argumentos as seguintes sentenças: p = Lord Charles foi morto com uma pancada na cabeça com um castiçal; q = Lady Camila estava na sala de jantar no momento do assassinato; r = Sara estava na sala de jantar no momento do assassinato; s = Cozinheiro estava na cozinha no momento do assassinato; t = Açougueiro matou Lord Charles com uma dose fatal de arsênico; u = Motorista matou Lord Charles; v = Ajudante pessoal de Lord Charles o matou; defina quem matou o Lord Charles:",
            choice: ["Lady Camila", "O Cozinheiro", "O Ajudante", "O Motorista"],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Determine o conjunto verdade para o predicado n^2 ≤ 30 e domínio Z",
            choice: ["{-5..0}", "{0..∞}", "{-5..5}", "{∞..5}"],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "A negação da afirmação: ∀n ∈ Z, se n é primo então n é ímpar ou n = 2 é:",
            choice: ["∃n ∈ Z, n é primo e n é par e n != 2", "∀n ∈ Z, n é primo e n é par e n != 2", "∀n ∈ Z, n é primo e n é par e n = 2", "∃n ∈ Z, n é primo e n é par e n != 2"],
            answer: 0,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Qual a fórmula fechada da soma 1/1·2 + 1/2·3 + 1/3·4+...+1/n(n + 1)?",
            choice: ["1/n+1", "k+1/k+2", "k+1/n-1", "n+1/n*(k-1)"],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Qual a fórmula fechada da multiplicação (1 − 1/2)(1 − 1/3)(1 − 1/4)...(1 − 1/n)?",
            choice: ["k/n", "1/k+1", "2n/n^2", "1/n^2 - 1"],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Dados dois conjuntos A e B, a diferença simétrica de A e B, representada por A ⊕ B tem a forma:",
            choice: ["(A ∩ B)", "(A ∪ B) - (A ∩ B)", "(A − B)", "(A − B) ∪ (B − A)"],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Dadas as seguintes definições: ∀x1, x2 ∈ X, se f(x1) = f(x2) então x1 = x2 e ∀x1, x2 ∈ X, se x1 6= x2 então f(x1) 6= f(x2). Porque estas duas definições são logicamente equivalentes?",
            choice: ["As funções possuem o mesmo domínio", "A segunda definição é a forma contrapositiva da primeira", "O conjunto união das definições não possui valores", "As definições de vírus foram atualizadas"],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "A função que constrói a sequência 1, −1/3, 1/5, −1/7, 1/9, −1/11, ... é:",
            choice: ["1^n / 2n + 1 * -1/1", "(-1)^n / 2n + 1 * 1^-1", "(-1)^n / 2n + 1", "(-1)^n / n + 1"],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Seja S = {3, 4, 5, 6, 7, 8, 9, 10, 11, 12}. Suponha que seis inteiros sejam escolhidos de S. Qual dos valores abaixo não poderá ser feita ao somar-se dois desses inteiros?",
            choice: ["22", "7", "15", "6"],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Quantos inteiros devem ser escolhidos aleatoriamente para se ter certeza que pelo menos dois deles têm o mesmo resto quando divididos por 7?",
            choice: ["7", "8", "14", "15"],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: "Suponha um grupo de 40 pessoas, todas na faixa de 17 a 34 anos. Você quer fazer uma aposta que o grupo possui pelo menos x pessoas com a mesma idade. Qual é o maior valor de x que você pode apostar com certeza para vencer a aposta?",
            choice: ["1", "2", "3", "4"],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: " Quantos números ímpares existem no intervalo [10, 99] que possuem dígitos distintos?",
            choice: ["9", "10", "99", "40"],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: " Quantas formas diferentes as letras da palavra LETRA podem ser arranjadas se as letras LE devem ficar juntas mas podem ser escritas como LE ou EL?",
            choice: ["2!", "2!*4", "4!", "4! - 2"],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
            
        },
        {
            question: " Quantas soluções existem para a equação x1 + x2 + x3 ≤ 20, sendo que cada xi, i = 1, 2, 3, é um inteiro não negativo? ",
            choice: ["1771", "20", "3", "780"],
            answer: 0,
            photoquest: "assets/images/white.png",
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
