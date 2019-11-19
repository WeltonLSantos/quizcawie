$(document).ready(function () {
    var options = [
        {
            question: "Na ordem cronológica, marque a alternativa correta.", 
            choice: ["Ábaco, Eniac, Chip, Transistor e Microprocessador.", "Eniac, Ábaco, Chip, Transistor e Microprocessador.", "Ábaco, Eniac, Chip, Microprocessador e Transistor.", "Ábaco, Eniac, Transistor, Chip e Microprocessador." ],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"            
        },
        {
            question: "A Tabela ASCII é usada pela maior parte da indústria de computadores para a troca de informações. Cada caractere é representado por um código de oito bits (um byte). Sabendo que o correspondente em ASCII do caractere A é 0100 0001 (em binário), qual o correspondente em ASCII do caractere J (em decimal)?", 
            choice: ["65", "72", "74", "80" ],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "A conversão do número 1111 1010 1100 1110 para hexadecimal corresponde a:", 
            choice: ["FACA", "CASA", "FACE", "ABCD" ],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Qual o valor em decimal do binário (8 bits) 00000111, considerando a representação sem sinal?", 
            choice: ["8", "7", "13", "9" ],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Um administrador de sistemas, ao analisar o conteúdo de um arquivo binário, percebeu que o primeiro byte desse arquivo é, em hexadecimal, igual a 9F, que corresponde, em decimal, ao valor:", 
            choice: ["16", "159", "105", "99" ],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Se o sistema decimal é utilizado pelos seres humanos, o sistema binário constitui a base para a representação da informação nos computadores. Nesse contexto, um equipamento dispõe de três displays, o primeiro que mostra números em formato decimal, o segundo em binário e o terceiro em hexadecimal, havendo uma correspondência entre as representações. Se o display decimal mostra o número 250, os equivalentes em binário e em hexadecimal mostrarão, respectivamente", 
            choice: ["11111010 e FA", "11111010 e FE", "11111010 e FC", "11111110 e FE" ],
            answer: 0,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Em relação aos sistemas de numeração e representação de dados, analise as seguintes afirmativas: I. O número 10001 em binário corresponde ao número 17 na representação decimal. II. D na representação hexadecimal corresponde ao número 1110 em binário. III. BBB na representação hexadecimal corresponde ao número 3003 na representação decimal. Marque a alternativa CORRETA:", 
            choice: ["apenas as afirmativas I e II são verdadeiras.", "apenas as afirmativas I e III são verdadeiras.", "apenas as afirmativas II e III são verdadeiras.", "todas as afirmativas são verdadeiras." ],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Quais os valores em decimal do binário (8 bits) 10000001, considerando a representação sem sinal e em Complemento de 2, respectivamente?", 
            choice: ["120, -111.", "100, -100.", "129, -127.", "129, 127." ],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Quais os valores em decimal do binário (8 bits) 00000111, considerando a representação sem sinal e em Complemento de 2, respectivamente?", 
            choice: ["13, 7.", "13, 13.", "7, -7.", "7, 7." ],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Assinale a opção correta, a respeito de conceitos em processamento de dados.", 
            choice: ["Na aritmética computacional de ponto flutuante, é possível representar apenas números inteiros.", "A representação em base decimal é natural para os seres humanos. Por isto, os computadores modernos usam internamente esta base para facilitar a interação homem máquina e estimular o raciocínio integrado.", "Variáveis declaradas como ponto flutuante existem para armazenar números que possuem casas decimais, como 5,1497.", "A representação por complemento de dois é adotada apenas para representar números binários positivos." ],
            answer: 2,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "De acordo com o padrão IEEE, um número em ponto flutuante, com precisão simples, é armazenado como S:E:F, em que S, E e F são armazenados em 1 bit, 8 bits e 23 bits, respectivamente. Qual é o valor decimal do número de ponto flutuante C1E00000 (notação hexadecimal)?", 
            choice: ["+26.", "-15.", "-26.", "-28." ],
            answer: 3,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Efetue a operação abaixo utilizando aritmética de complemento de 2 e marque a alternativa correspondente ao valor correto, considerando a palavra de dados com 8 bits: (+24)10 + (+15)10 .", 
            choice: ["00011001", "00100111", "11110011", "00110110" ],
            answer: 1,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Considere duas portas lógicas independentes, uma executa a lógica EXCLUSIVE OR (XOR), cujas entradas são A e B e a outra executa a lógica OR, cujas entradas são C e D. Se A=1, B=1 e se C=0, D=1, as saídas das portas serão, respectivamente:", 
            choice: ["0 1", "0 0", "1 0", "1 1" ],
            answer: 0,
            photoquest: "assets/images/white.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Para que a saída X do circuito apresentado na figura abaixo possua valor lógico igual a 1, é necessário que as entradas A, B e C possuam os seguintes valores lógicos:", 
            choice: ["A=0; B=0; C=0.", "A=1; B=1; C=1.", "A=0; B=1; C=1.", "A=1; B=1; C=0." ],
            answer: 2,
            photoquest: "assets/images/circ.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "A figura abaixo representa um circuito lógico. Este circuito lógico pode ser simplificado pela porta lógica", 
            choice: ["OR.", "XOR.", "XNOR.", "NOR." ],
            answer: 3,
            photoquest: "assets/images/circ2.png",
            photo: "assets/images/Image542.jpg"
        },
        {
            question: "Considere o seguinte: A=1, B=1,C=1,D=1,E=0. Qual resultado da expressão logica ((A OR C)AND B) AND E?", 
            choice: ["0", "3", "1", "2" ],
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
    $("#introducaocomputacao").on("click", function () {
            $("#introducaocomputacao").hide();
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