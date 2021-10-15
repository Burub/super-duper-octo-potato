var wordE = "jogo,bola,casa,trem,mito,caos,sede,saga,vida,medo,rude,rima,faca,cedo,doce,meta,roxo,azul,lago,mago", win = false, show = "****";

do {
    lvl = parseInt(prompt("Dificuldade:\n1 - Fácil\n2 - Médio\n3 - Difícil\n0 - Sair"));
    if(lvl == 1){
        //código jogo no fácil
        var inicio = wordE.substr(Math.round(Math.random() * wordE.length));
        //console.log(inicio); //tá pegando uma posição aleatória em diante
        if (inicio.indexOf(",") != -1) {
            var corte = inicio.substr(inicio.indexOf(",") + 1, 4);
            console.log(corte);
        }
        //troca asteriscos pela letra certa
        letter = prompt(show + "\nDigite uma letra:");
        for(var c = 0; c < 5; c++){
            for(var i = 0; i < show.length; i++){
                if(palavra[i] == letter){
                    show = show.replace(c, letter);
                }
            }
        }
    }
    //jogar novamente
    if(trys == 5){
        again = parseInt(prompt("Você perdeu! Deseja jogar de novo?\n1 - Sim\n2 - Não"));
        if(again == 1){
            win == false;
        }
        if(again == 2){
            win == true;
        }
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
        //win == true;
    }
    else{
        alert("Dificuldade inválida.");
    }
} while (trys < 5);
//while(win == false);