var trys = 0, wordE = "jogo,bola,casa,trem,mito,caos,sede,saga,vida,medo,rude,rima,faca,cedo,doce,meta,roxo,azul,lago,mago", hangman = " ";

do {
    lvl = parseInt(prompt("Dificuldade:\n1 - Fácil\n2 - Médio\n3 - Difícil\n0 - Sair"));
    if(lvl == 1){
        //código jogo no fácil
        inicio = wordE.substring(Math.round(Math.random() * wordE.length));
        palavra = inicio.substr(0, 4);
    }
    if(lvl == 2){
        //código jogo no médio
        alert("médio");
    }
    if(lvl == 3){
        //código jogo no difícil
        alert("dificil");
    }
    if(lvl == 0){
        trys = 5;
    }
    else{
        alert("Dificuldade inválida.");
    }
} while (trys < 5);