$(document).ready(function () {
    var options = [
        {
            question: "O gráfico a seguir estabelece a relação entre o preço total p, em reais, cobrado pelo aluguel de um barco de turismo em um passeio pelo litoral norte de Alagoas e o número de horas x gasto no passeio.", 
            choice: ["70", "72", "74", "76"],
            photoquest:"assets/images/func0.png",
            answer: 3,
            photo: "assets/images/Image542.jpg"
        }, 
        {
            question: "Pedro tem 30 anos e tem mais três irmãos: Bianca de 27, Victor de 23 e Alex de 18. Qual a diferença de idade entre Pedro e irmão caçula?", 
            choice: ["13", "11", "12", "14" ],
            answer: 2,
            photo: "assets/images/Image542.jpg"
        },   
        {
           question: "Sabe-se que o custo de uma determinada empresa para produzir x unidades de um determinado produto, por mês, é representado de forma simplificada pela função cujo o modelo é f(x)= 2x²-400x+10.000. Assim, quantas unidades de um determinado produto deverão ser produzidas para que o custo da empresa seja o menor possível",
           choice: ["400", "300", "200", "100" ],
           answer: 3,
           photo: "assets/images/Image542.jpg"
        },
        {
            question: "Uma loja de departamento vende uma camisa por R$ 20,00 e 100 unidades desta camisa por mês. Observou-se que para cada real de desconto no preço da camisa as vendas aumentaram em 10 unidades por mês. Quanto deve ser o desconto em reais, de modo a se obter um faturamento mensal máximo na venda deste modelo de camisa?",
            choice: ["5", "6", "7", "8" ],
            answer: 0,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Um vírus se espalha em uma cidade com determinada rapidez. Em geral, essa rapidez é diretamente proporcional ao número de pessoas infectadas e, também, ao número de pessoas não infectadas. Sendo R a rapidez de propagação desse vírus e x o número de pessoas infectadas, tem-se R(x) = 2x(25000-x). A máxima rapidez de propagação do vírus ocorrerá quando o número de pessoas infectadas for igual a:",
            choice: ["125.000", "250.000", "31.250", "62.500" ],
            answer: 0,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "O lucro de uma empresa é dado por L(x) = - 10x² + 120x - 200 onde x é a quantidade vendida. Para que valor de x obtém lucro máximo?",
            choice: ["2", "4", "6", "8" ],
            answer: 2,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Um objeto lançado ao ar desenvolve uma trajetória descrita por y = - 3x² - 3x + 9, onde y é a altura em metros. Qual foi a altura máxima, em metros, atingida por esse objeto?",
            choice: ["6,25", "7,50", "8,25", "9,75" ],
            answer: 3,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Dividir um número por 0,0125 equivale a multiplicá-lo por",
            choice: ["1/125", "1/8", "12,5", "80" ],
            answer: 3,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Simplificando a fração (2004+2004)/(2004+2004+2004)  obtemos :",
            choice: ["2004", "2/3", "2/7", "1/2004" ],
            answer: 1,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: " O gráfico a seguir estabelece a relação entre o preço total P, em reais, cobrado pelo aluguel de um barco de turismo em um passeio pelo litoral norte de Alagoas e o número de horas x gasto no passeio.Qual o preço cobrado por um passeio que levou 4 horas?",
            choice: ["70", "72", "74", "76"],
            photoquest:"assets/images/func1.png",
            answer: 3,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "O gráfico a seguir representa a posição de um carro em movimento numa estrada. Determine a posição do carro no instante 7h.",
            choice: ["90", "105", "110", "120"],
            photoquest:"assets/images/func2.png",
            answer: 0,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Um reservatório em formato de cilindro é abastecido por uma fonte a vazão constante e tem a altura de sua coluna d’água (em metros), em função do tempo (em dias), descrita pelo seguinte gráfico. Sabendo que a altura do reservatório mede 12 metros, o número de dias necessários para que a fonte encha o reservatório inicialmente vazio é  ",
            choice: ["16", "17", "18", "20"],
            photoquest:"assets/images/func3.png",
            answer: 2,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "O gráfico da função f(x) = ax + b está representado na figura. O valor de a + b é:",
            choice: ["-1", "2/5", "3/2", "2"],
            photoquest:"assets/images/func4.png",
            answer: 3,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Na figura mostrada tem-se o gráfico da função do 1º grau definida por y = ax + b. O valor de a / b é igual a:",
            choice: ["1", "1/2", "2", "3/2"],
            photoquest:"assets/images/func5.png",
            answer: 1,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Sejam as funções f e g, definidas por f(x) = ax + b e g(x) = mx + n, representadas no gráfico. É correto afirmar que a-m / b+n é igual a:",
            choice: ["-1/3", "0", "2/3", "1"],
            photoquest:"assets/images/func6.png",
            answer: 0,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Qual a integral do Cosseno?",
            choice: ["Tangente", "-Tangente", "Seno", "-Seno"],
            answer: 2,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Qual a integral do Seno?",
            choice: ["Cosseno", "-Cosseno", "Secante", "Tangente"],
            answer: 1,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Qual a derivada do Seno?",
            choice: ["Cosseno", "-Cosseno", "Secante", "Tangente"],
            answer: 0,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Qual a derivada do Cosseno?",
            choice: ["Tangente", "-Tangente", "Seno", "-Seno"],
            answer: 3,
            photo: "assets/images/Image542.jpg"
        },
        {
            question: " Considera os conjuntos A = {(1,2), (1,3), (2,3)} e B = {1, 2, 3, 4, 5}, e seja a função f: A → B tal que f (x,y) = x + y.",
            choice: ["Sobrejetora", "bijetora", "Injetora", "Par"],
            answer: 2,
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
